type HorizontalType = "left" | "right" | "center";

type VerticalType = "top" | "bottom" | "center";

type PositionType = {
  position:
    | Exclude<`${HorizontalType}-${VerticalType}`, "center-center">
    | "center";
};
const Toast = ({ position }: PositionType) => {
  return <div>{position}</div>;
};

export default Toast;
