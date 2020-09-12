import React from "react";
import './home.css';
import Header from "../../components/header";
import Slider from "../../components/slider";
import topdealsData from "../../contents/topdealsData"
import { Grid, Typography, Button } from "@material-ui/core";
import Cards from "../../components/cards";
import Drawer from "../../components/drawer";
import Divider from '@material-ui/core/Divider';

const Home = () => {
    return (
        <>
            <Drawer/>
            {/* <Header/> */}
            <Grid >
                <Grid container style={{ marginTop: "15px" }}>
                    <Grid item xs={12} sm={12} md={12} style={{ width: "100%" }}> 
                        <Slider />
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container className="head-and-button">
                    <Grid item>
                        <Typography variant="h5" style={{ marginLeft: "30px", marginBottom: "10px", marginTop: "10px" }}> 
                        Deals of the day </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" 
                         style={{ marginRight: "30px", marginBottom: "10px", marginTop: "10px" }}>
                            VIEW ALL
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container spacing={2} style={{ marginTop: 15, minHeight: 300, marginLeft: "40px" }}>
            {topdealsData.map((val, index) => {
                return (
                <Grid key={index} item sm={6} md={3} xs={12}>
                    <Cards
                    title={val.title}
                    description={val.description}
                    price={val.price}
                    isNew={val.isNew}
                    id={val.id}
                    />
                </Grid>
                );
            })}
            </Grid>
            <hr/>
        </>
    );
}

export default Home;