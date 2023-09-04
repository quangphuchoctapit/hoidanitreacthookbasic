
const Todo = (props) => {
    const handleOnChangeInput = (e) => {
        props.handleOnChangeInput(e)
    }
    const handleAdd = () => {
        props.handleAdd()
    }

    const handleDelete = (todoId) => {
        props.handleDelete(todoId)
    }
    let todo = props.todo
    let todos = props.todos
    return (
        <>
            <input type='text' value={todo} onChange={e => handleOnChangeInput(e)} />
            <button onClick={handleAdd}>Add Todo</button>
            {todos.map((todo, index) => {
                return (
                    <div key={todo.id} className='todos-container'>
                        {todo.title}
                        <span>
                            <button className='handleEdit'
                            >
                                Edit
                            </button>
                        </span>
                        <span>
                            <button className='handleDelete'
                                onClick={() => handleDelete(todo.id)}

                            >
                                Delete
                            </button>
                        </span>
                    </div>
                )
            })}
            <hr />


        </>
    )
}

export default Todo