import React from "react";

function HobbyList ({ hobbies }) {
    return (
        <ul>
            {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
            ))}
        </ul>
    )
}

export default HobbyList;