import { Children } from "react";
import "./styles.css";
import SortIcon from "../../assets/SortIcon";

function TableHeadings({
  headings = [],
  handleSorting = () => {},
  sortType = {},
}) {
  const HeadingList = () => {
    return Children.toArray(
      headings?.map(({ content, isText, key }) => {
        const cls = `heading ${isText ? "leftAlign" : ""}`; // left alignment for text and right alignment for numbers

        return (
          <th className={cls}>
            <span
              onClick={() => handleSorting(key)}
              tabIndex={0}
              aria-label={content}
            >
              {content} <SortIcon type={sortType[key] || "default"} />
            </span>
          </th>
        );
      })
    );
  };

  return (
    <thead>
      <tr className="tableHeader">
        <HeadingList />
      </tr>
    </thead>
  );
}

export default TableHeadings;
