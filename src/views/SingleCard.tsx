import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card'

const SingleCard = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <main className="flex w-2/3 justify-center m-auto">
            <Card isPreview={false} title={`Card #${id}`} text='I am a single card lmao' />
        </main>
    )
}

export default SingleCard;
