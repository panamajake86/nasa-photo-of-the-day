import React from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";
import { Container, Row } from "reactstrap";

export default function PhotoList() {
    const [stars, setStars] = React.useState([]);

    React.useEffect(() => {

        async function fetchData() {
            try {
                const starList = await axios.get("https://api.nasa.gov/planetary/apod?api_key=EQyGW9Mv45gdaxSZNZkw7gnDizy0vqgVPGtJtiS4");
                setStars(starList.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();

    }, []);

    return (
        <Container>
            <Row>
                <div className="nasa">
                    <PhotoCard
                        date={stars.date}
                        title={stars.title}
                        source={stars.hdurl}
                        description={stars.explanation}
                        link={stars.url}
                        id={stars.id}
                    />
                </div>
            </Row>
        </Container>
    );
}