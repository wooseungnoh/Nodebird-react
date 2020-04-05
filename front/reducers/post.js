export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "우승",
      },
      content: "첫 번째 게시글",
      img: "",
    },
  ],
  imagePaths: [],
};

export const ADD_POST = "ADD_POST";
export const ADD_DUMMY = "ADD_DUMMY";

export const addPost = {
  type: ADD_POST,
};

export const addDummy = {
  type: ADD_POST,
  data: {
    content: "hello",
    userId: 1,
    User: {
      nickname: "우승",
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
      };
    }
    case ADD_POST: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
