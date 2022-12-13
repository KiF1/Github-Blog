import { Summary } from "../../components/Summary";
import { Post } from "./components/Post";
import { SearchForm } from "./components/SearchForm";
import { Container, ContainerPosts } from "./styles";

export function Blog() {
    return(
        <Container>
            <Summary />
            <SearchForm />
            <ContainerPosts>
                <Post />
                <Post />
                <Post />
            </ContainerPosts>
        </Container>
    )
}