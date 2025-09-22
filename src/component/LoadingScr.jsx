import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = ({ message = "Loading..." }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-8 px-4">
            <div className="max-w-lg mx-auto w-full">
                <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                    {/* Loading Animation */}
                    <div className="mb-8">
                        <div className="flex items-center justify-center mb-6">
                            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Maya Directory</h2>
                        <p className="text-lg text-gray-700 font-medium">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;