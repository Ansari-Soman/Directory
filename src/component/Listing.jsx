import React, { useContext, useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import axios from 'axios';
import ListingBusiName from './ListingBusinessName';
import AllListing from './AllListing'
import SubmitBusiness from './SubmitBusiness';
import { DirectoryContext } from '../Context';
import SuccessPage from './ListingMessage';
import { data } from 'react-router-dom';

const BusinessListingForm = () => {
  const { token, setListtingSuccess, navigate, formData, dataObj, handleDataObj, handleBusinessId, dataId, newDataAdded } = useContext(DirectoryContext)
  const [currentStep, setCurrentStep] = useState(1);
  const [isSkip, setIsSkip] = useState(false)

  // Fetching City list, Category, Business Class and Establishment DATA
  useEffect(() => {
    axios.get('http://localhost:8083/api/city/list', { headers: { "application": "dir" } }).
      then((res) => handleDataObj("cityList", res.data.record)).
      catch((e) => console.log(e))

    axios.get('http://localhost:8083/api/business/category', { headers: { "application": "dir" } }).
      then((res) => handleDataObj('category', res.data.record))
      .catch((e) => console.log("error"))

    axios.get('http://localhost:8083/api/class/list', { headers: { "application": "dir" } })
      .then((res) => handleDataObj("class", res.data.record))
      .catch((e) => console.log(e))

    axios.get('http://localhost:8083/api/establishment/list', { headers: { "application": "dir" } })
      .then((res) => handleDataObj("establishment", res.data.record))
      .catch((e) => console.log(e))
  }, []);


  // Fethcing City Data
  useEffect(() => {
    if (!formData.city) return;
    axios.get(`http://localhost:8083/api/citydata/${formData.city}`, { headers: { "application": "dir" } })
      .then((res) => handleDataObj('cityData', res.data.record[0]))
      .catch((e) => console.log(e))
    const [city] = dataObj.cityList.filter((item) => item.u_city_name === formData.city)
    handleBusinessId('city', city.uni_id)
  }, [formData.city, newDataAdded])

  // Fetching Road
  useEffect(() => {
    if (!dataObj.cityData) return;
    handleDataObj('roads', dataObj.cityData.roads)
  }, [dataObj.cityData])

  // Fetching Area and SUb Road
  useEffect(() => {
    if (!formData.road) return;
    const [selectedRoad] = dataObj.cityData.roads.filter((road) => road.u_road_name === formData.road);
    handleDataObj('subRoads', selectedRoad.subRoads)
    handleDataObj('areas', selectedRoad.areas)
  }, [formData.road, dataObj.cityData])

  // Fetching Sub Area
  useEffect(() => {
    if (!formData.area) return;
    const [selectedArea] = dataObj.areas.filter((area) => area.u_area_name === formData.area)
    handleDataObj('subAreas', selectedArea.subAreas)
    console.log("slected area", selectedArea)
    console.log("dataObj.areas", dataObj.areas)
  }, [formData.area, dataObj.areas])



  // Setup For SKIP button
  useEffect(() => {
    if (currentStep === 3 || currentStep === 5 || currentStep === 8) {
      setIsSkip(true)
    } else {
      setIsSkip(false)
    }
  }, [currentStep])


  const nextStep = () => {
    if (currentStep < 11) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };





  // __________-SUBMIT-__________
  const handleOnSubmit = () => {
    axios.post('http://localhost:8083/api/listing/business',
      dataId,
      {
        headers: {
          "application": "dir",
          authorization: "Bearer " + token
        }
      }).
      then((res) => {
        console.log("SuccessFull", res)
        setListtingSuccess(true)
        navigate('/listing/success')
      })
      .catch((e) => console.log("faild", e))
  }


  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return <ListingBusiName
        cities={dataObj.cityList}
      />;


      case 2: return <AllListing
        label={`Roads in ${formData.city}`}
        addNew={'Road'}
        fieldName={'road'}
        data={dataObj.roads}
        newDataAccess='Yes'
        columnName={'u_road_name'}
      />

      case 3: return <AllListing
        label={`Sub roads in ${formData.road}`}
        addNew={'Sub Road'}
        fieldName={'subRoad'}
        data={dataObj.subRoads}
        columnName={'u_sub_road_name'}
        newDataAccess='Yes'
      />


      case 4: return <AllListing
        label={`Areas in ${formData.city}`}
        addNew={'Area'}
        fieldName={'area'}
        data={dataObj.areas}
        columnName={'u_area_name'}
        newDataAccess='Yes'
      />


      case 5: return <AllListing
        label={`Sub Areas in  ${formData.area}`}
        addNew={'Sub Area'}
        fieldName={'subArea'}
        newDataAccess='Yes'
        data={dataObj.subAreas}
        columnName={'u_sub_area_name_id'}
      />

      case 6: return <AllListing
        label={'Categories'}
        addNew={"Category"}
        newDataAccess='Yes'
        fieldName={'category'}
        data={dataObj.category}
        columnName={"u_business_category"}
      />

      case 7: return <AllListing
        label={`Sub Category in ${formData.category}`}
        addNew={'Sub Category'}
        fieldName={'subCategory'}
        data={dataObj.subCategories}
        columnName={"u_business_sub_category"}
      />

      case 8: return <AllListing
        label={`Category Type in ${formData.subCategory}`}
        addNew={"Category Type"}
        fieldName={'categoryType'}
        data={dataObj.categoryTypes}
        columnName={"u_category_type"}
      />

      case 9: return <AllListing
        label={"Business Class"}
        addNew={"Class"}
        fieldName={'class'}
        data={dataObj.class}
        columnName={"u_business_class"}
      />

      case 10: return <AllListing
        label={"Business Establishment"}
        addNew={"Establishment"}
        fieldName={"establishment"}
        data={dataObj.establishment}
        columnName={'u_business_establishment'}
      />

      case 11: return <SubmitBusiness formData={formData} />
      default: return 0;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.businessName && formData.city && dataObj.cityData && formData.timeFrom && formData.timeTo;
      case 2: return formData.road && dataObj.subRoads;
      case 3: return formData.subRoad && dataObj.areas;
      case 4: return formData.area && dataObj.subAreas;
      case 5: return formData.subArea;
      case 6: return formData.category && dataObj.subCategories;
      case 7: return formData.subCategory && dataObj.categoryTypes;
      case 8: return formData.categoryType;
      case 9: return formData.class;
      case 10: return formData.establishment;
      default: return false;
    }
  };
  return (
    <>
      {
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 ">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600">Step {currentStep} of 11</span>
                  <span className="text-sm text-gray-500">{Math.round((currentStep / 11) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${(currentStep / 11) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="min-h-[500px]">
                {renderCurrentStep()}
              </div>


              <div className='flex justify-end mr-1'>
                {/* __________SKIP-BUTTON__________ */}
                {isSkip &&
                  <button
                    onClick={nextStep}
                    className='flex items-center px-6 py-3 rounded-lg font-medium transition-all   text-blue-600 textwhite hover-blue-700 cursor-pointer'
                  >
                    Skip
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                }
              </div>

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 ">
                {/* __________PREVIOUS-BUTTON__________ */}
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

                {/* __________SUBMIT-BUTTON__________ */}
                {currentStep === 11 ? (
                  <button
                    className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all"
                    onClick={() => {

                      handleOnSubmit()
                    }
                    }
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
      }
    </>

  );
};

export default BusinessListingForm;