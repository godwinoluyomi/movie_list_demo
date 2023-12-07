import React from 'react'
import { Card, Row, Col, Form } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';

const Filter = ({ onFilterChange }) => {

    const [searchTitle, setSearchTitle] = React.useState("");
    const [searchRating, setSearchRating] = React.useState(0);

    const handleSearchRatingChange = (value) => {
        setSearchRating(value);
        onFilterChange({
            title: searchTitle,
            rating: value
        });
    };

    const handleSearchTitleChange = (event) => {
        const newTitle = event.target.value;
        setSearchTitle(newTitle);
        onFilterChange({
            title: newTitle,
            rating: searchRating
        });
    };


    // console.log(searchTitle, searchRating);

    return (

        <div className='p-4'>
            {/* <Card.Body> */}
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mt-2">
                            <Form.Control type="text" placeholder="Search Title" value={searchTitle} onChange={handleSearchTitleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={2}>
                        <p> Movies having more ratings </p>
                    </Col>
                    <Col md={3}>

                        <Form.Group >
                            <Rating
                                count={5}
                                size={35}
                                value={searchRating}
                                onChange={handleSearchRatingChange}
                                color="#e6e6e6"
                                activeColor="#ffd700"
                            />
                        </Form.Group>
                    </Col>
                </Row>

            </Form>
            {/* </Card.Body> */}
        </div>
    )
}

export default Filter