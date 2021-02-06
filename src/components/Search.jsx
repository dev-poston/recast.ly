class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    // this.debounce = this.debounce.bind(this);
    // this.handleChange = this.debounce(this.handleChange.bind(this), 5000);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // debounce(func, value, wait) {
  //   console.log(func);
  //   console.log(wait);
  //   let timeout;
  //   return function executedFunction(value) {
  //     console.log(value, wait);
  //     const later = () => {
  //       clearTimeout(timeout);
  //       func(value, 5);
  //     };
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //   };
  // }

  handleChange(e) {
    // console.log(this.props);
    // console.log(e.target.value);
    this.props.search(e.target.value);
    this.setState({value: e.target.value});
    // this.debounce(this.props.search, e.target.value, 5000);
  }

  handleSubmit() {
    this.props.search(this.state.value);
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
