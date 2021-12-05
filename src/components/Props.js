import React from 'react';

const Props = ({name, city}) => {
    return (
        <div className='container mt-5'>
            <div className="card">
                <u><h1 className='text-center'>Props</h1></u>
                <div className="card-body">
                    <h2 className='text-center'>Hi😊, my name is {name} and I am from {city} </h2>
                </div>
            </div>
        </div>
    );
};

export default Props;
