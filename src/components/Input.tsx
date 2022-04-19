import React from "react";

type InputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

const Input = ({
  inputRef,
  todo,
  setTodo,
  changeHandler,
  children,
  ...rest
}: InputProps) => {
  return (
    <input
      ref={inputRef}
      type="input"
      value={todo}
      placeholder="Enter a task"
      onChange={(e) => {
        setTodo(e.target.value);
        inputRef.current?.focus();
      }}
      {...rest}
    >
      {children}
    </input>
  );
};

export default Input;
