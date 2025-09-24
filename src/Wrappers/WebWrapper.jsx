import React, { useState } from 'react'
import { DirectoryContext } from '../Context';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import New from '../component/ListingMessage'
import ListingMessage from '../component/ListingMessage';
import axios from 'axios';
import LoadingScreen from '../component/LoadingScr';

const WebWrapper = () => {
    const [listingSuccess, setListtingSuccess] = useState(true)
    const navigate = useNavigate()

    const [token, setToken] = useState("        eyJhbGciOiJIUzUxMiJ9.eyJhcHAiOiJ7XCJtYWluX2FwcFwiOntcIm5hbWVcIjpcImF1dG9wb3J0YWxcIiwgXCJhcHBfY29kZVwiOlwiYXV0b1wiLCBcImFwcF9hZGRyZXNzXCI6XCJodHRwOi8vbG9jYWxob3N0OjgwODNcIn0sXCJzZWNvbmRhcnlfYXBwXCI6W119Iiwic3ViIjoiaGlmenVyIiwiZXhwIjoxNzU4NjA3NjYzLCJpYXQiOjE3NTgwMDI4NjN9.Y5dqhD0VSRZvquQq - 78oLOvIc7Rk - 27Lq5_saMFf8fg7w1x249lYcfxnDsgYc8D_LZqYxSz0TfPyX4ZZ85OLWg")

    // COMPLETE LOGIC
    // Storing Listing Data
    const [formData, setFormData] = useState({
      //   businessName: "asd",
      //   city: "",
      //   road: "",
      //   subRoad: "",
      //   area: "",
      //   subArea: "",
      //   category: "",
      //   subCategory: "",
      //   categoryType: "",
      //   class: "",
      //   establishment: "",
      //   timeFrom: "",
      //   timeTo: "",

      area: "Gaibi Nagar",
      businessName: "asd",
      category: "Clothing",
      categoryType: "Shirts",
      city: "Bhiwandi",
      class: "Standard",
      establishment: "StoreFront",
      road: "Maulana Azaad road",
      subArea: "Gulzar nagar",
      subCategory: "Men",
      subRoad: "Noorani masjid road",
      timeFrom: "15:00",
      timeTo: "14:00",
    });

    const [dataObj, setDataObj] = useState({
      cityList: [],
      cityData: "",
      roads: [],
      areas: [],
      subAreas: [],
      subRoads: [],
      category: [],
      subCategories: [],
      categoryTypes: [],
      class: [],
      establishment: [],
    });

    const [dataId, setDataId] = useState({
      // businessName: '',
      // city: '',
      // road: '',
      // subRoad: '',
      // area: '',
      // subArea: '',
      // category: '',
      // subCategory: '',
      // categoryType: '',
      // class: '',
      // establishment: '',
      // timeFrom: '',
      // timeTo: '',

      area: "b69273ef-43c8-4994-8abc-f0b2207eea41",
      businessName: "test",
      category: "7e22bfc8-7304-46ef-a80c-56e0058b53dc",
      categoryType: "ce83b3ca-a766-409a-b5a6-e7552932d150",
      city: "4e747aad-80f1-44f1-a005-fa17b05e09b3",
      class: "bb05b717-a6fc-4496-8f76-1dd9ae04ba92",
      establishment: "599aea50-0223-4fdf-976c-7b4f59254595",
      road: "d4499839-0781-4a72-a1e8-26e201943bca",
      subArea: "20265f0d-e23a-4381-bb63-ed603cbfbf83",
      subCategory: "5b98a187-2bee-4d5e-bff7-6311bfbdcf51",
      subRoad: "f0e597f1-e21e-42ff-aa83-b73fe0da269b",
      timeFrom: "17:00",
      timeTo: "18:00",
    });

    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [addNewWindow, setAddnNewWindow] = useState(false)
    const [newDataAdded, setNewDataAdded] = useState(false)

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

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

    const resetFormData = () => {
        setFormData({
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

        setDataId({
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
    };

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
            dataObj,
            handleBusinessId, dataId, handleOnNewWindow, addNewWindow, handleOnNewData, setDataObj, isInitialLoading, setIsInitialLoading, resetFormData, newDataAdded

        }}>
            <Header />
            <Outlet />
        </DirectoryContext.Provider>
    );
}

export default WebWrapper