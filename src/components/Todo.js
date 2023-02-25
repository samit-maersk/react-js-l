
const Todo = (props) => {
    const {id, item , handleDelete, handleEdit} = props;

    return (
        <>
            <li>
                {item}
                <button className="update__delete" onClick={(e) => handleDelete(id)}>
                    <i className="bi-trash3"></i>
                </button>
                 <button className="update__delete" onClick={(e) => handleEdit({id:id,item:item})}>
                    <i className="bi bi-pen"></i>
                 </button>
            </li>
            <hr/>
        </>
    )
}

export default Todo;