import React from "react";
function UserGreeting(){
    return <h1>欢迎回来!</h1>;
}
function GetGreeting(){
    return <h1>请先登录!</h1>;
}
function DecideGreeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }else{
        return <GetGreeting />;
    }
}
export default DecideGreeting;