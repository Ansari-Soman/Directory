import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddNew = ({ isOpen = true, label, handleOnNewWindow, handleOnNewData }) => {
    if (!isOpen) return null;

    const [newData, setNewData] = useState('')
    return (
        <div
            className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/30 backdrop-blur-md"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-semibold text-gray-900">Add New {label}</h3>
                    </div>
                    <button
                        onClick={handleOnNewWindow}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {label} Name *
                        </label>
                        <input
                            onChange={(e) => setNewData(e.target.value)}
                            type="text"
                            placeholder={`Enter ${label} name`}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                    <button
                        onClick={handleOnNewWindow}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() =>
                        {
                            handleOnNewData(newData, label)
                            handleOnNewWindow(false)
                        } 
                        }
                         className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Add {label}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNew;