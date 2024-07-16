import { NotesListView } from "./NotesListView";
import { Loader } from "../Loader";
import { usePostList } from "../../api/Post";

interface FetchPostListViewProps {
  userId: string; 
}

export const FetchPostListView = ({ userId }: FetchPostListViewProps) => {
  const { notesListQuery: postListQuery } = usePostList("api/notes", "notes");

  switch (postListQuery.status) {
    case "pending":
      return <Loader />;
    case "success":
      return <NotesListView noteList={postListQuery.data.list} userId={userId} />;
    case "error":
      return (
        <div>
          <span>Произошла ошибка</span>
          <button onClick={() => postListQuery.refetch()}>Повторить запрос</button>
        </div>
      );
    default:
      return null;
  }
};
