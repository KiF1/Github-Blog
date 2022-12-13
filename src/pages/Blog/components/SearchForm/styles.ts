import styled from "styled-components";

export const Container = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
`
export const Content = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

strong{
    font-size: 1.15rem;
    color: ${props => props.theme["gray-300"]};
}

span{
    font-size: 0.85rem;
    color: ${props => props.theme["blue-300"]};
}
`

export const Input = styled.input`
width: 100%;
padding: 1rem;
color: ${props => props.theme["blue-400"]};
background-color: ${props => props.theme["blue-900"]};
border: 1px solid ${props => props.theme["blue-500"]};
border-radius: 10px;
&::placeholder{
    color: ${props => props.theme["blue-400"]};
}
`