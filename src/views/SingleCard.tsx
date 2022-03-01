import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const SingleCard = ({}) => {
    const location = useLocation();
    //@ts-ignore
    const { text, title, time } = location.state;

    return (
        <main className="flex justify-center w-2/3 m-auto">
            <Card isPreview={false} title={title} text={text} />
        </main>
    );
};

export default SingleCard;
