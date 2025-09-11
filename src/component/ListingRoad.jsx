import { MapPin } from 'lucide-react';
import React, { useState } from 'react'

const ListingRoad = ({ formData, roadData, loading, handleInputChange, handleDataObj, error }) => {
    const [searchRoad, setSearchRoad] = useState('');
    console.log("in the road === ", roadData)
    const filteredRoads = roadData.filter(road =>
        road.u_road_name.toLowerCase().includes(searchRoad.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <div className="mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">Choose your road</h2>
                </div>
                <p className="text-gray-600">Select the road where your business is located in {formData.city}</p>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Road in {formData.city} *
                </label>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search road..."
                    value={searchRoad}
                    onChange={(e) => setSearchRoad(e.target.value)}
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Loading State */}
                {loading.roads ? (
                    <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <div key={i} className="animate-pulse">
                                <div className="h-16 bg-gray-200 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Road Buttons - Scrollable Container */}
                        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                            {filteredRoads.map(road => (
                                <button
                                    key={road.u_road_name}
                                    onClick={() => {
                                        handleInputChange('road', road.u_road_name)
                                        handleDataObj('areas', road.areas)
                                    }}
                                    className={`p-4 text-left border rounded-lg transition-all ${formData.road === road.u_road_name
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-300 hover:border-blue-300'
                                        }`}
                                >
                                    {road.u_road_name}
                                </button>
                            ))}
                        </div>

                        {/* Add New Road Button */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <button
                                onClick={() => {
                                    const newRoad = prompt('Enter new road name:');
                                    if (newRoad) {
                                        handleInputChange('road', newRoad);
                                    }
                                }}
                                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
                                + Add New Road
                            </button>
                        </div>

                        {/* No Results Message */}
                        {searchRoad && filteredRoads.length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                                <p>No roads found matching "{searchRoad}"</p>
                                <button
                                    onClick={() => {
                                        handleInputChange('road', searchRoad);
                                        setSearchRoad('');
                                    }}
                                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Use "{searchRoad}" as new road
                                </button>
                            </div>
                        )}
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

export default ListingRoad