// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const SingleMeal = (props) => {

    const { strMeal, strMealThumb, strInstructions, strArea } = props.meal
    const history = useHistory()


    const handleRestaurentBack = () => {
        history.push('/restaurent')
    }


    return (
        <Card className="w-25 mx-auto">
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    {strInstructions.slice(0, 200)}
                </Card.Text>
                <Card.Text>
                    Area: {strArea}
                </Card.Text>
                <Button onClick={handleRestaurentBack} variant="danger">Go To Restaurent</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleMeal;