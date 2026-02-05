import { createContext, useContext, useState } from "react";

export type TodoProviderProps = {
  children: React.ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggelTodo:(id:string)=>void;
  handledelete:(id:string)=>void
};

// Context create
export const myContext = createContext<TodosContextType | null>(null);

export const TodoProvider = ({ children }: TodoProviderProps) => {

  // ✅ Hook ko function component ke andar rakha
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodo: Todo[] = [{
        id: Math.random().toString(),
        task: task,
        completed: false,
        createdAt: new Date(),
      },
      ...prev
    ]
    console.log("prev"+prev)
    console.log(newTodo)
    return newTodo
    });
  };

//   completed
const toggelTodo=(id:string)=>{
    setTodos((prev)=>{
        const newTodos=prev.map((todo)=>{
            if(todo.id===id){
                return {...todo,completed:!todo.completed}
            }
            return todo;
        })
        return newTodos
    })
}

// delete
const handledelete=(id:string)=>{
    setTodos((prev)=>{
        const newTodos=prev.filter((filterTodo)=>filterTodo.id!==id)
        return newTodos
    })
    return 
}

  return (
    <myContext.Provider value={{ todos, handleAddTodo,toggelTodo,handledelete }}>
      {children}
    </myContext.Provider>
  );
};

// consumer hook
export const useTodos = () => {
  const context = useContext(myContext);

  if (!context) {
    throw new Error("useTodos must be used within TodoProvider");
  }

  return context;
};
