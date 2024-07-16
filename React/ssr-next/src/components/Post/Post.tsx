import { Card } from "antd";
import { IPost } from "../../models";

type Props = {
	post: IPost;
};

const Post = ({ post }: Props) => {
	return (
		<Card title={post.title} size="small">
			<p>{post.body}</p>
		</Card>
	);
};

export default Post;
