import { takeLatest, call } from "redux-saga/effects";
import * as api from "../../apis";
import * as actions from "../actions";

function* fetchPostSaga(action) {
	const posts = yield call(api.fetchPosts);
	console.log(
		"🚀 ~ file: index.js ~ line 7 ~ function*fetchPostSaga ~ posts",
		posts
	);
}

function* mySaga() {
	yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}
// generator function es6
export default mySaga;
