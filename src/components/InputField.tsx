import React, { useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";
import Container from "./Container";
import Heading from "./Heading";
import Input from "./Input";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const theme = useContext(ThemeContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <>
      <Container
        styles={{
          border: "2px solid black",
          padding: "1rem",
          backgroundColor: `${theme.primary.main}`,
        }}
      >
        <Heading>Todo list</Heading>
      </Container>
      <form onSubmit={handleAdd}>
        <Input
          inputRef={inputRef}
          todo={todo}
          setTodo={setTodo}
          changeHandler={changeHandler}
        />
        <Button handleClick={(e, id) => console.log(e, id)}>Submit</Button>
      </form>
    </>
  );
};

export default InputField;
