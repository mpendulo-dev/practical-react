import React, { useState} from 'react';

const State = () => {
    const [times, setTimes] = useState(0);
    return (

        <div>
            <div className='container mt-5'>
                <div className="card">
                    <u><h1 className='text-center'>Use State</h1></u>
                    <div className="card-body">
                        <h2 className='text-center'>Button clicked: {times}</h2>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-success" onClick={() => setTimes(times + 1)}>
                                Click</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;
