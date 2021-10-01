import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import Meals from '../Meals/Meals';

const Restaurent = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])


    const handleSearchClick = (event) => {
        setSearchText(event.target.value);
    }

    return (
        <div>
            <Container>
                <Row>
                    <InputGroup onChange={handleSearchClick} className="mt-3 w-50 m-auto">
                        <FormControl
                            placeholder="Search Your Food"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Row>
                <div>
                    <Row xs={1} md={4} className="g-3 mt-4">
                        {
                            meals.map(meal => <Meals key={meal.strMeal} meal={meal} />)
                        }
                    </Row>
                </div>
            </Container>


        </div>
    );
};

export default Restaurent;