import React, { Component } from "react";
function FormattDate(props){
    return <h1>{props.date.toLocaleTimeString()}</h1>;
}
class Clock extends Component{
    //1.先访问构造函数
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    //挂载组件
    //3.输出插入到DOM时，设置一个计时器，每1秒执行一次tick
    componentDidMount(){
        this.timerId = setInterval(() => this.tick(), 1000);
    }
    //卸载组件
    //Clock组件被移除时，计时器也被移除
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    //更新/获取最新时间
    tick(){
        this.setState(
            {date: new Date()}
        );
    }
    //2.更新DOM并渲染输出
    render(){
        return (
            <div>
                <h1>当前时间: {this.state.date.toLocaleTimeString()}</h1>
                <FormattDate date={this.state.date} />
            </div>
        );
    }
}
export default Clock;
export {FormattDate};