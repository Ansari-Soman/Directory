import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Building2, Phone, Mail, Clock, Camera, Kanban } from 'lucide-react';
import axios from 'axios';
import ListingBusiName from './ListingBusiName';
import ListingSubArea from './ListingSubArea';
import ListingArea from './ListingArea'
import ListingRoad from './ListingRoad';
import AllListing from './AllListing'

const BusinessListingForm = () => {
  const keys = ['roads', 'areas', 'subRoads', 'subAreas',]
  const col = ['u_city_name', 'u_road_name', 'u_sub_road_name', 'u_area_name', 'u_sub_area_name_id']

  const [currentStep, setCurrentStep] = useState(1);

  const [dataObj, setDataObj] = useState({
    cityList: [],
    cityData: {},
    roads: [],
    areas: [],
    subAreas: [],
    roads: [],
    subRoads: []
  })


  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    Road: '',
    SubRoad: '',
    Area: '',
    SubArea: '',
  });

  // Fetching City list
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get('http://localhost:8083/api/city/list', {
          headers: { "application": "dir" }
        });
        handleDataObj("cityList", res.data.record);
      } catch (error) {
        console.log(error);
        setError('Failed to load cities');
      } finally {
      }
    };

    fetchCities();
  }, []);


  // Fethcing City Data
  useEffect(() => {
    const fetchCityData = async () => {
      if (!formData.city) return;
      try {
        const res = await axios.get(`http://localhost:8083/api/citydata/${formData.city}`, {
          headers: { "application": "dir" }
        });
        handleDataObj('cityData', res.data.record[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchCityData()
  }, [formData.city])


  const handleDataObj = (field, value) => {
    setDataObj((prev => (
      {
        ...prev,
        [field]: value
      }
    )))
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };


  useEffect(() => {
    handleDataObj('roads', dataObj.cityData.roads)
  }, [dataObj.cityData])




  useEffect(() => {
    // console.log("fooorrramm data === ", formData)
    console.log("data === ", dataObj)
  }, [formData])





  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // const handleSkipStep = (field, value) => {
  //   handleInputChange(field, value);
  //   nextStep();
  // }




  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return <ListingBusiName
        formData={formData}
        handleInputChange={handleInputChange}
        cities={dataObj.cityList}
      />;


      case 2: return <AllListing
        label={`Roads in ${formData.city}`}
        addNew={'Road'}
        data={dataObj.roads}
        handleInputChange={handleInputChange}
        handleDataObj={handleDataObj}
        columnName={'u_road_name'}
        nextStep={['areas', 'subRoads']}
      />

      case 3: return <AllListing
        label={`Sub roads in ${formData.Road}`}
        addNew={'SubRoad'}
        data={dataObj.subRoads}
        columnName={'u_sub_road_name'}
        handleInputChange={handleInputChange}
        handleDataObj={handleDataObj}
        nextStep={['areas']}
      />

      case 4: return <AllListing
        label={`Areas in ${formData.city}`}
        addNew={'Area'}
        data={dataObj.areas}
        columnName={'u_area_name'}
        handleDataObj={handleDataObj}
        handleInputChange={handleInputChange}
        nextStep={['subAreas']}
      />


      default: return 0;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.businessName && formData.city;
      case 2: return formData.Road;
      case 3: return formData.SubRoad;
      case 4: return formData.Area;
      case 5: return formData.SubArea
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 ">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-600">Step {currentStep} of 6</span>
              <span className="text-sm text-gray-500">{Math.round((currentStep / 6) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(currentStep / 6) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="min-h-[500px]">
            {renderCurrentStep()}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            {currentStep === 6 ? (
              <button
                className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all"
                onClick={() => alert('Business listing submitted! (This is just a demo)')}
              >
                Submit Listing
              </button>
            ) : (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${isStepValid()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>

        <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">Need help? Contact our support team</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessListingForm;