import PlusIcon from "@heroicons/react/16/solid/PlusIcon";
import { useState } from "react";

const DSATracker = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-16 flex flex-col gap-8">
            <h1 className="text-white opacity-40 text-6xl font-bold">Questions Tracker</h1>

            <div className="w-full relative">
                <input
                    type="text"
                    placeholder="Search your questions..."
                    className="w-full py-3 px-4 bg-black  text-white opacity-30 text-4xl rounded-xl focus:outline-none"
                />
                <button className="absolute right-8 top-3 text-white opacity-30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                </button>
            </div>

            {/* Questions Table */}
            <div className="w-full">
                <table className="w-full text-left text-gray-300 bg-black bg-opacity-50 rounded-xl overflow-hidden">
                    <thead>
                        <tr className="border-b border-gray-700 text-2xl">
                            <th className="py-3 px-12">Topic</th>
                            <th className="py-3 px-12">Problem</th>
                            <th className="py-3 px-12">Done</th>
                            <th className="py-3 px-12">Link</th>
                            <th className="py-3 px-12">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-700 text-2xl">
                            <td className="py-3 px-12">Array</td>
                            <td className="py-3 px-12">Two Sum</td>
                            <td className="py-3 px-14">
                                <input type="checkbox" className="h-5 w-5" />
                            </td>
                            <td className="py-3 px-14">
                                <button className="text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </td>
                            <td className="py-3 px-14">
                                <button className="text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="absolute right-12 bottom-12 bg-white opacity-40 rounded-full p-2 hover:opacity-60 cursor-pointer"
                onClick={() => setIsModalOpen(true)}>
                <PlusIcon className="h-6 w-6 text-black" />
            </div>

        
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-black bg-opacity-50 p-8 rounded-xl w-[600px] border border-white border-opacity-10">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-white opacity-40 text-4xl font-bold">Add New Question</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-white opacity-30 hover:opacity-60"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <form className="flex flex-col gap-6">
                            <div>
                                <label className="text-white opacity-40 block mb-2 text-xl">Topic</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-black text-white opacity-30 p-3 text-2xl rounded-xl focus:outline-none focus:opacity-50"
                                    placeholder="e.g., Array, String, Dynamic Programming"
                                />
                            </div>
                            <div>
                                <label className="text-white opacity-40 block mb-2 text-xl">Problem Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-black text-white opacity-30 p-3 text-2xl rounded-xl focus:outline-none focus:opacity-50"
                                    placeholder="e.g., Two Sum, Valid Parentheses"
                                />
                            </div>
                            <div>
                                <label className="text-white opacity-40 block mb-2 text-xl">Problem Link</label>
                                <input 
                                    type="url" 
                                    className="w-full bg-black text-white opacity-30 p-3 text-2xl rounded-xl focus:outline-none focus:opacity-50"
                                    placeholder="https://leetcode.com/problems/..."
                                />
                            </div>
                            <div>
                                <label className="text-white opacity-40 block mb-2 text-xl">Notes</label>
                                <textarea 
                                    className="w-full bg-black text-white opacity-30 p-3 text-2xl rounded-xl focus:outline-none focus:opacity-50 h-32"
                                    placeholder="Add your notes here..."
                                />
                            </div>
                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-3 text-white opacity-30 hover:opacity-60 text-xl"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-white bg-opacity-40 text-black rounded-xl hover:bg-opacity-60 text-xl font-semibold"
                                >
                                    Add Question
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DSATracker;
