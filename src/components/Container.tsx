import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>{props.children}</div>;
};

export default Container;
