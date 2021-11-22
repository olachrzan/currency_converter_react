import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 135px 200px 1fr;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: block;
  }
`;

const StyledText = styled.p`
  grid-column: 2 / 3;
  margin: 0;
  font-size: 20px;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    text-align: center;
  }

  ${({ last }) => last && css`
    grid-column: 3 / 4;
    text-align: left;
    padding-left: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      margin-top: 10px;
      text-align: center;
    }
  `}
`;

export { StyledContainer, StyledText };