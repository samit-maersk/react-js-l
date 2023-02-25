import { useState } from "react";
import Todo from "./Todo";

const Todos =(props) => { 
    const [todos, setTodos] = useState([
        { id: 1, item: 'Premium Pay'},
        { id: 2, item: 'Laundry'},
        { id: 3, item: 'Note to take my Daughter school'},
        { id: 4, item: 'Grocessary'},
        { id: 5, item: 'Car Wash'},
        { id: 6, item: 'Movie'},
        { id: 7, item: 'Outing Plan'}
    ]);

    const [todo, setTodo] = useState({
        id: '',
        item: ''
    })

    const [isEdit, setIsEdit] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isEdit) {
            const updatedTodos = todos.map(t => {
                if(t.id === todo.id) {
                    t['item'] = todo.item;
                    t['id'] = todo.id;
                }
                return t;
            })

            setTodos(updatedTodos);
            setIsEdit(false);
        } else {
            setTodos((prevTodos => [...prevTodos, todo]));
        }
        
        setTodo({
            id: '',
            item: ''
        })
    }
    

    const handleDelete = (e) => {
        console.log(e);
        setTodos(todos.filter(td => td.id !== e))
    }

    const handleEdit = (e) => {
        setIsEdit(true);
        setTodo(e)
    }
    
    return (
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <label>{ isEdit? 'Update Todo Item' : 'Add Todo Item' }</label> <br/>
                    <input type="text" name="item" value={todo.item} onChange={(e)=>setTodo({id: todo.id ? todo.id : todos.length +1,[e.target.name]: e.target.value})}></input>
                    <button className="update__delete" type="submit" disabled={todo.id ? false : true}>{isEdit? 'Update' : 'Add'}</button><br/>
                </form>
            </div>
            <div className="col">
                {
                    todos.length === 0 ? 
                    <p>No item found</p> : 
                    <ol>{todos.map((todo,index) => <Todo key={index} {...todo} handleEdit={handleEdit} handleDelete={handleDelete} />)}</ol>
                }
            </div>
        </div>
    )
}

export default Todos;