import Logo from '../../assets/quoralogo.png'
import './loginheader.css';

function LoginHeader(){
    return(
        <div className='loginHeader-continer'>
            <img src={Logo} className='logo'/>
            <p>A place to share knowledge and better understand the world</p>
        </div>
    )
}

export default LoginHeader;