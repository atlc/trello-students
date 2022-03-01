import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";

const Editable = () => {
    const location = useLocation();
    //@ts-ignore
    const { text, title, time } = location.state;

    const chained: {
        text: string;
        title: string;
        time: string;
    } = { text, title, time };

    return <Form {...chained} />;
};

export default Editable;
