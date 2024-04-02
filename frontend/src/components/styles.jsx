import styled from "styled-components";
export const PaginationContainer = styled.nav`
  margin-top: 20px;
`;

export const PageNumberList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 300px) {
    margin: 20px;
    display: flex;
  }
`;

export const PageNumberItem = styled.li`
  margin-right: 5px;
`;

export const PageNumberButton = styled.a`
  color: #fff;
  background-color: #333;
  border: 1px solid #666;
  padding: 5px 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #666;
  }
`;
