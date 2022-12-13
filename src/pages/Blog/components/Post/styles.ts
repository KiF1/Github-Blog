import styled from "styled-components";

export const Container = styled.div`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
background-color: ${props => props.theme["blue-600"]};
border-radius: 10px;
padding: 2rem;
gap: 1rem;

span{
    max-width: 15%;
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 0.85rem;
    color: ${props => props.theme["blue-300"]};
}

h1{
    max-width: 85%;
    font-size: 1.35rem;
    font-family: Roboto;
    font-weight: 700;
    color: ${props => props.theme["gray-300"]};
}

p{
    font-size: 1rem;
    font-family: Roboto;
    font-weight: 400;
    color: ${props => props.theme["gray-100"]};
}
`