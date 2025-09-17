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

        }}>
            <Header />
            <Outlet />
            <ListingMessage />
            {/* {filterActive && <FilterPage />} */}
        </DirectoryContext.Provider>
    );
}

export default WebWrapper