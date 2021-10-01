import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Meals = (props) => {
    // console.log(props.meal);
    const { strMeal, strMealThumb, idMeal,strInstructions } = props.meal
    const history = useHistory()
    const handleSingleMeal = () => {
        history.push(`/meal/${idMeal}`)
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0,200) }
                    </Card.Text>
                    <Link className="me-4" to={`/meal/${idMeal}`}>
                        <Button variant="danger">Details</Button>
                    </Link>
                    <Button variant="danger" onClick={handleSingleMeal}>Details 2</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Meals;