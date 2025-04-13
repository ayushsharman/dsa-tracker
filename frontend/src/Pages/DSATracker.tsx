import PlusIcon from "@heroicons/react/16/solid/PlusIcon";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { QuestionForm } from "../features/questions/QuestionForm";
import { QuestionsTable } from "../features/questions/QuestionsTable";
import { useQuestions } from "../hooks/useQuestions";

const DSATracker = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
    
    const {
        questions,
        formData,
        isEditMode,
        searchQuery,
        setSearchQuery,
        handleInputChange,
        handleSubmit,
        handleEdit,
        handleDelete,
        toggleDone,
        setFormData,
        resetForm
    } = useQuestions();

    const handleCloseModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const handleViewNotes = (index: number) => {
        const question = questions[index];
        setFormData(question);
        setIsNotesModalOpen(true);
    };

    return (
        <div className="p-16 flex flex-col gap-8">
            <h1 className="text-white opacity-40 text-6xl font-bold">Questions Tracker</h1>

            <div className="w-full relative">
                <input
                    type="text"
                    placeholder="Search your questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-3 px-4 bg-black text-white opacity-30 text-4xl rounded-xl focus:outline-none focus:opacity-50"
                />
                <button className="absolute right-8 top-3 text-white opacity-30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                </button>
            </div>

            <QuestionsTable 
                questions={questions}
                onToggleDone={toggleDone}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onViewNotes={handleViewNotes}
            />

            <div className="absolute right-12 bottom-12 bg-white opacity-40 rounded-full p-2 hover:opacity-60 cursor-pointer"
                onClick={() => {
                    resetForm();
                    setIsModalOpen(true);
                }}>
                <PlusIcon className="h-6 w-6 text-black" />
            </div>

            {/* Notes Modal */}
            <Modal
                isOpen={isNotesModalOpen}
                onClose={() => {
                    setIsNotesModalOpen(false);
                    resetForm();
                }}
                title={`Notes - ${formData.name}`}
            >
                <div className="text-white opacity-40 text-2xl whitespace-pre-wrap">
                    {formData.notes || "No notes available"}
                </div>
            </Modal>

            {/* Add/Edit Question Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={isEditMode ? "Edit Question" : "Add New Question"}
            >
                <QuestionForm
                    formData={formData}
                    isEditMode={isEditMode}
                    onSubmit={(e) => {
                        handleSubmit(e);
                        setIsModalOpen(false);
                    }}
                    onChange={handleInputChange}
                />
            </Modal>
        </div>
    );
};

export default DSATracker;
