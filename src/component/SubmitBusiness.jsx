import React from "react";

const SubmitBusiness = ({ formData }) => {
    const fields = [
        { label: "Name", value: formData.businessName },
        { label: "City", value: formData.city },
        { label: "Road", value: formData.road },
        { label: "Sub Road", value: formData.subRoad },
        { label: "Area", value: formData.area },
        { label: "Sub Area", value: formData.subArea },
        { label: "Category", value: formData.category },
        { label: "Sub Category", value: formData.subCategory },
        { label: "Category Type", value: formData.categoryType },
        { label: "Business Class", value: formData.class },
        { label: "Establishment", value: formData.establishment },
        { label: "Time", value: formData.time }
    ];

    return (
        <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Review Business Details
            </h2>
            <div className="grid grid-cols-1  gap-4">
                {fields.map((field, idx) => (
                    <div
                        key={idx}
                        className="flex justify-between items-center border-b border-gray-100 pb-2"
                    >
                        <span className="text-gray-600 font-medium">{field.label}:</span>
                        <span className="text-gray-800">{field.value || "-"}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubmitBusiness;
