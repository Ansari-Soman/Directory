import { useParams } from "react-router-dom";
import { businesses } from "./data";
import { useContext } from "react";
import { DirectoryContext } from "../Context";

const BusinessList = () => {
    // const { category } = useParams(); // get category from URL
    // const category = "Food"
    // const { selectedCity } = useContext(DirectoryContext)
    // let businessList;
    // if (selectedCity) {
    //      businessList = businesses.filter(
    //          (biz) => biz.city.toLowerCase() === selectedCity.toLowerCase() 
    //     );
    // } else {
    //      businessList = businesses
    // }
    const { businessList } = useContext(DirectoryContext)
    return (
        <div className="p-4 container mx-auto">
            {/* <h2 className="text-xl font-bold mb-4">{category}</h2> */}

            {businessList.length === 0 ? (
                <p>No businesses found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {businessList.map((biz, idx) => (
                        <div
                            key={idx}
                            className="border rounded-lg shadow-md p-4 bg-white"
                        >
                            <img
                                src={biz.img}
                                alt={biz.name}
                                className="w-full h-40 object-cover rounded"
                            />
                            <h3 className="text-lg font-semibold mt-2">{biz.name}</h3>
                            <p>{biz.city} - {biz.area}</p>
                            <p className="text-sm text-gray-500">{biz.categoryType}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BusinessList;
