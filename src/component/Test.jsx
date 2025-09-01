import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Test = () => {
  const location = useLocation()
  console.log("in loca >> ",location)
    const { test } = useParams(); // get category from URL
    // const category = "Food"
  return (
    <div>Test</div>
  )
}

export default Test