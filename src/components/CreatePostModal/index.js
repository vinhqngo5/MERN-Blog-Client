import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import useStyles from "./style";
import FileBase64 from "react-file-base64";
import { createPost, hideModal } from "../../redux/actions";
export default function CreatePostModal() {
	const [data, setData] = useState({
		title: "",
		content: "",
		attachment: "",
	});
	const classes = useStyles();
	const { isShow } = useSelector(modalState$);
	const dispatch = useDispatch();

	const onClose = useCallback(() => {
		dispatch(hideModal());
		setData({
			title: "",
			content: "",
			attachment: "",
		});
	}, [dispatch]);

	// const onSubmit = useCallback(() => {
	// 	console.log({data});
	// 	// có thể log ra ở đây do đã cập nhật data dựa trên dependencies array
	// 	// chỉ log state ra khi trong use effect hoặc usecallback
	// }, [data]);

	const onSubmit = useCallback(() => {
		console.log("🚀 ~ file: index.js ~ line 30 ~ onSubmit ~ data", data);
		dispatch(createPost.createPostRequest(data));
		// có thể log ra ở đây do đã cập nhật data dựa trên dependencies array
		// chỉ log state ra khi trong use effect hoặc usecallback
	}, [data, dispatch]);

	const body = (
		<div className={classes.paper} id="simple-modal-title">
			<h2>Create New Post</h2>
			<form noValidate autoComplete="off" className={classes.form} action="">
				<TextField
					className={classes.title}
					required
					label="Title"
					value={data.title}
					onChange={(e) => setData({ ...data, title: e.target.value })}
				/>
				<TextareaAutosize
					minRows={10}
					maxRows={15}
					placeholder="Content..."
					value={data.content}
					onChange={(e) => setData({ ...data, content: e.target.value })}
				></TextareaAutosize>
				<FileBase64
					accept="image/"
					multiple={false}
					onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
				/>
				<div className={classes.footer}>
					<Button
						variant="contained"
						color="primary"
						component="span"
						fullWidth
						onClick={onSubmit}
					>
						Create
					</Button>
				</div>
			</form>
		</div>
	);

	return (
		<div>
			<Modal open={isShow} onClose={onClose}>
				{body}
			</Modal>
		</div>
	);
}
