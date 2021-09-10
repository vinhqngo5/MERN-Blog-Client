import { INIT_STATE } from "../../constants";
import { createPost, getPosts, getType, updatePost } from "../actions";
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

		// updatePost
		case getType(updatePost.updatePostSuccess):
			return {
				...state,
				data: state.data.map((post) =>
					post._id === action.payload._id ? action.payload : post
				),
			};

		default:
			return state;
	}
}
