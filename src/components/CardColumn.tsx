import React from 'react';
import Card from './Card';

const CardColumn = () => {
    return (
        <div className='grid grid-row-1 text-3xl text-black dark:text-white'>
            <Card text='lol card 1' />
            <Card text='lol card 2' />
            <Card text='lol card 3' />
            <Card text='lol card 4' />
        </div>
    )
}

export default CardColumn
