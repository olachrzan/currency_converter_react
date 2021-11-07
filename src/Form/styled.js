import styled, { css } from "styled-components";

const StyledForm = styled.form`
  max-width: 500px;
  margin: 40px auto 0;
  text-align: center;
`;

const Header = styled.h2`
  margin: 20px auto;
  text-align: center;
  border-bottom: 4px solid rgb(125, 178, 37);
  padding-bottom: 15px;
  font-size: 30px;
  font-weight: 400;
`;

const Label = styled.label`
  display: block;
  margin: 30px;
`;

const LabelText = styled.span`
  display: inline-block;
  width: 150px;
  margin: 0 0 10px;
  font-size: 20px;
`;

const Field = styled.select`
  max-width: 400px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #bbb;

  ${({ dimension }) => dimension && css`
    padding: 8px;
  `}

  ${({ validated }) => validated && css`
    &:invalid {
      border: 2px solid rgb(255, 186, 186);
      background-color: rgba(255, 186, 186, 0.541);
    }
  `}
`;

const Button = styled.input`
  margin: 0 20px 15px;
  padding: 10px 20px;
  background-color: hsl(83, 73%, 39%);
  border: 2px solid hsl(83, 73%, 35%);
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 2px 2px 2px rgb(41, 56, 15);
  cursor: pointer;
  transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: hsl(83, 73%, 37%);
  }

  &:active {
    background-color: hsl(83, 73%, 35%);
  }
`;

const Info = styled.p`
  margin: 20px 0;
`;


export { StyledForm, Header, Label, LabelText, Field, Button, Info };