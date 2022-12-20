import styled from "styled-components";

export const Container = styled.div`
display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  img {
    width: 100%;
  }
  p{
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  a{
    color: #AFC2D4;
  }
  h1,
  h2,
  h3 {
    color: ${props => props.theme.blue};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
  pre {
    background: ${props => props.theme.blue};
    padding: 1rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: "FiraCode", monospace !important;
        line-height: 160% !important;
      }
    }
  }
`