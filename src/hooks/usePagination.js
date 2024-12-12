import { useState } from "react";

export const usePagination = ({ length = 1, limit = 1 }) => {
  const [page, setPage] = useState(1);

  const nextPageHandler = () => setPage((prev) => prev + 1)

  const previousPageHandler = () => setPage((prev) => prev - 1);

  const pageLimit = Math.ceil(length / limit);

  return { page, pageLimit, nextPageHandler, previousPageHandler };
};
