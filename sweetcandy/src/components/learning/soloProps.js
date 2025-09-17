import React, { Component } from "react";
function UserCard(props){
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Info: {props.info}</h3>
        </div>
    )
}
class HelloMessage extends Component{
    render(){
        return (
            <div>
                <p>Hello,{this.props.name}</p>
            </div>

        )
    };
}
HelloMessage.defaultProps = {
    name: "冬雨幸"
};


export default HelloMessage;
export {UserCard};