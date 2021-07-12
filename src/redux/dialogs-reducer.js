const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Dima",
      src: "https://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif",
    },
    {
      id: 2,
      name: "Mari",
      src: "https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif",
    },
    {
      id: 3,
      name: "Temo",
      src: "https://content.sportslogos.net/logos/6/220/thumbs/22081902021.gif",
    },
    {
      id: 4,
      name: "Levan",
      src: "https://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif",
    },
    {
      id: 5,
      name: "Nikusha",
      src: "https://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif",
    },
    {
      id: 6,
      name: "Nina",
      src: "https://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif",
    },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Bro" },
    { id: 4, message: "Bro" },
    { id: 5, message: "Bro" },
  ],

  newMessageText: "Say something",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 6, message: state.newMessageText }],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage,
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
  };
};

export default dialogsReducer;
