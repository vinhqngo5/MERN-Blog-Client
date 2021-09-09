import { INIT_STATE } from "../../constants";
import { createPost, getPosts, getType } from "../actions";
export default function postsReducer(state = INIT_STATE.posts, action) {
	switch (action.type) {
		// getPosts
		case getType(getPosts.getPostsRequest): //case: "getPostsRequest"
			return {
				...state,
				isLoading: true,
			};
		case getType(getPosts.getPostsSuccess): //case: "getPostsSucces"
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		case getType(getPosts.getPostsFailure): //case: "getPostsFailure"
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};

		// createPost
		case getType(createPost.createPostSuccess):
			return {
				...state,
				data: [...state.data, action.payload],
			};

		default:
			return state;
	}
}
