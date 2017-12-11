import React from 'react';
import classes from './Person.css';

const person = (property) => {

    return (
        <div className = {classes.Person}>
            <p onClick={property.click}>My name is {property.name} and I'm {property.age} years old.</p>
            <p>{property.children}</p>
            <input type="text" onChange={property.changed} value={property.name} /> {/*Two Way Binding */}
        </div>
    )
}

export default person;