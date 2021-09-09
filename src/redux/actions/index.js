import { createAction, createActions } from "redux-actions";

export const getType = (reduxAction) => {
	return reduxAction().type;
};

export const getPosts = createActions({
	getPostsRequest: undefined,
	getPostsSuccess: (payload) => payload,
	getPostsFailure: (err) => err,
});

export const createPost = createActions({
	createPostRequest: (payload) => payload,
	createPostSuccess: (payload) => payload,
	createPostFailure: (err) => err,
});

export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");

/**
 * with each create an object
 * =>
 * getType(getPosts.getPostsSuccess)
 *
 * {
 *    type: "getPostsSuccess"
 *    payload: {
 *      name: "test"
 *    }
 * }
 */
