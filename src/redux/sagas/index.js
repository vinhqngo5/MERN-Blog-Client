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
	try {
		const post = yield call(api.createPost, action.payload);
		yield put(actions.createPost.createPostSuccess(post.data));
		yield put(actions.hideModal());
	} catch (err) {
		console.error(err);
		yield put(actions.createPost.createPostFailure(err));
	}
}

function* updatePostSaga(action) {
	try {
		const updatedPost = yield call(api.updatePost, action.payload);
		yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
		yield put(actions.hideModal());
	} catch (err) {
		console.error(err);
		yield put(actions.updatePost.updatePostFailure(err));
	}
}

function* mySaga() {
	yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
	yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
	yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}
// generator function es6
export default mySaga;
