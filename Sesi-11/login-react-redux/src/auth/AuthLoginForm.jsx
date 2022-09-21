import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authLoginAPI } from "../users/userSlice";

const AuthLoginForm = () => {
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const doSubmit = (event) => {
        event.preventDefault();
        dispatch(authLoginAPI({ email, password }));
        setEmail('');
        setPassword('');
    }

    return (
        <form name="loginForm" onSubmit={doSubmit}>
            <div className="form-g-col">
                <div className="form-g">
                    <label> Email</label>
                    <input type="email" name="email" value={email} onChange={emailChangeHandler} autoComplete="on"/>
                </div>

                <div className="form-g">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={passwordChangeHandler} autoComplete="on"/>
                </div>
            </div>

            <input type="submit" value="Login" />

            <div className="message">
                {authState.isLoginPending && <div>Please wait...</div>}
                {authState.isLoginSuccess && <div>Login success</div>}
                {authState.errorMessage && <div>{authState.errorMessage}</div>}
            </div>
        </form>
    )
}

export default AuthLoginForm;

