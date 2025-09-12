

import { MapPin } from 'lucide-react';
import React, { useState } from 'react'

const ListingSubArea = ({ formData, subAreas, loading, handleInputChange, handleSkipStep, error }) => {
    const [searchSubArea, setSearchSubArea] = useState('');
    const filteredSubAreas = subAreas.filter(subArea =>
        subArea.u_sub_area_name_id.toLowerCase().includes(searchSubArea.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <div className="flex items-center justify-center mb-4">
                    <div></div>
                    <h2 className="text-3xl font-bold text-gray-900">Choose your sub area</h2>
                </div>
                <p className="text-gray-600">Select the specific sub area within {formData.area}</p>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sub Area in {formData.area}, {formData.city} *
                </label>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search sub area..."
                    value={searchSubArea}
                    onChange={(e) => setSearchSubArea(e.target.value)}
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Loading State */}
                {loading.subAreas ? (
                    <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <div key={i} className="animate-pulse">
                                <div className="h-16 bg-gray-200 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Sub Area Buttons - Scrollable Container */}
                        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                            {filteredSubAreas.map(subArea => (
                                <button
                                    key={subArea.u_sub_area_name_id}
                                    onClick={() => {
                                        handleInputChange('subArea', subArea.u_sub_area_name_id)
                                    }}
                                    className={`p-4 text-left border rounded-lg transition-all ${formData.subArea === subArea.u_sub_area_name_id
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-300 hover:border-blue-300'
                                        }`}
                                >
                                    {subArea.u_sub_area_name_id}
                                </button>
                            ))}
                        </div>

                        {/* Add New Sub Area Button */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <button
                                onClick={() => {
                                    const newSubArea = prompt('Enter new sub area name:');
                                    if (newSubArea) {
                                        handleInputChange('subArea', newSubArea);
                                    }
                                }}
                                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
                                + Add New Sub Area
                            </button>
                        </div>

                        {/* No Results Message */}
                        {searchSubArea && filteredSubAreas.length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                                <p>No sub areas found matching "{searchSubArea}"</p>
                                <button

                                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Use "{searchSubArea}" as new sub area
                                </button>
                            </div>
                        )}

                        {/* Skip Alternative at Bottom */}
                        <div className="mt-6 pt-4 border-t border-gray-100">
                            <button
                                onClick={() => handleSkipStep('subArea', '')}
                                className="w-full p-3 text-gray-500 hover:text-blue-600 text-sm transition-colors"
                            >
                                Or skip and continue without sub area
                            </button>
                        </div>
                    </>
                )}

                {/* Error Message */}
                {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
            </div>
        </div>
    )
}

export default ListingSubArea