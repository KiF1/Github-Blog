import { Container, Content, Input } from "./styles";


export function SearchForm() {
    return(
        <Container>
            <Content>
                <strong>Publicações</strong>
                <span>6 publicações</span>
            </Content>

            <Input type="text" placeholder="Buscar Conteúdo" />
        </Container>
    )
}