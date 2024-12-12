function SortIcon({ type = "default" }) {
  const VARIANT_COLOR = {
    default: {
      upper: "#BCC2CE",
      lower: "#BCC2CE",
    },
    ascending: {
      upper: "#BCC2CE",
      lower: "#171C26",
    },
    descending: {
      upper: "#171C26",
      lower: "#BCC2CE",
    },
  };

  const { upper, lower } = VARIANT_COLOR[type];

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.40962 13.4148C8.21057 13.6992 7.78943 13.6992 7.59038 13.4148L5.05071 9.78673C4.81874 9.45534 5.05582 9 5.46033 9H10.5397C10.9442 9 11.1813 9.45534 10.9493 9.78673L8.40962 13.4148Z"
        fill={upper}
      />
      <path
        d="M8.40962 2.58517C8.21057 2.30081 7.78943 2.30081 7.59038 2.58517L5.05071 6.21327C4.81874 6.54466 5.05582 7 5.46033 7H10.5397C10.9442 7 11.1813 6.54466 10.9493 6.21327L8.40962 2.58517Z"
        fill={lower}
      />
    </svg>
  );
}
export default SortIcon;
