import React from "react";

export default function PhotoCard(props) {
    return (
        <div className="space-card" key={props.id}>
            <h2>Photo: {props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}