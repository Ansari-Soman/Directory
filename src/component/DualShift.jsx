import React, { useContext } from "react";
import { DirectoryContext } from "../Context";

const DualShift = ({ timeOptions }) => {
  const { handleBusinessId, handleInputChange, formData } =
    useContext(DirectoryContext);

  return (
    <div className="space-y-4">
      {/* First Shift */}
      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
        <p className="text-sm font-medium text-gray-700 mb-3">First Shift</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              From
            </label>
            <select
              value={formData.firstShiftFrom}
              onChange={(e) => {
                handleInputChange("firstShiftFrom", e.target.value);
                handleBusinessId("firstShiftFrom", e.target.value);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Select start time</option>
              {timeOptions.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.display}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              To
            </label>
            <select
              value={formData.firstShiftTo}
              onChange={(e) => {
                handleInputChange("firstShiftTo", e.target.value);
                handleBusinessId("firstShiftTo", e.target.value);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Select end time</option>
              {timeOptions.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.display}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Second Shift */}
      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
        <p className="text-sm font-medium text-gray-700 mb-3">Second Shift</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              From
            </label>

            <select
              value={formData.secondShiftFrom}
              onChange={(e) => {
                handleInputChange("secondShiftFrom", e.target.value);
                handleBusinessId("secondShiftFrom", e.target.value);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Select start time</option>
              {timeOptions.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.display}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              To
            </label>
            <select
              value={formData.secondShiftTo}
              onChange={(e) => {
                handleInputChange("secondShiftTo", e.target.value);
                handleBusinessId("secondShiftTo", e.target.value);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Select end time</option>
              {timeOptions.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.display}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualShift;
