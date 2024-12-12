import { Children } from "react";

import "./styles.css";

const PopulateRow = ({ item }) => {
  return (
    <>
      <td className="tableData">{item?.["s.no"]}</td>
      <td className="tableData">{item?.["percentage.funded"]}</td>
      <td className="tableData">{item?.["amt.pledged"]}</td>
    </>
  );
};

function TableRows({ data = [] }) {
  return Children.toArray(
    data?.map((item) => (
      <tr className="tableRow">
        <PopulateRow item={item} />
      </tr>
    ))
  );
}

export default TableRows;
