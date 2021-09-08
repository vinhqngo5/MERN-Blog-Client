import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Post from "./Post";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

export default function PostList() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actions.getPosts.getPostsRequest());
	}, [dispatch]);
	return (
		<Grid container spacing={2} alignItems="stretch">
			<Grid item xs={12} sm={6}>
				<Post />
			</Grid>
			<Grid item xs={12} sm={6}>
				<Post />
			</Grid>
			<Grid item xs={12} sm={6}>
				<Post />
			</Grid>
		</Grid>
	);
}
