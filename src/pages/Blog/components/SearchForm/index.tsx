import { Container, Content, Input } from "./styles";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchInputProps {
    postsLength: number;
    getPosts: (query?: string) => Promise<void>;
  }

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm({getPosts, postsLength}: SearchInputProps) {
    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
      });

      async function handleSearchPost(data: SearchFormInput){
        await getPosts(data.query);
      }
    return(
        <Container onSubmit={handleSubmit(handleSearchPost)}>
            <Content>
                <strong>Publicações</strong>
                <span>{postsLength} publicações</span>
            </Content>

            <Input type="text" placeholder="Buscar Conteúdo" {...register("query")} />
        </Container>
    )
}
