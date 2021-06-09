import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Hiiiiiiii", likesCount: 7 },
        { id: 4, message: "It's raining again", likesCount: 29 },
      ],
      newPostText: "What's on your mind?",
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Dima",
          src: "https://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif",
        },
        {
          id: 2,
          name: "Mari",
          src: "https://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif",
        },
        {
          id: 3,
          name: "Temo",
          src: "https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif",
        },
        {
          id: 4,
          name: "Levan",
          src: "https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
        },
        {
          id: 5,
          name: "Nikusha",
          src: "https://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif",
        },
        {
          id: 6,
          name: "Nina",
          src: "https://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif",
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
    },

    sidebar: {
      friends: [
        {
          id: 1,
          name: "Mari",
          src: "https://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif",
        },
        {
          id: 2,
          name: "Temo",
          src: "https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif",
        },
        {
          id: 3,
          name: "Levan",
          src: "https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};
window.store = store;
