import { useTodos, type Todo } from "../store/todos"

const Todos = () => {
    const {todos,toggelTodo ,handledelete}=useTodos()

    const filterData=todos;
  return (
    <div className="flex justify-center items-center mt-5">
      <ul>
        {
            filterData.map((ele:Todo)=>(
                <li key={ele.id}>
                    <input type="checkbox" id={`todo-${ele.id}`}
                    checked={ele.completed}
                    onChange={()=>toggelTodo(ele.id)}/>
                    <label htmlFor={`todo-${ele.id}`}>{ele.task}</label>
                    {ele.completed && 
                    <button type="button" onClick={()=>handledelete(ele.id)}>Deleted</button>}
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Todos
