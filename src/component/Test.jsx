import React from 'react'
import { useParams } from 'react-router-dom';

const Test = () => {
    const { test } = useParams(); // get category from URL
    // const category = "Food"
    console.log("use paramas",test)
  return (
    <div>Test</div>
  )
}

export default Test