import {
  PaginationContainer,
  PageNumberList,
  PageNumberItem,
  PageNumberButton,
} from "./styles";

export const Pagination = ({
  tasksPerPage,
  totalTasks,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PageNumberList>
        {pageNumbers.map((number) => (
          <PageNumberItem key={number}>
            <PageNumberButton
              className={currentPage === number ? "active" : ""}
              onClick={() => paginate(number)}
            >
              {number}
            </PageNumberButton>
          </PageNumberItem>
        ))}
      </PageNumberList>
    </PaginationContainer>
  );
};
