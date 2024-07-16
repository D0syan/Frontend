import PostsList from "../../components/PostsList/PostsList";
import styles from "./styles.module.scss";

const PostsPage = () => {
	return (
		<div className={styles.root}>
			<h1>Posts</h1>
			<PostsList />
		</div>
	);
};

export default PostsPage;
