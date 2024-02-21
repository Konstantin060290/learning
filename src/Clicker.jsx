import React, { Component } from "react";

export default class Clicker extends Component{
    constructor(){
        super();
        this.state ={
            count: 10
        };
    }

    handlePlusClick() {
        this.setState({ count: this.state.count + 1 });
    };

    handleMinusClick() {
        this.setState({ count: this.state.count - 1 });
    };

    render(){
    return (
        <div className="App">
            <a>{this.state.count}</a>
            <button onClick={() => this.handlePlusClick()}>+</button>
            <button onClick={() => this.handleMinusClick()}>-</button>
        </div>);
    }
}
