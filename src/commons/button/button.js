import { Button } from "@mui/material";
import PropTypes from "prop-types";

function Btn(props){
    const {label, onClkFunc} = props;
    return(
        <Button variant='contained' onClick={onClkFunc}>{label}</Button>
    )
}

export default Btn;

Btn.prototype={
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired
}