import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background-color: ${props => props.theme["blue-700"]};
border-radius: 15px;
height: fit-content;
padding: 2rem;
margin-top: -5rem;
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
@media (max-width: 992px){
    flex-direction: column;
    position: relative;
    margin-top: 2rem;
}
`

export const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: relative;
gap: 1rem;

.link{
    position: absolute;
    top: 0rem;
    right: 0rem;
    font-size: 0.85rem;
    text-decoration: none;
    color: ${props => props.theme.blue};
    display: flex;
    gap: 0.5rem;
}

.navLink{
    position: absolute;
    top: 0rem;
    left: 0rem;
    font-size: 0.85rem;
    display: flex;
    gap: 0.5rem;
      font-size: 0.85rem;
      color: ${props => props.theme.blue};
    text-decoration: none;
}

h1{
    font-size: 1.5rem;
    margin-top: 2rem;
    font-family: Roboto;
    font-weight: 700;
    color: ${props => props.theme["gray-300"]};
}

strong{
    font-size: 1rem;
    font-family: Roboto;
    font-weight: 400;
    color: ${props => props.theme["gray-100"]};
}
@media (max-width: 992px){
    position: unset;
    a{
        top: 1rem;
        right: 1rem;
    }
}
`

export const Icons = styled.div`
width: 100%;
display: flex;
gap: 1rem;
`
export const Icon = styled.div`
width: fit-content;
display: flex;
align-items: center;
gap: 0.5rem;

svg{
    color: ${props => props.theme["blue-300"]};
}

span{
    font-size: 0.85rem;
    color: ${props => props.theme["blue-300"]}
}
`