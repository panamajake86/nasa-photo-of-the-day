import React from "react";

export default function PhotoCard(props) {
    return (
        <div className="space-card" key={props.id}>
            <h3>{props.title} <br />Date: {props.date}</h3>
            <img src={props.source} alt="NASA Photo of the Day" />
            <p>{props.description}</p>
            <a href={props.link}>{props.link}</a>
        </div>
    );
}