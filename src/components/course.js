import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default class Course extends React.Component {

  render() {
    return (
      <Grid
        item xs={2} sm={4} md={4}
        textAlign="center">
        <Link to={this.props.value.id}
          underline="none">
          <Card
            sx={{ minWidth: 500 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Tema: {this.props.value.theme}
              </Typography>
              <Typography 
                sx={{ fontSize: 14 }} 
                color="text.secondary" 
                gutterBottom>
                Año: {this.props.value.yearOfDictation}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  }
}

