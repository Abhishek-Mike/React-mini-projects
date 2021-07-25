import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

// if not using arrow function use constructors
//   constructor() {
//     super();   // you have to call super for parent class inside child(here)
//     this.handleIncrement = this.handleIncrement.bind(this);
//   }

  handleIncrement = () => {
    //console.log("Increment Clicked!!", this);
    //console.log(product);
    this.setState({ count: this.state.count + 1})
    //1. state of this component is going to change
    //2. react will schedule a call to render method
    //3. return new react element has two children ( span & button)
  };


  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncrement() }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
