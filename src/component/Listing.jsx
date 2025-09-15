import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Building2, Phone, Mail, Clock, Camera, Kanban, Badge, Award, Star, Shield, Tag, Medal } from 'lucide-react';
import axios from 'axios';
import ListingBusiName from './ListingBusiName';
import ListingSubArea from './ListingSubArea';
import ListingArea from './ListingArea'
import ListingRoad from './ListingRoad';
import AllListing from './AllListing'
import BusinessDataDisplay from './SubmitBusiness';
import SubmitBusiness from './SubmitBusiness';

const BusinessListingForm = () => {
  const keys = ['roads', 'areas', 'subRoads', 'subAreas', "subCategories", "categoryTypes",]

  const col = ['u_city_name', 'u_road_name', 'u_sub_road_name', 'u_area_name', 'u_sub_area_name_id', "u_business_category", "u_business_sub_category", "u_category_type", "u_business_class", "u_business_establishment"]

  const [currentStep, setCurrentStep] = useState(1);
  const [isSkip, setIsSkip] = useState(false)
  const [selectedCity, setSelectedCity] = useState(false)

  const [dataObj, setDataObj] = useState({
    cityList: [],
    cityData: {},
    roads: [],
    areas: [],
    subAreas: [],
    subRoads: [],
    category: [],
    subCategories: [],
    categoryTypes: [],
    class: [],
    establishment: [],
  })


  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    road: '',
    subRoad: '',
    area: '',
    subArea: '',
    category: '',
    subCategory: '',
    categoryType: '',
    class: '',
    establishment: '',
  });

  // Fetching City list
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

    // const fetchCities = async () => {
    //   try {
    //     const res = await axios.get('http://localhost:8083/api/city/list', {
    //       headers: { "application": "dir" }
    //     });
    //     handleDataObj("cityList", res.data.record);
    //   } catch (error) {
    //     console.log(error);
    //   } 
    // };

    // fetchCities();
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
    if(!selectedCity) return;
    const [city] = dataObj.cityList.filter((item) => item.u_city_name === selectedCity)
    // console.log("ser === ", city.uni_id)
    handleInputChange('city', city.uni_id)
    // console.log("City id === ", cityID)
    // console.log("fooorrramm data === ", formData)
    // console.log("data === ", dataObj)
  }, [selectedCity])





  const nextStep = () => {
    if (currentStep < 11) setCurrentStep(currentStep + 1);
    // if (currentStep === 2) setIsSkip(true)
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
        setSelectedCity={setSelectedCity}
        cities={dataObj.cityList}
        selectedCity={selectedCity}
      />;


      case 2: return <AllListing
        label={`Roads in ${formData.city}`}
        addNew={'Road'}
        formData={'road'}
        data={dataObj.roads}
        handleInputChange={handleInputChange}
        handleDataObj={handleDataObj}
        columnName={'u_road_name'}
        nextStep={['areas', 'subRoads']}
      />

      case 3: 
      return (  
        <AllListing
        label={`Sub roads in ${formData.road}`}
        addNew={'Sub Road'}
        formData={'subRoad'}
        data={dataObj.subRoads}
        columnName={'u_sub_road_name'}
        handleInputChange={handleInputChange}
        handleDataObj={handleDataObj}
        />
      ) 

      case 4: return <AllListing
        label={`Areas in ${formData.city}`}
        addNew={'Area'}
        formData={'area'}
        data={dataObj.areas}
        columnName={'u_area_name'}
        handleDataObj={handleDataObj}
        handleInputChange={handleInputChange}
        nextStep={['subAreas']}
      />


      case 5: return <AllListing
        label={`Sub Areas in  ${formData.area}`}
        addNew={'Sub Area'}
        formData={'subArea'}
        data={dataObj.subAreas}
        columnName={'u_sub_area_name_id'}
        handleDataObj={handleDataObj}
        handleInputChange={handleInputChange}
      />

      case 6: return <AllListing
        label={'Categories'}
        addNew={"Category"}
        formData={'category'}
        data={dataObj.category}
        columnName={"u_business_category"}
        handleDataObj={handleDataObj}
        handleInputChange={handleInputChange}
        nextStep={["subCategories"]}

      />
      case 7: return <AllListing
        label={`Sub Category in ${formData.category}`}
        addNew={'Sub Category'}
        formData={'subCategory'}
        data={dataObj.subCategories}
        columnName={"u_business_sub_category"}
        handleDataObj={handleDataObj}
        handleInputChange={handleInputChange}
        nextStep={["categoryTypes"]}
      />
      case 8: return <AllListing
        label={`Category Type in ${formData.subCategory}`}
        addNew={"Category Type"}
        formData={'categoryType'}
        data={dataObj.categoryTypes}
        columnName={"u_category_type"}
        handleDataObj={handleDataObj}
        handleInputChange={handleInputChange}
      />

      case 9: return <AllListing
        label={"Business Class"}
        addNew={"Class"}
        formData={'class'}
        data={dataObj.class}
        columnName={"u_business_class"}
        handleDataObj={handleDataObj}
        handleInputChange={handleInputChange}

      />

      case 10: return <AllListing
        label={"Business Establishment"}
        addNew={"Establishment"}
        formData={"establishment"}
        data={dataObj.establishment}
        columnName={'u_business_establishment'}
        handleDataObj={handleDataObj}
        handleInputChange={handleInputChange}
      />

      case 11:return <SubmitBusiness formData={formData} />
      default: return 0;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.businessName && formData.city && dataObj.cityData;
      case 2: return formData.road;
      // case 3: return formData.subRoad;
      case 3: return true;
      case 4: return formData.area;
      // case 5: return formData.subArea;
      case 5: return true;
      case 6: return formData.category;
      case 7: return formData.subCategory;
      // case 8: return formData.categoryType;
      case 8: return true;
      case 9: return formData.class;
      case 10: return formData.establishment;

      default: return false;
    }
  };
  return (
    
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
          <div className='flex justify-end'>
            {isSkip &&
              <button
                onClick={nextStep}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all 
              text-blue-600 textwhite hover-blue-700 cursor-pointer
              `}
              >
                Skip
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            }
          </div>
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 ">
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

            {currentStep === 11 ? (
              <button
                className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all"
                onClick={() => console.log("formdata === ", formData)}
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