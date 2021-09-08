import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
	return reduxAction().type;
};

export const getPosts = createActions({
	getPostsRequest: undefined,
	getPostsSuccess: (payload) => payload,
	getPostsFailure: (err) => err,
});

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
