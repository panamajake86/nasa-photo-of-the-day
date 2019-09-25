import React from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default function PhotoList() {
    const [stars, setStars] = React.useState([]);

    React.useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod")
            .then(result => {
                console.log(result);
                setStars(result.data);
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    return (
        <div className="nasa">
            {stars.map(star => {
                return (
                    <PhotoCard
                        title={star.title}
                        description={star.description}
                        key={star.id}
                    />
                );
            })}
        </div>
    );
}