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
export default function Post() {
	return (
		<Card>
			<CardHeader
				avatar={<Avatar>A</Avatar>}
				title="This is Title"
				subheader="Apr 30, 2021"
				action={
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				}
			/>
			<CardMedia image="" title="Title" />
			<CardContent>
				<Typography variant="h5" color="textPrimary">
					This is Post Title
				</Typography>
				<Typography variant="body2" component="p" color="textSecondary">
					This is Post Content
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton>
					<FavoriteIcon />
					<Typography component="span" color="textSecondary">
						10 likes
					</Typography>
				</IconButton>
			</CardActions>
		</Card>
	);
}
