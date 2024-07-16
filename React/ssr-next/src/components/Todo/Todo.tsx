import { Card } from "antd";
import { ITodo } from "../../models";

type Props = {
	todo: ITodo;
};

const Todo = ({ todo }: Props) => {
	return (
		<Card title={todo.title} size="small">
			<p>{todo.completed ? "Done" : "To do"}</p>
		</Card>
	);
};

export default Todo;
