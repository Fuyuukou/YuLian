//包含状态的类组件
import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    };
    increment = () =>{
        this.setState({count: this.state.count+1});
    };
    render(){
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>组件内的状态元素+1</button>
            </div>
        );
    }
}
export default Counter;