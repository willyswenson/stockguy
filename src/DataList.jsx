import React from 'react';

export default function DataList({ response }) {
    console.log(response)
    return (
        <div className="feeback">
            <div>
                <h3>Equation: {response[0]}</h3>
                <p>Approximation: {response[1]}</p>
            </div>
        </div>
    );
}