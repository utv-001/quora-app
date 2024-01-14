import LoginHeader from "../../components/login-header/loginheader";
import RegisterForm from "../../components/register-form/register";
import '../login/login.css';

function Register() {
    return (
        <div className="login-container">
            <div className="login-page">
                <LoginHeader />
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register;