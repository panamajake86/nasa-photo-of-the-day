import React from "react";

export default function PhotoCard(props) {
    return (
        <div className="space-card" key={props.id}>
            <h2>{props.title} {props.date}</h2>
            <img src={props.source} alt="NASA Photo of the Day" />
            <p>{props.description}</p>
        </div>
    );
}