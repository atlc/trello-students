import React, { useState, useEffect } from 'react'
import Card from '../components/Card';
import CardColumn from '../components/CardColumn';


const columnHeaders = ['To-do', 'In-Progress', 'Review', 'Done'];

const Board = () => {
    const [cards, setCards] = useState(Object.assign({}, ...columnHeaders.map(col => ({ [col]: [] }))));

    useEffect(() => {
        // const res = await fetch(/api/board/:id)
        // const data = await res.json();
        const data = [
            {id: '1', column: 'To-do', description: 'lol, to-do lmao 1'},
            {id: '2', column: 'To-do', description: 'lol, to-do lmao 2'},
            {id: '3', column: 'To-do', description: 'lol, to-do lmao 3'},
            {id: '4', column: 'To-do', description: 'lol, to-do lmao 4'},
            {id: '5', column: 'In-Progress', description: 'lol, IP, lmao 1'},
            {id: '6', column: 'In-Progress', description: 'lol, IP, lmao 2'},
            {id: '7', column: 'In-Progress', description: 'lol, IP, lmao 3'},
            {id: '8', column: 'In-Progress', description: 'lol, IP, lmao 4'},
            {id: '9', column: 'Review', description: 'lol, review, lmao 1'},
            {id: '10', column: 'Review', description: 'lol, review, lmao 2'},
            {id: '11', column: 'Review', description: 'lol, review, lmao 3'},
            {id: '12', column: 'Review', description: 'lol, review, lmao 4'},
            {id: '13', column: 'Done', description: 'lol, done, lmao 1'},
            {id: '14', column: 'Done', description: 'lol, done, lmao 2'},
            {id: '15', column: 'Done', description: 'lol, done, lmao 3'},
            {id: '16', column: 'Done', description: 'lol, done, lmao 4'},
        ];

        const temp = Object.assign({}, ...columnHeaders.map(col => ({ [col]: [] })));
        data.forEach(card => { temp[card.column].push(card) });
        setCards(temp);
    }, []);

    return (
        <div className="flex flex-wrap justify-around overflow-hidden">
            {Object.keys(cards).map(column => (
                <CardColumn column={column} cardGroup={cards[column]} widthFraction={`${columnHeaders.length + 1}`} />
            ))}
        </div>
    )
}

export default Board;