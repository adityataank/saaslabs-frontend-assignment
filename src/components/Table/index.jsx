import { useEffect, useState } from "react";

import TableHeadings from "../TableHeading";
import TableBody from "../TableBody";
import TableRows from "../TableRows";
import Pagination from "../Pagination";

import { ROOT_URL, ROWS_LIMIT, TABLE_HEADINGS } from "../../utils/constants";
import { getNextSortType, sortRows } from "../../utils/helper";

import { useQuery } from "../../hooks/useQuery";
import { usePagination } from "../../hooks/usePagination";

import "./styles.css";

const DEFAULT_SORTING = {
  s_no: "",
  amt_pledged: "",
  percentage_funded: "",
};

function Table() {
  const [rows, setRows] = useState([]);
  const [sortType, setSortType] = useState(DEFAULT_SORTING);

  const { data, loading, error } = useQuery({ url: ROOT_URL });

  const { page, pageLimit, nextPageHandler, previousPageHandler } =
    usePagination({
      length: data?.length,
      limit: ROWS_LIMIT,
    });

  const handleSorting = (key = "") => {
    const nextSortType = getNextSortType(sortType[key]);
    setSortType({ ...DEFAULT_SORTING, [key]: nextSortType });
  };

  useEffect(() => {
    if (data?.length) {
      setRows(data);
    }
  }, [data]);

  const paginatedData = rows?.length
    ? rows?.slice((page - 1) * ROWS_LIMIT, page * ROWS_LIMIT)
    : [];

  const sortedData = sortRows(paginatedData, sortType);

  const Body = () =>
    loading ? (
      // <Loader /> // Opional
      <></>
    ) : error ? (
      <p className="errorText">{error.message}</p>
    ) : data?.length ? (
      <table className="table">
        <TableHeadings
          headings={TABLE_HEADINGS}
          sortType={sortType}
          handleSorting={handleSorting}
        />
        <TableBody>
          <TableRows data={sortedData} />
        </TableBody>
      </table>
    ) : null;

  return (
    <div className="tableWrapper">
      <Pagination
        nextPageHandler={nextPageHandler}
        previousPageHandler={previousPageHandler}
        page={page}
        pageLimit={pageLimit}
      />
      <Body />
    </div>
  );
}

export default Table;
