import React, { useState } from "react";

interface FormProps {
    text: string;
    title: string;
    time: string;
}

const Form = ({ text, title, time }: FormProps) => {
    const [form, setForm] = useState<{ [formItem: string]: string | number | any[] }>({ title, description: text, time });

    return (
        <div className="flex flex-wrap justify-center w-2/3 m-auto bg-white border border-blue-500 rounded dark:bg-gray-600">
            <div className="justify-center w-1/2 m-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Title</label>
                <input
                    type="text"
                    value={form["title"]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, title: e.target.value })}
                    className="block w-full mt-1 bg-transparent bg-opacity-50 border-gray-300 rounded-md shadow-sm form-input dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div className="justify-center w-1/2 m-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Description</label>
                <textarea
                    value={form["description"]}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm({ ...form, description: e.target.value })}
                    className="block w-full mt-1 bg-transparent bg-opacity-50 border-gray-300 rounded-md shadow-sm dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div className="justify-center w-1/2 m-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Column</label>
                <select
                    value={form["column"]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, column: e.target.value })}
                    className="block w-full mt-1 bg-transparent bg-opacity-50 border-gray-300 rounded-md shadow-sm dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="To-do" selected>
                        To-do
                    </option>
                    <option value="In-Progress">In-Progress</option>
                    <option value="Review">Review</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div className="justify-center w-1/2 m-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Labels</label>
                <select
                    multiple
                    className="block w-full mt-1 bg-transparent bg-opacity-50 border-gray-300 rounded-md shadow-sm form-multiselect dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => console.log({ ...form, labels: e.target.value })}
                    <option value="To-do" selected>
                        To-do
                    </option>
                    <option value="In-Progress">In-Progress</option>
                    <option value="Review">Review</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        </div>
    );
};

export default Form;
