import LoginHeader from "../../components/login-header/loginheader";
import LoginFrom from "../../components/login-form/loginform";
import './login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-page">
                <LoginHeader />
                <LoginFrom />
            </div>
        </div>
    )
}

export default Login; 