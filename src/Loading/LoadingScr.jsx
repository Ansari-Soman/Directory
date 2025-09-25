
import React from "react";
import { Loader2 } from "lucide-react";

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-8 px-4">
      <div className="max-w-lg mx-auto w-full">
        <div className="flex justify-center items-center">
          {/* Loading Animation */}
          <div className="mb-8 ">
            <div className="flex items-center justify-center mb-6 ">
              <Loader2 className="w-[100px] h-[100px] text-blue-600 animate-spin" />
            </div>

            <h2 className="text-xl text-gray-700 font-medium w-[200px]  text-center ">{message}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;