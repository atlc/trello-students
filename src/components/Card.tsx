import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
    CARD: 'trello_card'
}

const Card = ({ isDragging, text }) => {

    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: ItemTypes.CARD,
            item: { text },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }),
        []
    )

    return (
        <div ref={dragRef} style={{ opacity }}>
            {text}
        </div>
    )
}

export default Card;

interface DefaultCardAttrs {
    id: string;
    assigned_user_id: string;
    viewable_user_ids: string[];
    content: string;
    created_at: string;
    last_updated: string;
}