const BusinessCard = ({ business }) => {
  // Format time display
  const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Get business class color
  const getClassColor = (businessClass) => {
    switch (businessClass?.toLowerCase()) {
      case "premium":
        return "bg-yellow-100 text-yellow-800";
      case "standard":
        return "bg-blue-100 text-blue-800";
      case "basic":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Build location string
  const getLocation = () => {
    const parts = [
      business.subArea,
      business.area,
      business.subRoad,
      business.road,
      business.city,
    ].filter(Boolean);
    return parts.join(", ");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-blue-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
            {business.businessName}
          </h3>
          <div className="flex items-start text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
            <span className="text-sm line-clamp-2">{getLocation()}</span>
          </div>
        </div>

        {business.businessClass && (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ml-2 flex-shrink-0 ${getClassColor(
              business.businessClass
            )}`}
          >
            {business.businessClass}
          </span>
        )}
      </div>

      {/* Category Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <Tag className="w-3 h-3 mr-1" />
          {business.category}
        </span>

        {business.subCategory && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {business.subCategory}
          </span>
        )}

        {business.categoryType && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            {business.categoryType}
          </span>
        )}
      </div>

      {/* Business Details */}
      <div className="space-y-2 mb-4">
        {business.establishment && (
          <div className="flex items-center text-sm text-gray-600">
            <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{business.establishment}</span>
          </div>
        )}

        {business.timeFrom && business.timeTo && (
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>
              {formatTime(business.timeFrom)} - {formatTime(business.timeTo)}
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
