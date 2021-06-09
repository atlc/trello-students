import React from 'react'
import Card from '../components/Card';

const columns = ['To-do', 'In-Progress', 'Review', 'Done'];

const Board = () => {
    return (
        <div className="flex flex-wrap justify-around overflow-hidden">
            {columns.map(column => (
                <div key={`column-${column}`} className={`border-2 bg-red-100 dark:bg-gray-700 rounded border-red-700 flex justify-center px-2 w-1/${columns.length + 1} overflow-hidden`}>
                    <div className="w-full">
                        <h1 className='flex justify-center p-3 text-3xl text-red-500 border-b-4 border-l-2 border-r-2 border-red-500 rounded-lg max-h-16'>{column}</h1>
                        <div className='w-full'>
                            {columns.map((card, idx) => (
                                <Card key={`card-${column}-${card}`} text={`Card text number ${idx + 1}`} />
                            ))}
                        </div>
                        <button
                            className="px-3 py-1 text-white bg-red-600 rounded-md"
                            onClick={() => alert(`Add a new card in ${column}`)}
                        >Add new "{column}" card</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Board;