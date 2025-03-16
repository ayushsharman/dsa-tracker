import { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-black bg-opacity-50 p-8 rounded-xl w-[600px] border border-white border-opacity-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-white opacity-40 text-4xl font-bold">{title}</h2>
                    <button 
                        onClick={onClose}
                        className="text-white opacity-50 hover:opacity-70"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}; 