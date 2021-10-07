import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Hiiiiiiii", likesCount: 7 },
    { id: 4, message: "It's raining again", likesCount: 29 },
  ],
  profile: null,
  status: "",
};

test("length of posts should be incremented", () => {
  // 1. test data
  let action = addPost("Hello Peter");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
  expect(newState.posts[4].message).toBe("Hello Peter");
});

test("message of new post should be correct", () => {
  // 1. test data
  let action = addPost("Hello Peter");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe("Hello Peter");
});

test("after deleting length of messages shoulde be decremented", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

test("after deleting length  shouldn't be decremented if ID is incorrect", () => {
  // 1. test data
  let action = deletePost(10);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});
