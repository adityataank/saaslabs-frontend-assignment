import PaginationButton from "../PaginationButton";
import "./styles.css";

function Pagination({
  previousPageHandler = () => {},
  nextPageHandler = () => {},
  page = 1,
  pageLimit = 1,
}) {
  const isPreviousDisabled = page === 1;
  const isNextDisabled = page === pageLimit;
  return (
    <div className="paginationWrapper">
      <PaginationButton
        type="previous"
        onClick={previousPageHandler}
        disabled={isPreviousDisabled}
      />
      <p className="pageText">
        <span>{page}</span>/{pageLimit}
      </p>
      <PaginationButton onClick={nextPageHandler} disabled={isNextDisabled} />
    </div>
  );
}

export default Pagination;
