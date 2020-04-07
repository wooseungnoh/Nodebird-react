import {all, fork, takeLatest, call, put} from "redux-saga/effects"
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user"

function loginAPI() {
    //서버에 요청을 보내는 부분
}

function* login () {
    try{
        yield call(loginAPI)
        yield put({ //로그인 성공시 (put 은 dispatch 와 동일)
            type:LOG_IN_SUCCESS
        })
    }catch(e){
        console.log(e)
        yield put({ //실패시 이 액션 실행
            type:LOG_IN_FAILURE
        })
    }
}

function* watchLogin(){ //리덕스에서 LOG_IN 액션이 들어오는지 기다림.
    yield takeLatest(LOG_IN_REQUEST, login)
}

export default function* userSaga(){
    yield all([
        fork(watchLogin)
    ])
}