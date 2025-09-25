import React, { useContext } from 'react';
import { CheckCircle, Building2, Home } from 'lucide-react';
import { DirectoryContext } from '../Context';

const ListingMessage = ({ businessName = "Your Business", onNewListing, onGoHome }) => {
  const {listingSuccess, navigate, setListtingSuccess} = useContext(DirectoryContext)
  return (
    <>
    { listingSuccess && 
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-blue-600" />
              </div>

              {/* Success Message */}
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Business Listed Successfully!
              </h1>

              <p className="text-gray-600 mb-6">
                {businessName} has been added to our directory and will be live
                shortly.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Add another business (optional) */}
                {/* <button
              onClick={onNewListing}
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Add Another Business
            </button> */}

                <button
                  onClick={() => {
                    setListtingSuccess(false)
                    navigate('/')}
                  }
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-all cursor-pointer"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go to Homepage
                </button>
              </div>
            </div>

            {/* Footer */}
            <p className="text-sm text-gray-500 mt-6">
              Thank you for listing with us!
            </p>
          </div>
        </div>
      }
    </>
  );
};

export default ListingMessage;