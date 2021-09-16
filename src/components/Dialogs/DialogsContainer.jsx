import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const FalseDialogsContainer = (/*props*/) => {
//   // let state = props.store.getState();

//   // let sendMessage = () => {
//   //   props.store.dispatch(sendMessageActionCreator());
//   // };

//   // let onMessageChange = (text) => {
//   //   let action = updateNewMessageTextActionCreator(text);
//   //   props.store.dispatch(action);
//   // };

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let sendMessage = () => {
//           store.dispatch(sendMessageActionCreator());
//         };

//         let onMessageChange = (text) => {
//           let action = updateNewMessageTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <Dialogs
//             updateNewMessageText={onMessageChange}
//             sendMessage={sendMessage}
//             dialogs={state.dialogsPage.dialogs}
//             messages={state.dialogsPage.messages}
//             newMessageText={state.dialogsPage.newMessageText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
