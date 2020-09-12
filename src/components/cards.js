import React from "react";
import { Card, CardContent, Typography, Grid} from "@material-ui/core";

const Cards = (props) => {
    return (
        <>
           <Grid container >
                <Grid item component={Card}>
                    <CardContent>
                        <img src="https://picsum.photos/200" alt="product"/> 
                        <Typography color="textSecondary" gutterBottom>{ props.title }</Typography>
                        <Typography color="textSecondary">
                            { props.description }
                        </Typography>
                        <Typography variant="body2">{ props.price }</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </>
    );
}

export default Cards;