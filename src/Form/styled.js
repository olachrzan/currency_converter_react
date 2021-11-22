import styled, { css, keyframes } from "styled-components";

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 30px auto 0;
  text-align: center;
`;

export const StyledHeader = styled.h2`
  margin: 20px auto;
  text-align: center;
  border-bottom: 4px solid ${({ theme }) => theme.colors.lima};
  padding-bottom: 15px;
  font-size: 30px;
  font-weight: 400;
`;

export const StyledLoadingText = styled.p`
  margin: 60px 0 10px;
  font-size: 20px;
`;

const breatheAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledLoadingItem = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;

  &::after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border-width: 6px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.lima} transparent ${({ theme }) => theme.colors.lima} transparent;
    animation-name: ${breatheAnimation};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
`;

export const StyledErrorText = styled(StyledLoadingText)`
  color: ${({ theme }) => theme.colors.brickRed};
`;

export const StyledErrorImage = styled.img`
  width: 40px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 20px;
`;

export const StyledLabelText = styled.span`
  display: inline-block;
  width: 150px;
  margin: 0 0 10px;
  font-size: 20px;
`;

export const StyledField = styled.select`
  width: 180px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #bbb;
  text-align: center;

  ${({ dimension }) => dimension && css`
    padding: 8px;
    text-align: left;
  `}

  ${({ validated }) => validated && css`
    &:invalid {
      border: 2px solid ${({ theme }) => theme.colors.sundown};
      background-color: ${({ theme }) => theme.colors.cosmos};
    }
  `}
`;

export const StyledOption = styled.option`
  border: 2px solid #bbb;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledButton = styled.input`
  margin: 0 20px 10px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.lima};
  border: 2px solid ${({ theme }) => theme.colors.olive};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  text-shadow: 2px 2px 2px rgb(41, 56, 15);
  cursor: pointer;
  transition: transform 0.1s ease-in-out, filter 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(110%);
  }
`;

export const StyledInfo = styled.p`
  margin: 15px 0;
  line-height: 25px;

  ${({ tip }) => tip && css`
    color: ${({ theme }) => theme.colors.brickRed};
  `}
`;