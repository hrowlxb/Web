import "./Header.css";
import React from "react";

const Header = () => {

    console.log(" Header 컴포넌트 호출");

    return (
        <div className="Header">
            <h3>오늘은 🗓️</h3> {/* command + control + spacebar */}
            <h1>{new Date().toDateString()}</h1>
            
        </div>
    );
}

export default React.memo;