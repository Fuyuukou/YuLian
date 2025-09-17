import React, { Component } from "react";
class ParentComponent extends Component{
    constructor(props){
        super(props);
        this.state = {message: ''};
    }
    //定义函数，设置Message, 传递定义的函数
    handleMessage = (msg)=>{
        this.setState({message: msg});
    };
    render(){
        return (
            <div>
                <ChildComponent onMessage={this.handleMessage}/>
                <p>Message from child: {this.state.message}</p>
            </div>
        )
    }
}
const ChildComponent = (props)=>{
    const sendMessage = ()=>{
        props.onMessage("HelloWorld!");
    }
    return <button onClick={sendMessage}>发送消息</button>
}
export default ParentComponent;