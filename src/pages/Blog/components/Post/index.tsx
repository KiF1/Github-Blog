import { IPost } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { Container } from "./styles";

interface PostProps {
    post: IPost;
}

export function Post({post}: PostProps) {
    const formattedDate = relativeDateFormatter(post.created_at);

    return(
        <Container to={`/post/${post.number}`}>
            <span>{formattedDate}</span>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </Container>
    )
}