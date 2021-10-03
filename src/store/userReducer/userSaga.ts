import { delay, put, takeLatest } from '@redux-saga/core/effects';
import { addUser, addUserSaga } from './userReducer';
function* handleSaga(action: any) {
  yield delay(1000);
  yield put(addUserSaga(action.payload));
}
export function* userSaga() {
  yield takeLatest(addUser.toString(), handleSaga);
}
