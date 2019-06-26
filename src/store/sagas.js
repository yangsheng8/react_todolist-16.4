import { put, takeEvery} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreators';
import '../mock';
import axios from 'axios';

function* getInitListUer(){
    
    try{
        const res = yield axios.get('http://test.123.com');
        const action = initListAction(res.data);
       yield put(action)
    }catch(e){
        console.log('http://test.123.com网络请求失败')
    }
}
function* mySaga(){
    //捕捉action 的内容。
    yield takeEvery(GET_INIT_LIST,getInitListUer);
}

export default mySaga;