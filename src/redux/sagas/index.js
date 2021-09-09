import { takeLatest, call, put } from "redux-saga/effects";
import * as api from "../../apis";
import * as actions from "../actions";

function* fetchPostsSaga(action) {
	try {
		const posts = yield call(api.fetchPosts);
		console.log(
			"🚀 ~ file: index.js ~ line 7 ~ function*fetchPostSaga ~ posts",
			posts
		);
		yield put(actions.getPosts.getPostsSuccess(posts.data));
	} catch (err) {
		console.error(err);
		yield put(actions.getPosts.getPostsFailure(err));
	}
}

function* createPostSaga(action) {
	console.log(
		"🚀 ~ file: index.js ~ line 20 ~ function*createPostSaga ~ action",
		action
	);
	try {
		const post = yield call(api.createPost, action.payload);
		console.log(
			"🚀 ~ file: index.js ~ line 22 ~ function*createPostSaga ~ post",
			post
		);
		yield put(actions.createPost.createPostSuccess(post.data));
		yield put(actions.hideModal());
	} catch (err) {
		console.error(err);
		yield put(actions.createPost.createPostFailure(err));
	}
}

function* mySaga() {
	yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
	yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
}
// generator function es6
export default mySaga;
