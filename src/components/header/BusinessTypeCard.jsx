import codeToValue from "../helpers/codeToValue";
const BusinessTypeCard = (props) => {
  const selectedItem = () => {
    return props.name === props.searchType;
  };
  const unselectItem = (e) => {
    e.stopPropagation();
    props.setSearchType(null);
  };
  const cardStyle = {
    border: `1px solid ${selectedItem() ? "red" : "white"}`,
    borderRadius: "25px",
    display: "flex",
    padding: "1px 12px 4px 12px",
    margin: "0 5px",
    alignSelf: "center",
  };
  const xStlye = {
    borderRadius: "25px",
    marginLeft: "10px",
    cursor: "pointer",
  };
  return (
    <div
      onClick={() =>
        props.setSearchType(codeToValue(props.type, "BUSINESSTYPE"))
      }
      style={cardStyle}
    >
      <div stlye={{ marginRight: 1 }}>{props.name}</div>
      {selectedItem() && (
        <span onClick={(e) => unselectItem(e)} style={xStlye}>
          {" "}
          x
        </span>
      )}
    </div>
  );
};

export default BusinessTypeCard;
