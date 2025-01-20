import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { testimonials } from '../components/data';

const ReviewCarousel = () => {
    return (
        <Box>
            <Carousel>
                {
                    testimonials.map((item, i) =>
                        <Card key={i} item={item} sx={{ maxWidth: 350, maxHeight: 100 }}>
                            <CardMedia
                                component="img"
                                alt="Women's eye with lash extensions"
                                image={testimonials.clientImage}
                                sx={{ height: 20, width: 150 }}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.clientReview}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', float: 'right' }}>
                                        {item.clientName}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    )}
            </Carousel>
        </Box>
    )
}

export default ReviewCarousel;