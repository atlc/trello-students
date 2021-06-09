import React from 'react'

const columns = ['To-do', 'In-Progress', 'Review', 'Done'];

const Board = () => {
    return (
        <div className="flex flex-wrap justify-around overflow-hidden">
            {columns.map(column => (
                <div key={`column-${column}`} className={`border-2 bg-yellow-100 dark:bg-gray-700 rounded border-yellow-700 flex justify-center my-2 py-4 px-2 w-1/${columns.length + 1} overflow-hidden`}>
                    <div className="grid grid-rows-2 w-full">
                        <h1 className='flex justify-center p-3 max-h-16 border-b-4 border-l-2 border-r-2 rounded-lg border-yellow-500 text-yellow-500 text-3xl'>{column}</h1>
                        <div className='w-11/12'>
                            {columns.map(card => (<p className='w-full' key={`card-${column}-${card}`}>{card} card</p>))}
                            {columns.map(card => (<p className='w-full' key={`card-${column}-${card}-2`}>{card} card</p>))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Board;