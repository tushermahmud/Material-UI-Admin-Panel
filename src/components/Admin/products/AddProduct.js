import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Card, CardContent, Typography, CardMedia, Container, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const getWindowDimensions = () => {
    let { innerWidth: width, innerHeight: height } = window;
    if (width > 1000) {
        width = width - 360
    }
    return {
        width,
        height
    };
}
const AddProduct = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        console.log(windowDimensions.width)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [windowDimensions]);
    const classes = useStyles();

    return (
        <Paper style={{ width: `${windowDimensions.width - 40}px`, overflow: "hidden", float: "right", justifyContent: "flex-end", marginRight: "20px", marginLeft: "360px", marginTop: "40px", minHeight: windowDimensions.height, marginBottom: "20px" }}>
            <form className={classes.root} noValidate autoComplete="off" style={{ padding: "20px" }}>
                <div>
                    <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                    <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
                    <TextField style={{ width: "100%", display: "block" }}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField id="standard-search" label="Search field" type="search" />
                    <TextField
                        id="standard-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        disabled
                        id="filled-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <TextField
                        id="filled-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                    <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                    />
                    <TextField id="filled-search" label="Search field" type="search" variant="filled" />
                    <TextField
                        id="filled-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        required
                        label="Required"
                        label="First Name"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        required
                        label="Required"
                        label="Last Name"
                        variant="outlined"
                    />
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <CKEditor
                        editor={ClassicEditor}
                        onReady={editor => {

                        }}
                    />
                </div>
            </form>
        </Paper >
    );
};

export default AddProduct;