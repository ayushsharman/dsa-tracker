import { useState, FormEvent } from 'react';
import { Question } from '../types/question';



const EMPTY_FORM: Question = {
    topic: "",
    name: "",
    done: false,
    link: "",
    notes: ""
};

export const useQuestions = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [formData, setFormData] = useState<Question>(EMPTY_FORM);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const resetForm = () => {
        setFormData(EMPTY_FORM);
        setIsEditMode(false);
        setSelectedQuestionIndex(null);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        const newQuestion: Question = {
            ...formData,
            done: formData.done || false,
            notes: formData.notes || ""
        };

        if (isEditMode && selectedQuestionIndex !== null) {
            setQuestions(prev => prev.map((q, i) => 
                i === selectedQuestionIndex ? newQuestion : q
            ));
        } else {
            setQuestions(prev => [...prev, newQuestion]);
        }
        
        resetForm();
    };

    const handleEdit = (index: number) => {
        const questionToEdit = questions[index];
        setFormData({
            ...questionToEdit,
            notes: questionToEdit.notes || "" // Ensure notes is never undefined
        });
        setSelectedQuestionIndex(index);
        setIsEditMode(true);
    };

    const handleDelete = (index: number) => {
        if (window.confirm("Are you sure you want to delete this question?")) {
            setQuestions(prev => prev.filter((_, i) => i !== index));
        }
    };

    const toggleDone = (index: number) => {
        setQuestions(prev => prev.map((q, i) => 
            i === index ? { ...q, done: !q.done } : q
        ));
    };

    const filteredQuestions = questions.filter(question => 
        question.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        question.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
        questions: filteredQuestions,
        formData,
        isEditMode,
        selectedQuestionIndex,
        searchQuery,
        setSearchQuery,
        handleInputChange,
        handleSubmit,
        handleEdit,
        handleDelete,
        toggleDone,
        setSelectedQuestionIndex,
        setIsEditMode,
        setFormData,
        resetForm
    };
}; 