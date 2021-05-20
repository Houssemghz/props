import React from "react";

const Comp2 = ({ last = "HuGi", children, alertme }) => {
  const style = {
    color: "red",
    fontSize: 15,
  };

  return (
    <div style={style}>
      <h1>
        {last} is my lastname {children}
      </h1>
      <button onClick={() => alertme()}>click me</button>
    </div>
  );
};
Comp2.defaultProps = { last: "ross" };
export default Comp2;
