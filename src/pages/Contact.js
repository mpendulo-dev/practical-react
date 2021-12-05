import { useRef } from 'react';

const Contact = () => {
    const email = useRef();
    const password = useRef();

    function submit(event) {
        event.preventDefault();

        /* Reading user input */
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        const userData = {
            email: enteredEmail,
            password: enteredPassword
        }
        console.log(userData);
    }
    return (
        <div>
            <div className="container">
                <div className="card m-5 p-5">

                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" ref={email} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" ref={password}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;
