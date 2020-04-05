const dummyUser = {
  nickname: "노우승",
  Post: [],
  Followings: [],
  Followers: [],
}

//store
export const initialState = {
  isLoggedIn: false,
  user: null,
}; //초기 state

export const LOG_IN = "LOG_IN"; //액션의 이름
export const LOG_OUT = "LOG_OUT"; //액션의 이름

export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: "wooseung",
  },
}; //실제 액션

export const logoutAction = {
  type: LOG_OUT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user:dummyUser,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}; //action 의 결과 인 reducer

export default reducer;
