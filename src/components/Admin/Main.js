import React from "react";
import Layout from "../Layout";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Card,CardContent,Typography,CardMedia} from "@material-ui/core";
import PanToolIcon from '@material-ui/icons/PanTool';
import {Line} from "react-chartjs-2";
const chartData={
    data:{
        labels:[1,2,3,4,5],
        datasets:[
            {
                label:["video mades"],
                backgroundColor:"rgba(255,0,255,.76)",
                data:[4,5,1,10,32,2,13]
            },
            {
                label: ["subscriptions"],
                backgroundColor: "rgba(0,0,0,.75)",
                data:[1,4,65,67,3,4,5]
            }
        ]
    }
}
const lineChart=()=>{
    return(
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} style={{maxWidth:"1000px",display:"block",margin:"auto",position:"relative"}}>
                <Card>
                    <CardContent>
                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={8}>
                                <div>
                                    <Typography component="h5" variant="h5" >
                                        Chart Sample
                                    </Typography>
                                    {console.log(chartData)}
                                    <Line
                                        options={{
                                            responsive:true,
                                        }}
                                        data={chartData.data}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
const Main=()=>{
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();

    return(
        <Layout>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} >
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Total Category
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    12340
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Total Category
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    12340
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Total Category
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    12340
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Total Category
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    12340
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={4}>
                                    <div>
                                        <Typography component="h5" variant="h5" >
                                            <PanToolIcon style={{width:"100%",height:"auto"}}/>
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <div>
                                        <Typography component="h1" variant="h3" color="textSecondary" gutterBottom style={{marginTop:"10%"}}>
                                            Welcome To Our Admin
                                        </Typography>
                                        <Typography component="h1" variant="subtitle1" gutterBottom>
                                            Please Explore What you want
                                        </Typography>
                                        <Typography component="h1" variant="subtitle1" gutterBottom>
                                            One thing you must remember that we are keeping your records
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {lineChart()}

        </Layout>
    )
}


export default Main