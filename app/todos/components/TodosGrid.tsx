"use client";
import {Todo} from "@prisma/client";
import { TodoItem } from './TodoItem';
import * as todosApi from "@/app/todos/helpers/todos"
import { useRouter } from "next/navigation";
interface Props{
    todos?: Todo[]
}
export const TodosGrid = ({todos= []}: Props) => {
    const router = useRouter();
    const togleTodo = async(id: string , complete: boolean)=>{
        const updatedTodo = await todosApi.updateTodo(id, complete);
        console.log(updatedTodo);
        router.refresh();
        console.log(id, complete);
    }
  return (
    <div className="grid grid-cols-2 ms:grid-cols-3 gap-2">
        {todos.map((todo) => (<TodoItem key={todo.id} todo={todo} toggleTodo={togleTodo}/>))
        }
    </div>
  )
}
