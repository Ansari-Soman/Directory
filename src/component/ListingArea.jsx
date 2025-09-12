import { MapPin } from 'lucide-react';
import React, { useState } from 'react'

const ListingStep2 = ({ formData, areas, loading, handleInputChange, error, handleDataObj }) => {
    const [searchArea, setSearchArea] = useState('');
    const filteredAreas = areas.filter(area =>
        area.u_area_name.toLowerCase().includes(searchArea.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose your area</h2>
                <p className="text-gray-600">Select the specific area where your business is located</p>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area in {formData.city} *
                </label>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search area..."
                    value={searchArea}
                    onChange={(e) => setSearchArea(e.target.value)}
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Loading State */}
                {loading.areas ? (
                    <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <div key={i} className="animate-pulse">
                                <div className="h-16 bg-gray-200 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Area Buttons - Scrollable Container */}
                        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                            {filteredAreas.map(area => (
                                <button
                                    key={area.u_area_name}
                                    onClick={() => {
                                        handleInputChange('area', area.u_area_name)
                                        handleDataObj('subAreas', area.subAreas)
                                    }}
                                    className={`p-4 text-left border rounded-lg transition-all ${formData.area === area.u_area_name
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-300 hover:border-blue-300'
                                        }`}
                                >
                                    {area.u_area_name}
                                </button>
                            ))}
                        </div>

                        {/* Add New Area Button */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <button
                                onClick={() => {
                                    const newArea = prompt('Enter new area name:');
                                    if (newArea) {
                                        handleInputChange('area', newArea);
                                    }
                                }}
                                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
                                + Add New Area
                            </button>
                        </div>

                        {/* No Results Message */}
                        {searchArea && filteredAreas.length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                                <p>No areas found matching "{searchArea}"</p>
                                <button
                                    onClick={() => {
                                        handleInputChange('area', searchArea);
                                        setSearchArea('');
                                    }}
                                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Use "{searchArea}" as new area
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default ListingStep2