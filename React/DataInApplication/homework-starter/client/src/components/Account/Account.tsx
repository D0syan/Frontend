import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../../api/User";
import { Loader } from "../Loader";
import { NoteForm } from "../NoteForm";
import { AuthForm } from "../AuthForm";
import { UserView } from "../UserView";
import { LogoutButton } from "../LogoutButton";
import { FetchPostListView } from "../NotesListView/FetchNoteListView";
import { queryClient } from "../../api/queryClient";

export const Account = () => {
    const meQuery = useQuery({
        queryFn: fetchMe,
        queryKey: ["users", "me"],
        retry: 0,
    }, queryClient);

    console.log(meQuery.status);

    switch (meQuery.status) {
        case "pending":
            return <Loader />;
        case "success":
            return (
                <div className="account">
                    {meQuery.data && <UserView user={meQuery.data} />}
                    <LogoutButton />
                    <NoteForm />
                    <div className="list-view">
                        {meQuery.data && <FetchPostListView userId={meQuery.data.id} />}
                    </div>
                </div>
            );
        case "error":
            if (meQuery.error?.message === "Unauthorized") {
                return <AuthForm />;
            }
            return <div>{meQuery.error?.message}</div>;
        default:
            return null;
    }
}
