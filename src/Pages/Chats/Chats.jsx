import React from "react";
import ChatSide from "../../Components/ChatSide/ChatSide";
import ChatsNav from "../../Components/ChatsNav/ChatsNav";
import "./Chats.css";

function Chats() {
  return (
    <div className="Sidebar w-100">
      <ChatsNav />
      <div className=" w-100 h-100">
        <div className="row w-100 h-100">
          <div className="col-3">
            <ChatSide />
          </div>
          <div className="col-9 textArea">
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
