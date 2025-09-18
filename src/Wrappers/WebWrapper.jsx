import React, { useState } from 'react'
import { DirectoryContext } from '../Context';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import New from '../component/ListingMessage'
import ListingMessage from '../component/ListingMessage';

const WebWrapper = () => {
    const [listingSuccess, setListtingSuccess] = useState(true)
    const navigate = useNavigate()

    const [token, setToken] = useState("        eyJhbGciOiJIUzUxMiJ9.eyJhcHAiOiJ7XCJtYWluX2FwcFwiOntcIm5hbWVcIjpcImF1dG9wb3J0YWxcIiwgXCJhcHBfY29kZVwiOlwiYXV0b1wiLCBcImFwcF9hZGRyZXNzXCI6XCJodHRwOi8vbG9jYWxob3N0OjgwODNcIn0sXCJzZWNvbmRhcnlfYXBwXCI6W119Iiwic3ViIjoiaGlmenVyIiwiZXhwIjoxNzU4NjA3NjYzLCJpYXQiOjE3NTgwMDI4NjN9.Y5dqhD0VSRZvquQq - 78oLOvIc7Rk - 27Lq5_saMFf8fg7w1x249lYcfxnDsgYc8D_LZqYxSz0TfPyX4ZZ85OLWg")

    // COMPLETE LOGIC
    // Storing Listing Data
    const [formData, setFormData] = useState({
        businessName: '',
        city: '',
        road: '',
        subRoad: '',
        area: '',
        subArea: '',
        category: '',
        subCategory: '',
        categoryType: '',
        class: '',
        establishment: '',
        timeFrom: '',
        timeTo: '',
    });

    const [dataObj, setDataObj] = useState({
        cityList: [],
        cityData: '',
        roads: '',
        areas: '',
        subAreas: [],
        subRoads: [],
        category: [],
        subCategories: [],
        categoryTypes: [],
        class: [],
        establishment: [],
    })

    const [dataId, setDataId] = useState({
        businessName: '',
        city: '',
        road: '',
        subRoad: '',
        area: '',
        subArea: '',
        category: '',
        subCategory: '',
        categoryType: '',
        class: '',
        establishment: '',
        timeFrom: '',
        timeTo: '',
    });
    const [addNewWindow, setAddnNewWindow] = useState(false)
    const [newDataAdded, setNewDataAdded] = useState(false)

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

    };


    // Storing All Data
    const handleDataObj = (field, value) => {
        setDataObj(prev => ({
            ...prev,
            [field]: value
        }))
    };

    // Storing UNI_IDs
    const handleBusinessId = (field, value) => {
        setDataId(prev => ({
            ...prev,
            [field]: value
        }))
    }


    const handleOnNewWindow = () => {
        setAddnNewWindow(!addNewWindow)
    }

    // __________-NEW_DATA-__________
    const handleOnNewData = (value, type) => {
        const newData = {
            ...dataId,
            name: value,
            type: type,
        }
        console.log("newData === ", newData)
        axios.post('http://localhost:8083/api/add/new', newData,
            {
                headers: {
                    "application": "dir",
                    authorization: "Bearer " + token
                }
            }
        ).then((res) => {
            if (res.data.message === "success") {
                console.log("in the success")
                setNewDataAdded(!newDataAdded);
            }
        })
            .catch((e) => console.log(e))
    }

    // Not in use
    const [filters, setFilters] = useState({
        city: "",
        category: "",
        subCategory: "",
    });


    return (
        <DirectoryContext.Provider value={{
            token, setToken,
            listingSuccess, setListtingSuccess,
            navigate,
            formData, handleInputChange,
            dataObj, handleDataObj,
            handleBusinessId, dataId, handleOnNewWindow, addNewWindow, handleOnNewData

        }}>
            <Header />
            <Outlet />
            <ListingMessage />
            {/* {filterActive && <FilterPage />} */}
        </DirectoryContext.Provider>
    );
}

export default WebWrapper