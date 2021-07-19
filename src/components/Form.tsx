import React, { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState<{ [formItem: string]: string | number | any[] }>({ column: 'To-do' });
    return (
        <div className="flex flex-wrap w-2/3 m-auto justify-center bg-white dark:bg-gray-600 border-indigo-500 border rounded">
            <div className="w-1/2 m-2 justify-center">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Title
                </label>
                <input
                    type='text'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, title: e.target.value })}
                    className="form-input mt-1 dark:text-white bg-transparent bg-opacity-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div className="w-1/2 m-2 justify-center">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Description
                </label>
                <textarea
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm({ ...form, description: e.target.value })}
                    className="mt-1 dark:text-white bg-transparent bg-opacity-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div className="w-1/2 m-2 justify-center">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Column
                </label>
                <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, column: e.target.value })}
                    className="mt-1 dark:text-white bg-transparent bg-opacity-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <option value='To-do' selected>To-do</option>
                    <option value='In-Progress'>In-Progress</option>
                    <option value='Review'>Review</option>
                    <option value='Done'>Done</option>
                </select>
            </div>
            <div className="w-1/2 m-2 justify-center">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Labels
                </label>
                <select
                    multiple className="form-multiselect mt-1 dark:text-white bg-transparent bg-opacity-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => console.log({ ...form, labels: e.target.value })}
                    <option value='To-do' selected>To-do</option>
                    <option value='In-Progress'>In-Progress</option>
                    <option value='Review'>Review</option>
                    <option value='Done'>Done</option>
                </select>
            </div>
        </div>
    )
}

export default Form;