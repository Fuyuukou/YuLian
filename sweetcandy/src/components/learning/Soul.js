// 组件教学
import React, { Component } from "react";

// //定义一个函数组件
// function Soul() {
//     return (
//         <h1>SoulTide</h1>
//     );
// }


//定义一个类组件，通常用于需要管理状态或生命周期方法
class Soul extends Component{
    render(){
        return (
        <h1>SoulTide</h1>
        );
    }
}
//复合组件-多组件组成一个组件
function OriginUrl(props){
    return <h3>{props.url}</h3>;
}
function OriginName(props){
    return <h3>{props.name}</h3>;
}
function OriginUse(props) {
    return <h3>{props.use}</h3>;
}
function YueLiang(){
    return (
        <div>
            <OriginUrl url="fuyuukou.com" />
            <OriginName name="冬雨幸" />
            <OriginUse use="建立" />
        </div>
    );
}

export default Soul;
export {YueLiang};