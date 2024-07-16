import { z } from "zod"
import { validateResponse } from "./validateResponse";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

export const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    text: z.string(),
    userId: z.string(),
    createdAt: z.number(),
})

export type Post = z.infer<typeof PostSchema>;

export const PostList = z.array(PostSchema);

export type PostList = z.infer<typeof PostList>

export const FetchPostListSchema = z.object({
    list: PostList,
})

type FetchPostListResponse = z.infer<typeof FetchPostListSchema>;

export function fetchPostList(urlApi: string): Promise<FetchPostListResponse> {
    return fetch(urlApi)
        .then((response) => response.json())
        .then((data) => FetchPostListSchema.parse(data));
}



export function usePostList(urlApi: string, keyNotes: string) {
    const notesListQuery = useQuery({
        queryFn: () => fetchPostList(urlApi),
        queryKey: [keyNotes,]
      }, queryClient);

    return {
        notesListQuery,
    };
}

export function createPost(title: string, text: string): Promise<void> {
    return fetch("/api/notes", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            title,
            text

        }),
    }).then(validateResponse).then(() => undefined);
}