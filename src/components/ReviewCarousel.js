import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { testimonials } from '../components/data';

function ReviewCard(props) {
    return (
        <Card sx={{ display: 'flex', wordWrap: 'break-word', width: '100%' }}>
            <CardMedia
                component="img"
                alt={props.item.imageAltText}
                src={props.item.image}
                sx={{ height: 90, width: '40%' }}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '60%', textAlign: 'center' }}>
                <Typography gutterBottom variant="h6" component="div">
                    {props.item.clientReview}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'bold', textAlign: 'right' }}>
                    {props.item.clientName}
                </Typography>
            </CardContent>
        </Card>
)}

const ReviewCarousel = () => {
    return (
        <Carousel>
            {
                testimonials.map((item, i) => <ReviewCard key={i} item={item} />)
            }
        </Carousel>
    )
}

export default ReviewCarousel;