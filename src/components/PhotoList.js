import React from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default function PhotoList() {
    const [stars, setStars] = React.useState([]);

    React.useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=EQyGW9Mv45gdaxSZNZkw7gnDizy0vqgVPGtJtiS4")
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
            <PhotoCard
                date={stars.date}
                title={stars.title}
                source={stars.hdurl}
                description={stars.explanation}
                id={stars.id}
                />
        </div>
    );
}