import React from 'react';

//@ts-ignore
const Card = ({ text, title = 'Title BottomText', time = new Date().toLocaleString(), id = '1' }) => {


    return (
        <main className="flex justify-center w-full">
            <div className="flex flex-col p-3 bg-white border border-black shadow-md rounded-xl">
                <section className="text-sm font-thin text-orange-400">
                    {time}
                </section>
                <section className="text-3xl font-bold">
                    {title}
                </section>
                <section className="font-normal text-gray-700 text-md">
                    {text}
                </section>
                <section className="text-lg font-bold text-red-900">
                    @atlc lmao
                </section>
                <section className="flex justify-end">
                    <button
                        type="button"
                        className="px-3 py-1 text-white bg-red-600 rounded-md"
                        onClick={() => alert(`Get Details Modal for id #${id}`)}
                    >See Details</button>
                </section>
            </div>
        </main>
    )
}

export default Card;


interface Users {
    id: string;
    name: string;
}

interface Tags {
    id: string;
    name: string;
}

interface Comment {
    id: string;
    user_id: Users['id'];
    card_id: CardAttrs['id'];
    text: string;
}

interface Board {
    id: string;
    viewable_ids: Users['id'][];
}

interface CardAttrs {
    id: string;
    board_id: Board['id'];
    created_by_id: Users['id'];
    assigned_to_id: Users['id'];
    tags: Tags[];
    column: 'To-do' | 'In-Progress' | 'Review' | 'Done';
    description: string;
    comments: Comment[];
    created_at: string;
    last_updated: string;
}