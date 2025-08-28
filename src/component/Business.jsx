import React from 'react'

const Business = ({ business }) => {
    return (
        <div className='h-[150px] w-[150px] p-[20px] bg-gray-400 rounded text-white flex items-center justify-center'>
            <h1>{business.name}</h1>
        </div>
    )
}

export default Business
