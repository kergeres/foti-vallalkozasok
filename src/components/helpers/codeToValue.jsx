import cvts from "../../data/cvts";

const codeToValue = (code, fromObject) => {
  return cvts[fromObject].find((item) => {
    return item.code === code;
  }).value;
};

export default codeToValue;
