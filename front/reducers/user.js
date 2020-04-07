const dummyUser = {
  nickname: "노우승",
  Post: [],
  Followings: [],
  Followers: [],
  signUpDatea:[]
}

//store
export const initialState = {
  isLoggedIn: false,
  user: null,
}; //초기 state

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST"; //액션의 이름
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"; //액션의 이름
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"; //액션의 이름

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST"; //액션의 이름
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS"; //액션의 이름
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE"; //액션의 이름

export const INCREMENT_NUMBER;

export const signUpAction = (data) => {
  return{
    type:LOG_IN_REQUEST,
    data:data,
  }
  
}
export const loginAction = {
  type: LOG_IN_REQUEST,
  data: {
    nickname: "wooseung",
  },
}; //실제 액션

export const logoutAction = {
  type: LOG_OUT_REQUEST,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggedIn: true,
        user:dummyUser,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGN_UP_REQUEST:{
      return{
        ...state,
        signUpDatea:action.data
      }
      
    }
    default: {
      return {
        ...state,
      };
    }
  }
}; //action 의 결과 인 reducer

export default reducer;
