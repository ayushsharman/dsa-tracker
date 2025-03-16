import { Question } from '../../types/question';

interface QuestionsTableProps {
    questions: Question[];
    onToggleDone: (index: number) => void;
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
    onViewNotes: (index: number) => void;
}

export const QuestionsTable = ({ 
    questions, 
    onToggleDone, 
    onEdit, 
    onDelete, 
    onViewNotes 
}: QuestionsTableProps) => {
    return (
        <div className="w-full">
            <table className="w-full text-left text-gray-300 bg-black bg-opacity-50 rounded-xl overflow-hidden">
                <thead>
                    <tr className="border-b border-gray-700 text-2xl">
                        <th className="py-3 px-12">Topic</th>
                        <th className="py-3 px-12">Problem</th>
                        <th className="py-3 px-12">Done</th>
                        <th className="py-3 px-12">Link</th>
                        <th className="py-3 px-12">Notes</th>
                        <th className="py-3 px-12">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr key={index} className="border-b border-gray-700 text-2xl">
                            <td className="py-3 px-12">{question.topic}</td>
                            <td className="py-3 px-12">{question.name}</td>
                            <td className="py-3 px-14">
                                <input 
                                    type="checkbox" 
                                    checked={question.done}
                                    onChange={() => onToggleDone(index)}
                                    className="h-5 w-5" 
                                />
                            </td>
                            <td className="py-3 px-14">
                                <a 
                                    href={question.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white opacity-40 hover:opacity-60"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </td>
                            <td className="py-3 px-14">
                                <button 
                                    className="text-white opacity-40 hover:opacity-60"
                                    onClick={() => onViewNotes(index)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </button>
                            </td>
                            <td className="py-3 px-14 flex gap-4">
                                <button 
                                    className="text-white opacity-40 hover:opacity-60"
                                    onClick={() => onEdit(index)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button 
                                    className="text-white opacity-40 hover:opacity-60"
                                    onClick={() => onDelete(index)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}; 