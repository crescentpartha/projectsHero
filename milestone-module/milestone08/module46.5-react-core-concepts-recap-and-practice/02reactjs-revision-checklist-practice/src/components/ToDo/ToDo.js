// rsc - snippets for creating component automatically
import React, { useEffect, useState } from 'react';
import './ToDo.css';

const ToDo = () => {
    const [toDo, setToDo] = useState([]);

    useEffect( () => {

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setToDo(data));

    } , []);

    return (
        <div className='container text-center my-5'>
            <h2>ToDo List: {toDo.length}</h2>
            {/* <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'> */}
            <div className='flex'>
                {
                    // toDo.map(todo => console.log(todo))
                    toDo.map(todo => <ToDoList 
                        todo={todo}
                        completed={todo.completed}
                        key={todo.id} // add unique key for mapping components
                        // title={todo.title}
                        ></ToDoList>)
                }
            </div>
        </div>
    );
};

function ToDoList(props) {
    // Object Destructuring
    const {id, title, completed} = props.todo;
    // console.log(id, completed);
    return (
        // <div className='text-bg-light p-3 m-3 rounded col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
        <div className='text-bg-light p-3 m-3 rounded'>
            <h5 className=''>Task-{id}: {title} {completed}</h5>
            {/* <p className=''>Completed: {completed}</p> */}
            {/* <p className=''>Completed: {props.completed}</p> */}
            <TrueFalse bol={completed}></TrueFalse>
        </div>
    )
}

function TrueFalse(props) {
    let boll = props;
    // console.log(props.bol);
        if (props.bol == true) boll = 'Done';
        else boll = 'Have to do';
    return (
        <p>Completed: {boll}</p>
    )
}

export default ToDo;