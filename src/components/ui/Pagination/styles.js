import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: ${({ $active }) => ($active ? "#edf6f9" : "white")};
  color: ${({ $active }) => ($active ? "#023e8a" : "black")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #E2EDF1;
    color: #023e8a
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ArrowButton = styled(PageButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #E2EDF1;
  }
`;