import styled from "styled-components";

export const Search = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "red"};
    background: black;
    border: none;
    border-radius: 3px;
`;

export const SearchButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "grey" : "white"};
  color: ${props => props.primary ? "white" : "grey"};

  font-size: 1em;
  margin: 1px;
  padding: 0.25em 1em;
  border: 1px solid grey;
  cursor: pointer;
  border-radius: 3px;
`;

export const Heading = styled.h1`
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: 'black';

`;