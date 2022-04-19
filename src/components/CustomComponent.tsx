import React from "react";
import Input from "./Input";

const CustomComponent = (props: React.ComponentProps<typeof Input>) => {
  //extracting props from other component
  return <div>{props.todo}</div>;
};

export default CustomComponent;
