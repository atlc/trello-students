import React, { useState, useEffect } from "react";
import CardColumn from "../components/CardColumn";

const columnHeaders = ["Backlog", "To do", "In Progress", "Review", "Done"];

const Board = () => {
    const [cards, setCards] = useState(Object.assign({}, ...columnHeaders.map(col => ({ [col]: [] }))));

    useEffect(() => {
        // const res = await fetch(/api/board/:id)
        // const data = await res.json();
        const data = [
            { id: "0", column: "Backlog", description: "lol, you're never gonna finish this one" },
            { id: "1", column: "To do", description: "lol, to-do lmao 1 lol, to-do lmao 1 lol, to-do lmao 1" },
            { id: "2", column: "To do", description: "lol, to-do lmao 2 lol, to-do lmao 2 lol, to-do lmao 2" },
            { id: "3", column: "To do", description: "lol, to-do lmao 3 lol, to-do lmao 3 lol, to-do lmao 3" },
            { id: "4", column: "To do", description: "lol, to-do lmao 4 lol, to-do lmao 4 lol, to-do lmao 4" },
            { id: "5", column: "In Progress", description: "lol, IP, lmao 1 lol, IP, lmao 1 lol, IP, lmao 1" },
            { id: "6", column: "In Progress", description: "lol, IP, lmao 2 lol, IP, lmao 2 lol, IP, lmao 2" },
            { id: "7", column: "In Progress", description: "lol, IP, lmao 3 lol, IP, lmao 3 lol, IP, lmao 3" },
            { id: "8", column: "In Progress", description: "lol, IP, lmao 4 lol, IP, lmao 4 lol, IP, lmao 4" },
            { id: "9", column: "Review", description: "lol, review, lmao 1 lol, review, lmao 1 lol, review, lmao 1" },
            { id: "10", column: "Review", description: "lol, review, lmao 2 lol, review, lmao 2 lol, review, lmao 2" },
            { id: "11", column: "Review", description: "lol, review, lmao 3 lol, review, lmao 3 lol, review, lmao 3" },
            { id: "12", column: "Review", description: "lol, review, lmao 4 lol, review, lmao 4 lol, review, lmao 4" },
            { id: "13", column: "Done", description: "lol, done, lmao 1 lol, done, lmao 1 lol, done, lmao 1" },
            { id: "14", column: "Done", description: "lol, done, lmao 2 lol, done, lmao 2 lol, done, lmao 2" },
            { id: "15", column: "Done", description: "lol, done, lmao 3 lol, done, lmao 3 lol, done, lmao 3" },
            { id: "16", column: "Done", description: "lol, done, lmao 4 lol, done, lmao 4 lol, done, lmao 4" }
        ];

        const temp = Object.assign({}, ...columnHeaders.map(col => ({ [col]: [] })));
        data.forEach(card => {
            temp[card.column].push(card);
        });
        setCards(temp);
    }, []);

    return (
        <div className="flex flex-wrap justify-around overflow-hidden">
            {Object.keys(cards).map(column => (
                <CardColumn key={`card-column-${column}`} column={column} cardGroup={cards[column]} widthFraction={`${columnHeaders.length + 1}`} />
            ))}
        </div>
    );
};

export default Board;
