import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card'
import Form from '../components/Form';

const Editable = ({ }) => {
    const location = useLocation();
    //@ts-ignore
    const { text, title, time } = location.state;

    return (
        <Form />
    )
}

export default Editable;
