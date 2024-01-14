import { TextField, Box } from "@mui/material";
import Btn from "../../commons/button/button";
import '../login-form/loginform.css';

function RegisterForm(){
    return(
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
                <label>Name</label>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField type="text" placeholder="Your name" required />
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
            <div className='field-wrapper'>
                <label>Confirm password</label>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField type='password' placeholder="Confirm password" required />
                </Box>
            </div>
            <div>
                <Btn label={'Submit'} onClkFunc={(e)=>{e.preventDefault()}}/>
            </div>
        </form>
    )
}

export default RegisterForm;