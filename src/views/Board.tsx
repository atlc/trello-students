import React from 'react'

const columns = ['To-do', 'In-Progress', 'Review', 'Done'];

const Board = () => {
    return (
        <div className="flex flex-wrap justify-around overflow-hidden">
            {columns.map(column => (
                <div key={`column-${column}`}
                    className={`border-2 rounded border-yellow-700 flex justify-center my-2 py-4 px-2 w-1/${columns.length + 1} overflow-hidden`}
                >
                    <div className="grid">
                        <h1 className='bg-yellow-500 p-3 border-2 rounded border-yellow-800 text-yellow-800 text-3xl'>{column}</h1>
                    </div>
                    <div className="grid grid-rows-1">
                        <div className="">CARDZ</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Board;