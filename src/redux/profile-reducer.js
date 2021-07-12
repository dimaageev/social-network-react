const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Hiiiiiiii", likesCount: 7 },
    { id: 4, message: "It's raining again", likesCount: 29 },
  ],
  newPostText: "What's on your mind?",
};

const profileReducer = (state = initialState, action) => {
  // let stateCopy = {
  //   ...state,
  //   posts: [...state.posts],
  // };

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          { id: 6, message: state.newPostText, likesCount: 0 },
        ],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    default:
      return state;
  }
};

// switch (action.type) {
//   case ADD_POST:
//     let newPost = {
//       id: 6,
//       message: state.newPostText,
//       likesCount: 0,
//     };
//     stateCopy.posts.push(newPost);
//     stateCopy.newPostText = "";
//     return stateCopy;

//   case UPDATE_NEW_POST_TEXT:
//     stateCopy.newPostText = action.newText;
//     return stateCopy;

//   default:
//     return state;
// }

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
