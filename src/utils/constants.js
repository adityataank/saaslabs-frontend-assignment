export const ROWS_LIMIT = 5; // showing maximum 5 rows per page

// url for fetching the data
export const ROOT_URL =
  "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

export const TABLE_HEADINGS = [
  {
    content: "S.No.",
    isText: false,
    key: "s_no",
  },
  {
    content: "Percentage funded",
    isText: false,
    key: "percentage_funded",
  },
  {
    content: "Amount pledged",
    isText: false,
    key: "amt_pledged",
  },
];
