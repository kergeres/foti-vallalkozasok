import theme from "../../style/Theme";

const BusinessTypeCard = (props) => {
  const cardStyle = {
    border: "1px solid white",
    borderRadius: "25px",
    display: "inline-block",
    padding: "1px 12px 4px 12px",
    margin: "0 5px",
    alignSelf: "center",
  };

  return <div style={cardStyle}>{props.name}</div>;
};

export default BusinessTypeCard;
