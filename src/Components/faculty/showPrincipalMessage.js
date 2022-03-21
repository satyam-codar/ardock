import React, { useState, useEffect } from "react";
import { firebase } from "../gallery/firebase/config";

// import Todo from './Todo';

export default function ShowPrincipalMessage() {
  const [messageList, setMessageList] = useState();
  const [retrievedMessage, setRetrievedMessage] = useState();

  useEffect(() => {
    const messageRef = firebase.database().ref("Message");
    messageRef.on("value", (snapshot) => {
      const messages = snapshot.val();
      const messageList = [];
      for (let id in messages) {
        messageList.push({ id, ...messages[id] });
      }

      setMessageList(messageList);
      //   console.log("hel");
      //   console.log(messageList);
      setRetrievedMessage(messageList[messageList.length - 1]);
    });
  }, []);

  return (
    <div>
      {/* <p>
        {messageList
          ? messageList.map((message, index) => <p>{message.message}</p>)
          : "message not available"}
      </p> */}

      <p>
        {retrievedMessage ? (
          <p>{retrievedMessage.message}</p>
        ) : (
          "message not available"
        )}
      </p>
    </div>
  );
}
