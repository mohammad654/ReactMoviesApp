import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: this.state.count });
  };

  render() {
 
    return (
      <main className="container">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary px-2"
          onClick={this.doHandleIncrement}
        >
          <i className="fa fa-plus"></i> Increment
        </button>

        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </main>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
