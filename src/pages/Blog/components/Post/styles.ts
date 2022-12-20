import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
text-decoration: none;
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
    max-width: 80%;
    font-size: 1.35rem;
    font-family: Roboto;
    font-weight: 700;
    color: ${props => props.theme["gray-300"]};
    overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
}

p{
    font-size: 1rem;
    font-family: Roboto;
    font-weight: 400;
    color: ${props => props.theme["gray-100"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}
@media(max-width: 992px){
    padding: 1.5rem;
    span{
    max-width: 20%;
    top: 0.5rem;
    right: 1rem;
    }
}
`