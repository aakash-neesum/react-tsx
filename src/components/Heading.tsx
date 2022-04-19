import Text from "./Text";

type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return (
    <>
      <Text as="h2" size="lg">
        {props.children}
      </Text>
      <Text as="p" size="md">
        {props.children}
      </Text>
      <Text as="label" htmlFor="someId" size="lg" color="primary">
        {props.children}
      </Text>
    </>
  );
};

export default Heading;
