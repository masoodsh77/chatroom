import React, { useState } from "react";
import ContactCard from "../ContactCard/ContactCard";

function ChatSide() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "masood",
      message: "this is test my mesengers app in org",
      time: "19:57 PM",
      avatar:null
    },
    {
        id: 2,
        name: "Amir",
        message: "this is test my mesengers app in org",
        time: "18:57 PM",
        avatar:null
      },
      {
        id: 3,
        name: "Ali Rasoli",
        message: "this is test my mesengers app in org",
        time: "19:57 PM",
        avatar:null
      },
  ]);
  return (
    <div className="ChatSide h-100 w-100">
      <div className="p-2">
        <input
          className="form-control sideSearch"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
            {users.map(item=>{
                return(
                    <option key={item.id} value={item.name} />
                )
            })}
        </datalist>
      </div>
      <div className="contactCard-List">
        {users.map(item=>{
            return(
                <ContactCard data={item} key={item.id} />
            )
        })}
      </div>
    </div>
  );
}

export default ChatSide;
