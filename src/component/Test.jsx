import React from "react";

const SubmitBusiness = () => {
  const formData = {
    businessName: "sdfds",
    category: "Healthcare",
    subCategory: "Specialty Clinics",
    categoryType: "Dental Clinic",
    establishment: "StoreFront",
    class: "Standard",

    city: "Bhiwandi",
    area: "Gaibi Nagar",
    subArea: "",
    road: "Maulana Azaad road",
    subRoad: "",

    firstShiftFrom: "09:00",
    firstShiftTo: "13:00",
    secondShiftFrom: "17:00",
    // secondShiftFrom: "",
    secondShiftTo: "22:00",
    // secondShiftTo: "",
  };

  // Helper function to format time
  const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const shifts = () => {
    const hasFirstShift = formData.firstShiftFrom && formData.firstShiftTo;
    const hasSecondShift = formData.secondShiftFrom && formData.secondShiftTo;
    if (hasFirstShift && hasSecondShift) {
      return [
        {
          label: "Shift 1 Timing",
          value: `${formatTime(formData.firstShiftFrom)} - ${formatTime(
            formData.firstShiftTo
          )}`,
        },
        {
          label: "Shift 2 Timing",
          value: `${formatTime(formData.secondShiftFrom)} - ${formatTime(
            formData.secondShiftTo
          )}`,
        },
      ];
    } else if (hasFirstShift) {
      return [
        {
          label: "Timing",
          value: `${formatTime(formData.firstShiftFrom)} - ${formatTime(
            formData.firstShiftTo
          )}`,
        },
      ];
    }
  };

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
  ];

  let [shift1, shift2] = shifts();
  shift1 && fields.push(shift1);
  shift2 && fields.push(shift2);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Review Business Details
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {fields.map((field, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-between items-center border-b border-gray-100 pb-2"
            >
              <span className="text-gray-600 font-medium">{field.label}:</span>
              <span className="text-gray-800 text-right">
                {field.value || "-"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubmitBusiness;
