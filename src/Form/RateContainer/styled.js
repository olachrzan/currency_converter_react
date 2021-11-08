import styled, { css } from "styled-components";

const Container = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 135px 200px 1fr;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: block;
  }
`;

const Text = styled.p`
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      margin-top: 10px;
      text-align: center;
    }
  `}
`;

export { Container, Text };