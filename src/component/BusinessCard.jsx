import {
  MapPin,
  Clock,
  Star,
  Building2,
  Navigation,
  Tag,
  Filter,
  Search,
} from "lucide-react";
import { useContext } from "react";
import { DirectoryContext } from "../Context";
const BusinessCard = ({ business }) => {
  const { formatTime } = useContext(DirectoryContext);
  const [shift1, shift2] = business.times;

  const businessDetail = {
    name: business.u_business_name,
    category: business.u_business_category_ref?.name,
    subCategory: business.u_subcategory_id?.name,
    categoryType: business.u_category_type_ref?.name,
    establishment: business.u_establishment_id?.name,
    class: business.u_business_class_id?.name,
    firstShiftFrom: (shift1 && shift1.u_time_from) || "",
    firstShiftTo: (shift1 && shift1.u_time_to) || "",
    secondShiftFrom: (shift2 && shift2.u_time_from) || "",
    secondShiftTo: (shift2 && shift2.u_time_to) || "",
    location: [
      business.u_sub_area_id?.name,
      business.u_area_id?.name,
      business.u_sub_road_id?.name,
      business.u_road_id?.name,
      business.u_business_city_id?.name,
    ]
      .filter(Boolean)
      .join(", "),
  };

  // Get business class color
  const getClassColor = (businessClass) => {
    switch (businessClass?.toLowerCase()) {
      case "premium":
        return "bg-yellow-100 text-yellow-800";
      case "standard":
        return "bg-blue-100 text-blue-800";
      case "delux":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-blue-300 flex flex-col justify-between ">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
            {businessDetail.name}
          </h3>
          <div className="flex items-start text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
            <span className="text-sm line-clamp-2">
              {businessDetail.location}
            </span>
          </div>
        </div>

        {businessDetail.class && (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ml-2 flex-shrink-0 ${getClassColor(
              businessDetail.class
            )}`}
          >
            {businessDetail.class}
          </span>
        )}
      </div>

      {/* Category Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {businessDetail.category && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Tag className="w-3 h-3 mr-1" />
            {businessDetail.category}
          </span>
        )}

        {businessDetail.subCategory && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {businessDetail.subCategory}
          </span>
        )}

        {businessDetail.categoryType && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            {businessDetail.categoryType}
          </span>
        )}
      </div>

      {/* Business Details */}
      <div className="space-y-2 mb-4">
        {businessDetail.establishment && (
          <div className="flex items-center text-sm text-gray-600">
            <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{businessDetail.establishment}</span>
          </div>
        )}

        {/* SHIFT 1 */}
        {businessDetail.firstShiftFrom && businessDetail.firstShiftTo && (
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            {businessDetail.secondShiftFrom &&
            businessDetail.secondShiftFrom ? (
              <p className="mr-2">Shift-1:</p>
            ) : (
              <p className="mr-2">Timing</p>
            )}

            <span>
              {formatTime(businessDetail.firstShiftFrom)} -{" "}
              {formatTime(businessDetail.firstShiftTo)}
            </span>
          </div>
        )}

        {/* SHIFT 3 */}
        {businessDetail.secondShiftFrom && businessDetail.secondShiftFrom && (
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <p className="mr-2">Shift-2:</p>
            <span>
              {formatTime(businessDetail.secondShiftFrom)} -{" "}
              {formatTime(businessDetail.secondShiftTo)}
            </span>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;
