import { useState, useEffect } from 'react';


const Data = () => {
const [todos, setTodos ] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(() => {
        /* Function call*/
        getData();

        async function getData() {
            const response = await  fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setTodos(data);
            setLoading(false);
            console.log(data)
        }

    }, []);

    /* Loading before data is rendered */
        if(loading) {
            return (
                <section>
                    <p>Loading...</p>
                </section>
            )
        }
    return (

        <div>
            <h1 className='text-center'>Todo List</h1>

            {todos && (
                <div>
                    {/* Loop over the todos */}
                    {todos.map((todo, index) => (
                        <div key={index}>
                            <ul>
                                <li>{todo.title}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Data;
