import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import { nanoid } from 'nanoid'
import movies from '../movies';

const NewMovie = ({ onAddMovie }) => {

    // Movies property states
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [postalUrl, setPostalUrl] = React.useState("");
    const [rating, setRating] = React.useState(0);


    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here
        const newMovie = {
            id: nanoid(),
            title: title,
            description: description,
            postalUrl: postalUrl,
            rating: rating,
        };
        // movies.push(newMovie);
        onAddMovie(newMovie);
        // console.log(newMovie);
        // Log the updated movies array
        // console.log(movies);

        // Reset field
        setTitle('');
        setDescription('');
        setPostalUrl('');
        setRating(0);
    };

    // React.useEffect(() => {
    //     console.log(title, description, postalUrl, rating);
    // }, []);

    return (
        <>
            <Card className='shadowBox2'>
                <Card.Body>
                    <Card.Title className='fw-bolder' > ADD NEW MOVIE </Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Title </Form.Label>
                            <Form.Control type="text" placeholder="" value={title} onChange={(event) => setTitle(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Description </Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} onChange={(event) => setDescription(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Poster URL </Form.Label>
                            <Form.Control type="url" placeholder="" value={postalUrl} onChange={(event) => setPostalUrl(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Rating
                                count={5}
                                size={30}
                                value={rating}
                                onChange={handleRatingChange}
                                color="#e6e6e6"
                                activeColor="#ffd700"
                            />
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <Button variant="primary" type="submit"> Save Movie </Button>
                        </Form.Group>

                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default NewMovie