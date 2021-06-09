let initialState = {
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


const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sidebarReducer;
