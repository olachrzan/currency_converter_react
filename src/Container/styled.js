import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 800px;
  margin: 100px auto;
  padding: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgb(48, 45, 15);
`;