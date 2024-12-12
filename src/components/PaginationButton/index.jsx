import ArrowLeft from "../../assets/ArrowLeft";
import ArrowRight from "../../assets/ArrowRight";

import "./styles.css";

function PaginationButton({
  type = "next",
  disabled = false,
  onClick = () => {},
}) {
  const Arrow = () => (type === "next" ? <ArrowRight /> : <ArrowLeft />);

  const ariaLabel = type === "next" ? "Next page" : "Previous page";

  return (
    <button
      className={`paginationButton`}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <Arrow />
    </button>
  );
}

export default PaginationButton;
