import { userSaga } from 'store/userReducer/userSaga';
import { all } from 'redux-saga/effects';
export function* rootSaga() {
  yield all([userSaga()]);
}
