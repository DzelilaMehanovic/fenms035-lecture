import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

const MyButton = (props) => {
    const { onClick, text} = props;

    return (
        <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={12}
            justify="flex-end"
        >
            <Tooltip title="MyButton Tooltip">
                <IconButton
                    variant="outlined"
                    color={props.color ? props.color:"primary"}
                    size="large"
                    className="m-r-5"
                    onClick={onClick? onClick : null}
                    
                >
                {text}
                </IconButton>
            </Tooltip>
            {props.displayDetails && 'There is a text props' }
        </Grid>
    );
};

export default MyButton;
