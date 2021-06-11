import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

//@ts-ignore
const Card = ({ text, title = 'Title BottomText', time = new Date().toLocaleString(), isPreview = true }) => {
    const history = useHistory();

    return (
        <main className="my-2 flex flex-wrap justify-center">
            <div className="flex flex-wrap flex-col p-3 bg-gray-100 dark:bg-gray-600 border border-green-700 rounded-xl shadow-xl">
                <section className="text-sm font-thin text-green-400">
                    {time}
                </section>
                <section className="text-2xl font-bold">
                    {title}
                </section>
                <section className="font-normal text-gray-700 dark:text-green-200 text-md flex flex-wrap">
                    {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} 
                </section>
                <section className="text-lg font-bold text-green-900 dark:text-green-400">
                    @atlc lmao
                </section>
                {isPreview && <section>
                    <AiOutlineEye onClick={() => history.push('/card/42069')} />
                </section>}
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