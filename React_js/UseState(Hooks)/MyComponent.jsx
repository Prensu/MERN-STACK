import React, { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    // Function to update name
    const updateName = () => {
        setName("Spongebob");
    };

    // Function to increment age
    const incrementAge = () => {
        setAge((prevAge) => prevAge + 1); // Using callback for reliable state update
    };

    // Function to toggle employment status
    const toggleEmployedStatus = () => {
        setIsEmployed((prevStatus) => !prevStatus); // Using callback for reliability
    };

    // Render the component
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent;
