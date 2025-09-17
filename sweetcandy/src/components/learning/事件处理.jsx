import React, { Component } from "react";
class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }
    // 处理点击事件, 切换按钮状态
    handleClick(){
        this.setState(prevState=>({isToggleOn: !prevState.isToggleOn}));
    }
    render(){
        return (
            // <button onClick={this.handleClick}>
            <button onClick={(e)=>this.handleClick(e)}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        )
    }
}
class Popper extends Component{
    constructor(props){
        super(props);
        this.state = {name: "HelloWorld"}
    }
    preventPop(name,e){
        e.preventDefault();
        alert(name);
    }
    render(){
        return (
            <div>
                <p>Hello</p>
                {/* <a href="#" onClick={this.preventPop.bind(this,this.state.name)}>Click</a> */}
                <a href="#" onClick={(e)=>this.preventPop(this.state.name,e)}>Click</a>
            </div>
        )
    }
}
export default Toggle;
export {Popper};