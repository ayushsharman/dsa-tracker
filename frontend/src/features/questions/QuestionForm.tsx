import { FormEvent } from 'react';
import { Question } from '../../types/question';

interface QuestionFormProps {
    formData: Question;
    isEditMode: boolean;
    onSubmit: (e: FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const QuestionForm = ({ formData, isEditMode, onSubmit, onChange }: QuestionFormProps) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div>
                <label className="text-white opacity-40 block mb-2 text-xl">Topic</label>
                <input 
                    type="text" 
                    name="topic"
                    value={formData.topic}
                    onChange={onChange}
                    className="w-full bg-black text-white opacity-30 p-3 text-2xl rounded-xl focus:outline-none focus:opacity-50"
                    placeholder="e.g., Array, String, Dynamic Programming"
                    required
                />
            </div>
            <div>
                <label className="text-white opacity-40 block mb-2 text-xl">Problem Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    className="w-full bg-black text-white opacity-30 p-3 text-2xl rounded-xl focus:outline-none focus:opacity-50"
                    placeholder="e.g., Two Sum, Valid Parentheses"
                    required
                />
            </div>
            <div>
                <label className="text-white opacity-40 block mb-2 text-xl">Problem Link</label>
                <input 
                    type="url" 
                    name="link"
                    value={formData.link}
                    onChange={onChange}
                    className="w-full bg-black text-white opacity-30 p-3 text-2xl rounded-xl focus:outline-none focus:opacity-50"
                    placeholder="https://leetcode.com/problems/..."
                    required
                />
            </div>
            <div>
                <label className="text-white opacity-40 block mb-2 text-xl">Notes</label>
                <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={onChange}
                    className="w-full bg-black text-white opacity-30 p-3 text-2xl rounded-xl focus:outline-none focus:opacity-50 h-32"
                    placeholder="Add your notes here..."
                />
            </div>
            <div className="flex justify-end gap-4 mt-4">
                <button
                    type="submit"
                    className="px-6 py-3 bg-white bg-opacity-40 text-black rounded-xl hover:bg-opacity-60 text-xl font-semibold"
                >
                    {isEditMode ? "Save Changes" : "Add Question"}
                </button>
            </div>
        </form>
    );
}; 