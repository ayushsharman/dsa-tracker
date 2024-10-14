import PlusIcon from "@heroicons/react/16/solid/PlusIcon";

const DSATracker = () => {
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
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
            <div className="absolute right-12 bottom-12 bg-white opacity-40 rounded-full p-2">
                <PlusIcon className="h-6 w-6 text-black" />
            </div>
        </div>
    );
};

export default DSATracker;
