import React, { useContext, useEffect, useState } from 'react'
import BusinessList from '../component/BusinessList.jsx'
import { cities, businessCategory, businesses } from './data'
import { SelectInput } from './SelectInput.jsx'
import { DirectoryContext } from '../Context.jsx'
import { useNavigate } from 'react-router-dom'

const FilterPage = () => {
    const { filters, setFilters, setFilterActive, setBusinessList } = useContext(DirectoryContext)
    const [subCateList, setSubCateList] = useState([])
    const navigate = useNavigate();


    // 🔹 Updating filter value
    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    // 🔹 Update subcategory list whenever category changes
    useEffect(() => {
        if (filters.category) {
            const found = businessCategory.find(bc => bc.name === filters.category)
            if (found) {
                setSubCateList(found.subCategory.map(item => item.name))
            } else {
                setSubCateList([])
            }
        } else {
            setSubCateList([])
        }
    }, [filters.category])




    // 🔹Filters logic
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
            setBusinessList(result)
            navigate('/shops')
            setFilterActive(false)
        } else {
            setBusinessList([])
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-opacity-50 z-50">
            {/* Modal Container */}
            <div className="relative bg-white w-[1000px] rounded-2xl shadow-2xl p-6 animate-fadeIn">

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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
}

export default FilterPage
