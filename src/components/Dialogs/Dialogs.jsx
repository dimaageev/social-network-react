import React from "react";
import { Redirect } from "react-router";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem src={d.src} name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>

        <div className={s.messages}>
          {messagesElements}
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}
          />
          <div>
            <button onClick={onSendMessage}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
