let initialState = {
  friends: [
    {
      id: 1,
      name: "Mari",
      src: "https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif",
    },
    {
      id: 2,
      name: "Temo",
      src: "https://content.sportslogos.net/logos/6/220/thumbs/22081902021.gif",
    },
    {
      id: 3,
      name: "Levan",
      src: "https://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sidebarReducer;
