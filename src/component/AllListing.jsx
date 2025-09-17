import { Building2, MapPin } from 'lucide-react';
import React, { useState } from 'react'
import AddNew from './AddNew';

const ListingRoad = ({ data, handleInputChange, handleDataObj, label, addNew, handleOnNewData, columnName, nextStep, formData, handleBusinessId, addNewWindow, handleOnNewWindow }) => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState(false)
    const filterRes = data.filter(item => {
        return item[columnName].toLowerCase().includes(search.toLowerCase())
    }
    );

    return (
        <>
            {addNewWindow ? <AddNew label={addNew} handleOnNewWindow={handleOnNewWindow} handleOnNewData={handleOnNewData} /> :
                <div className="space-y-6">
                    <div className="text-center mb-8">
                        <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <div className="mb-4">
                            <h2 className="text-3xl font-bold text-gray-900">Choose your {addNew}</h2>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {label}
                        </label>

                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />


                        {/* Road Buttons - Scrollable Container */}
                        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2 ">
                            {filterRes.length > 0 ? filterRes.map((item) => (
                                <label
                                    key={item[columnName]}
                                    className={`p-4 block cursor-pointer text-left border rounded-lg transition-all ${selected === item[columnName]

                                        ? "border-blue-500 bg-blue-50 text-blue-700"
                                        : "border-gray-300 hover:border-blue-300"
                                        }`}
                                >
                                    {/* Hidden Radio Input */}
                                    <input
                                        type="radio"
                                        name="road"
                                        value={item[columnName]}
                                        checked={selected === item[columnName]}
                                        onChange={(e) => {
                                            setSelected(item[columnName])
                                            handleInputChange(formData, e.target.value);
                                            handleBusinessId(formData, item.uni_id)
                                            if (nextStep) {
                                                nextStep.length > 1 ? nextStep.map((next) => {
                                                    handleDataObj(next, item[next])
                                                }) :
                                                    handleDataObj(nextStep[0], item[nextStep[0]])
                                            }
                                        }}
                                        className="hidden"
                                    />
                                    {item[columnName]}
                                </label>
                            )) : <p>{search} Not Found</p>}

                        </div>

                        {/* Add New Road Button */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <button
                                onClick={handleOnNewWindow}
                                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
                                + Add New {(addNew)}
                            </button>
                        </div>
                    </div>
                </div>
            }

        </>

    )
}

export default ListingRoad