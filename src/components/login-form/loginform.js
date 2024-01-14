import { TextField, Box } from "@mui/material";
import {Link} from 'react-router-dom';
import Btn from "../../commons/button/button";
import './loginform.css';

function LoginFrom() {
    return (

        <form className="form-container">
            <div className='field-wrapper'>
                <label>Email</label>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField type="email" placeholder="Your email" required />
                </Box>
            </div>
            <div className='field-wrapper'>
                <label>Password</label>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField type='password' placeholder="Your password" required />
                </Box>
            </div>
            <div className="field-bottom">
                    <p>Forgot password?</p>
                <div>
                    <Btn label={'Login'} onClkFunc={(e)=>{e.preventDefault()}}/>
                </div>
            </div>
            <p>Create an account? Sign in</p>
        </form>
       
    )
}

export default LoginFrom;