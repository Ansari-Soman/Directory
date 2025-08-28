import React, { useContext, useEffect, useState } from 'react'
import BusinessList from './BusinessList.jsx'
import { cities, businessCategory, businesses } from './data'
import { SelectInput } from './SelectInput.jsx'
import { DirectoryContext } from '../Context.jsx'

const FilterPage = () => {
    const { filterActive, setFilterActive } = useContext(DirectoryContext)
    const [filters, setFilters] = useState({
        city: "",
        category: "",
        subCategory: ""
    })

    const handleFilterChange = (key, value) => {
        if (key === "category") {
            const found = businessCategory.find((bc) => bc.name === value);

            if (found) {
                const subCategory = found.subCategory.map(item => item.name)
                setSubCateList(subCategory)
            } else {
                setSubCateList([])
                setFilters({ ...filters, [key]: value })

            }
        }

        setFilters({ ...filters, [key]: value })


    }


    const [businessList, setBusinessList] = useState([])
    const [subCateList, setSubCateList] = useState([])




    // useEffect(() => {
    const applyFilter = () => {
        if (filters.city) {
            let result = businesses;
            if (filters.city) {
                result = result.filter(biz => biz.city === filters.city)
            }
            if (filters.category) {
                result = result.filter(biz => biz.category === filters.category)
            }
            if (filters.subCategory) {
                result = result.filter(biz => biz.subCategory === filters.subCategory)
            }
            // if (filters.area) {
            //     result = result.filter(biz => biz.area === filters.area)
            // } 
            setBusinessList(result)
        } else {
            setBusinessList([])
        }

    }
    // }, [filters])

    return <>
        (
        <div className="fixed inset-0  flex items-center justify-center backdrop-blur-lg  bg-opacity-50 z-50">
            {/* Modal Container */}
            <div className="relative bg-white w-[90%] max-w-lg rounded-2xl shadow-2xl p-6 animate-fadeIn">

                {/* Close Button */}
                <button
                    onClick={() => setFilterActive(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
                >
                    ✕
                </button>

                {/* Title */}
                <h1 className="font-bold text-2xl text-center mb-6">City Directory Search</h1>

                {/* Inputs */}
                <div className="grid gap-4">
                    <SelectInput
                        label="City"
                        name="city"
                        options={cities}
                        value={filters.city}
                        onChange={handleFilterChange}
                    />

                    <SelectInput
                        label="Category"
                        name="category"
                        options={businessCategory}
                        value={filters.category}
                        onChange={handleFilterChange}
                        disable={!filters.city}
                    />

                    {filters.category && (
                        <SelectInput
                            label="Sub Category"
                            name="subCategory"
                            options={subCateList}
                            value={filters.subCategory}
                            disable={!filters.category}
                            onChange={handleFilterChange}
                        />
                    )}
                </div>

                {/* Apply Button */}
                <button
                    onClick={applyFilter}
                    className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                    Apply Filter
                </button>
            </div>
        </div>
        )

    </>

}

export default FilterPage
