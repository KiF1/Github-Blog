import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-bottom: 3rem;
gap: 3rem;
`

export const ContainerPosts = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1.5rem;
@media(max-width: 992px){
    grid-template-columns: 1fr;
}
`