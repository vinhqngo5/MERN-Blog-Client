import { Modal, TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import useStyles from "./style";
export default function CreatePostModal() {
	const classes = useStyles();
	const { isShow } = useSelector(modalState$);
	const body = (
		<div className={classes.paper} id="simple-modal-title">
			<h2>Create New Post</h2>
			<form noValidate autoComplete="off" className={classes.form} action="">
				<TextField className={classes.title} required label="Title" value="" />
				<TextareaAutosize
					rowsMin={10}
					rowsMin={15}
					placeholder="Content..."
					value=""
				></TextareaAutosize>
			</form>
		</div>
	);

	return (
		<div>
			<Modal open={isShow}>{body}</Modal>
		</div>
	);
}
