import React from "react";
import Card from "./Card";
import { AiOutlinePlusCircle } from "react-icons/ai";

const CardColumn = ({ cardGroup, column, widthFraction }: CardColProps) => {
    return (
        <div key={`column-${column}`} className={`flex justify-center px-2 w-1/${widthFraction} overflow-hidden`}>
            <div className="w-full">
                <div className="flex justify-center w-full p-3 my-4 text-3xl text-blue-700 align-middle border-b-4 border-l-2 border-r-2 border-blue-700 rounded-lg max-h-16">
                    <h1>{column}</h1>
                    {column === "To-do" && <AiOutlinePlusCircle className="ml-8 place-self-end" onClick={() => alert(`Adding new card!`)} />}
                </div>
                <div className="w-full">
                    {cardGroup.map(card => (
                        <Card key={`card-${column}-${card.id}`} title={card.description.substring(0, 11)} text={card.description} />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface CardColProps {
    cardGroup: any[];
    column: string;
    widthFraction: string;
}

export default CardColumn;
