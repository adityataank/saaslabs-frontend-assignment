export const getNextSortType = (type = "") => {
  let next = "";

  switch (type) {
    case "ascending":
      next = "descending";
      break;
    case "descending":
      next = "";
      break;
    default:
      next = "ascending";
      break;
  }

  return next;
};

const sortAscending = (data = [], key = "") => {
  return data.toSorted((a, b) => a[key] - b[key]);
};

const sortDescending = (data = [], key = "") => {
  return data.toSorted((a, b) => b[key] - a[key]);
};

export const sortRows = (data = [], sortType = {}) => {
  const { s_no, amt_pledged, percentage_funded } = sortType;

  if (s_no === "" && amt_pledged === "" && percentage_funded === "") {
    return data;
  }
  if (s_no === "ascending") {
    return sortAscending(data, "s.no");
  }
  if (s_no === "descending") {
    return sortDescending(data, "s.no");
  }
  // if (amt_pledged == "") {
  //   return data;
  // }
  if (amt_pledged === "ascending") {
    return sortAscending(data, "amt.pledged");
  }
  if (amt_pledged === "descending") {
    return sortDescending(data, "amt.pledged");
  }
  // if (percentage_funded === "") {
  //   return data;
  // }
  if (percentage_funded === "ascending") {
    return sortAscending(data, "percentage.funded");
  }
  if (percentage_funded === "descending") {
    return sortDescending(data, "percentage.funded");
  }
};
