import React from "react";

function UserProfile() {
    const user = {
        name: "冬雨幸",
        age: 20,
        location: "中国",
    };
    return (
        <div>
            <h1>用户信息</h1>
            <h3>姓名: {user.name}</h3>
            <h4>姓名: {user.age}</h4>
            <h5>姓名: {user.location}</h5>
        </div>
    );
}

export default UserProfile;