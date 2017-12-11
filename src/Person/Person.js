import React from 'react';
import './Person.css';

const person = (property) => {

    return (
        <div className = "Person">
            <p onClick={property.click}>My name is {property.name} and I'm {property.age} years old.</p>
            <p>{property.children}</p>
            <input type="text" onChange={property.changed} value={property.name} /> {/*Two Way Binding */}
        </div>
    )
}

export default person;