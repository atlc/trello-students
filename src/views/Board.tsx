import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Card from '../components/Card';


const columns = ['To-do', 'In-Progress', 'Review', 'Done'];

const Board = () => {
    return (
        <div className="flex flex-wrap justify-around overflow-hidden">
            {columns.map(column => (
                <div key={`column-${column}`} className={`flex justify-center px-2 w-1/${columns.length + 1} overflow-hidden`}>
                    <div className="w-full">
                        <div className='my-4 w-full flex justify-center align-middle p-3 text-3xl text-green-500 border-b-4 border-l-2 border-r-2 border-green-500 rounded-lg max-h-16'>
                            <h1>{column}</h1>
                            {column === 'To-do' 
                            && <AiOutlinePlusCircle 
                                className='ml-8 place-self-end'
                                onClick={() => alert(`Adding new card!`)}    
                            />}
                        </div>
                        <div className='w-full'>
                            {columns.map((card, idx) => (
                                <Card key={`card-${column}-${card}`} text={`Card text number ${idx + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Board;