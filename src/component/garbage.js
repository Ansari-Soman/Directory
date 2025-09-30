







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
                        key={subArea.u_sub_area_name}
                        onClick={() => handleInputChange('subArea', subArea.u_sub_area_name)}
                        className={`p-4 text-left border rounded-lg transition-all ${formData.subArea === subArea.u_sub_area_name
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-blue-300'
                            }`}
                    >
                        {subArea.u_sub_area_name}
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
                        onClick={() => {
                            handleInputChange('subArea', searchSubArea);
                            setSearchSubArea('');
                        }}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Use "{searchSubArea}" as new sub area
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





// logic for next step

// // Fetching Road
// useEffect(() => {
//   if (!dataObj.cityData) return;
//   handleDataObj('roads', dataObj.cityData.roads)
// }, [dataObj.cityData])

// // Fetching Area and SUb Road
// useEffect(() => {
//   if (!formData.road) return;
//   const [selectedRoad] = dataObj.cityData.roads.filter((road) => road.u_road_name === formData.road);
//   handleDataObj('subRoads', selectedRoad.subRoads)
//   handleDataObj('areas', selectedRoad.areas)
// }, [formData.road, dataObj.cityData])

// // Fetching Sub Area
// useEffect(() => {
//   if (!formData.area) return;
//   const [selectedArea] = dataObj.areas.filter((area) => area.u_area_name === formData.area)
//   handleDataObj('subAreas', selectedArea.subAreas)
//   console.log("slected area", selectedArea)
//   console.log("dataObj.areas", dataObj.areas)
// }, [formData.area, dataObj.areas])

// // Fetching Sub category
// useEffect(() => {
//   if (!formData.category) return;
//   const [selectedCategory] = dataObj.category.filter((cate) => cate.u_business_category === formData.category)
//   handleDataObj('subCategories', selectedCategory.subCategories)
//   console.log("slected category", selectedCategory)
//   console.log("dataObj category", dataObj.category)
// }, [formData.category, dataObj.category])

// // Fetching  category type
// useEffect(() => {
//   if (!formData.subCategory) return;
//   const [selectedsubCategory] = dataObj.subCategories.filter((cate) => cate.u_business_sub_category === formData.subCategory)
//   handleDataObj('categoryTypes', selectedsubCategory.categoryTypes)
//   // console.log("slected category", selectedCategory)
//   // console.log("dataObj category", dataObj.category)
// }, [formData.subCategory, dataObj.subCategory])


// Remove all the separate useEffects and replace with:

                {/* __________-TIMING-________ */}

        //   <div className="mb-8">
        //     <label className="block text-sm font-medium text-gray-700 mb-2">
        //       Business Time
        //     </label>

        //     <div className="grid grid-cols-2 gap-4">
        //       {/* From Time - Dropdown */}
        //       <div>
        //         <label className="block text-xs font-medium text-gray-600 mb-1">
        //           From
        //         </label>
        //         <select
        //           value={formData.timeFrom}
        //           onChange={(e) => {
        //             handleBusinessId("timeFrom", e.target.value);
        //             handleInputChange("timeFrom", e.target.value);
        //           }}
        //           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        //         >
        //           <option value="">Select start time</option>
        //           {timeOptions.map((time) => (
        //             <option key={time.value} value={time.value}>
        //               {time.display}
        //             </option>
        //           ))}
        //         </select>
        //       </div>

        //       {/* To Time - Dropdown */}
        //       <div>
        //         <label className="block text-xs font-medium text-gray-600 mb-1">
        //           To
        //         </label>
        //         <select
        //           value={formData.timeTo}
        //           onChange={(e) => {
        //             handleBusinessId("timeTo", e.target.value);
        //             handleInputChange("timeTo", e.target.value);
        //           }}
        //           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        //         >
        //           <option value="">Select end time</option>
        //           {timeOptions.map((time) => (
        //             <option key={time.value} value={time.value}>
        //               {time.display}
        //             </option>
        //           ))}
        //         </select>
        //       </div>
        //     </div>
        //   </div>