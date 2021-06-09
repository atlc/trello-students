import React from 'react';

//@ts-ignore
const Card = ({ text }) => {

    //   <div className='border-4 border-blue-500 p-3'>{text}</div>

    return (
        <div>{text}</div>
    )
}

export default Card;

// interface DefaultCardAttrs {
//     id: string;
//     assigned_user_id: string;
//     viewable_user_ids: string[];
//     content: string;
//     created_at: string;
//     last_updated: string;
// }