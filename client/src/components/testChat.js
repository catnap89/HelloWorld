import React from "react";

function TestChat() {
    return (
        <div className="chat_window">
            <div className="top_menu">
                <div className="buttons">
                    <div className="button close"></div>
                    <div className="button minimize"></div>
                    <div className="button maximize"></div>
                </div>
                <div className="title">Chat</div>
            </div>
            <ul id="messages" className="messages"></ul>
            <div className="bottom_wrapper clearfix">
                <i id="typing"></i>
                <form id="form">
                    <div className="message_input_wrapper">
                        <input id="message" className="message_input" placeholder="Type your message here..." />
                    </div>
                    <button className="send_message">Send</button>
                </form>
            </div>
        </div>
        
    );
}

export default TestChat;