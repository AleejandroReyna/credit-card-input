import React, {Component} from "React"

export default class CardCredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkType = this.checkType.bind(this);
  }

  process(number) {
    let type = this.checkType(number);
    let text = this.insertSpaces(number);
    text.trim();
    return {
      text: text,
      type: type
    };
  }

  filterLimit(text) {
    if (text.length > 16) {
      text = text.slice(0, 16);
    }

    return text;
  }

  filterWhitespace(text) {
    return text.replace(/\s/g, '');
  }

  filterLetters(text) {
    return text.replace(/[a-zA-Z]/, '')
  }

  insertSpaces(text) {
    return text.replace(/(.{4})/g, '$1 ');
  }

  checkType(text) {
    let types = this.props.types;
    for (var type in types) {
      if (text.match(types[type])) {
        return type;
      }
    }
    return '';
  }

  handleChange(e) {
    let newValue = e.target.value;
    let newNumber = this.filterWhitespace(newValue);
    newNumber = this.filterLetters(newNumber);
    newNumber = this.filterLimit(newNumber);
    this.setState({number: newNumber});
  }

  render() {
    let { text: text, type: type } = this.process(this.state.number);
    return(
      <div>
        <input type="text" value={text} onChange={this.handleChange} />
        <input type="text" value={type} readOnly />
      </div>
    )
  }
}
