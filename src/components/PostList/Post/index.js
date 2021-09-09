import React from "react";
import {
	Card,
	Avatar,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";

export default function Post({ post }) {
	return (
		<Card>
			<CardHeader
				avatar={<Avatar>A</Avatar>}
				title={post.author}
				subheader={moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}
				action={
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				}
			/>
			<CardMedia image={post.attachment} title="Title" />
			<CardContent>
				<Typography variant="h5" color="textPrimary">
					{post.title}
				</Typography>
				<Typography variant="body2" component="p" color="textSecondary">
					{post.content}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton>
					<FavoriteIcon />
					<Typography component="span" color="textSecondary">
						{post.likeCount}
					</Typography>
				</IconButton>
			</CardActions>
		</Card>
	);
}
