import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

export const InputField = styled.div`
  box-sizing: border-box;
  padding: .5rem 0;
  border-bottom: 1px solid #CCC;
  input {
    border: none;
    outline: none;
    font-size: 1rem;
    width: 100%;
    padding: 0 .5rem;
    box-sizing: border-box;
  }
  input::-webkit-input-placeholder {
  	font-style: italic;
  	font-weight: 300;
  	color: #e6e6e6;
  }
`
