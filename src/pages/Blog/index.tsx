import { Summary } from "./components/Summary";
import { Post } from "./components/Post";
import { SearchForm } from "./components/SearchForm";
import { Container, ContainerPosts } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";

export interface IPost {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: {
      login: string;
    };
  }

export function Blog() {
    const [posts, setPosts] = useState<IPost[]>([]);

    const getPosts = useCallback(
        async (query: string = "") => {
            const response = await api.get(
              `search/issues?q=${query}%20repo:KiF1/Github-Blog`
            );
        setPosts(response.data.items);
        }, [posts]);
    
      useEffect(() => {
        getPosts();
      }, []);
    return(
        <Container>
            <Summary />
            <SearchForm postsLength={posts.length} getPosts={getPosts} />
            <ContainerPosts>
                {posts.map((post) => (
                    <Post key={post.number} post={post} />
                ))}
            </ContainerPosts>
        </Container>
    )
}