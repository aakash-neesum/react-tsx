import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Todo } from "../model/model";

interface TodosList {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodosList> = ({ todos, setTodos }) => {
  const userContext = useContext(UserContext);
  return (
    <div>
      {userContext?.user?.name ? (
        <ul>
          {todos?.map((todo) => {
            return <li key={todo?.id}>{todo?.todo}</li>;
          })}
        </ul>
      ) : (
        <div>Please log in</div>
      )}
    </div>
  );
};

export default TodoList;

// import React, { useContext } from "react";
// import { UserContext } from "../context/UserContext";
// import { Todo } from "../model/model";

// interface TodosList<T> {
//   todos: T[]; //generic typing
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
// }

// const TodoList = <T extends {}> ({ todos, setTodos }:TodosList<T>) => {
//   const userContext = useContext(UserContext);
//   return (
//     <div>
//       {userContext?.user?.name ? (
//         <ul>
//           {todos?.map((todo) => {
//             return <li key={todo?.id}>{todo?.todo}</li>;
//           })}
//         </ul>
//       ) : (
//         <div>Please log in</div>
//       )}
//     </div>
//   );
// };

// export default TodoList;
