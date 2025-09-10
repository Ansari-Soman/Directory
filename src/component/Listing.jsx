import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Building2, Phone, Mail, Clock, Camera, Kanban } from 'lucide-react';
import axios from 'axios';
import ListingBusiName from './ListingBusiName';
import ListingSubArea from './ListingSubArea';
import ListingArea from './ListingArea'


const BusinessListingForm = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState({
    cities: true,  // Start with true since we're loading on mount
    areas: false,
    subAreas: false,
  });
  const [error, setError] = useState(null);
  const [cityData, setCityData] = useState([])

  const [currentStep, setCurrentStep] = useState(1);
  const [dataObj, setDataObj] = useState({
    cityData: {},
    area: {},
    subArea: {},
  })


  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    area: '',
    subarea: '',
    category: '',
    address: '',
    phone: '',
    email: '',
    hours: '',
    description: ''
  });

  // Fetching City list
  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(prev => ({ ...prev, cities: true }));
        const res = await axios.get('http://localhost:8083/api/city/list', {
          headers: { "application": "dir" }
        });
        setCities(res.data.record);
      } catch (error) {
        console.log(error);
        setError('Failed to load cities');
      } finally {
        setLoading(prev => ({ ...prev, cities: false }));
      }
    };

    fetchCities();
  }, []);


  useEffect(() => {
    const fetchCityData = async () => {
      if (!formData.city) return;
      try {
        setLoading(prev => ({ ...prev, areas: true }));
        const res = await axios.get(`http://localhost:8083/api/citydata/${formData.city}`, {
          headers: { "application": "dir" }
        });
        setCityData(res.data.record[0] || { area: [] })
        handleFormData('cityData', res.data.record[0])
      } catch (error) {
        console.log(error)
        setCityData({ area: [] })
      } finally {
        setLoading(prev => ({ ...prev, areas: false }));
      }

    }
    fetchCityData()
  }, [formData.city])


  const handleFormData = (field, value) => {
    setDataObj((prev => (
      {
        ...prev,
        [field]: value
      }
    )))
  }

  useEffect(() => {
    console.log("data obj === ", dataObj)
  }, [dataObj])


  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderProgressBar = () => (
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
  );




  // const renderStep3 = () => (
  //   <div className="space-y-6">
  //     <div className="text-center mb-8">
  //       <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
  //       <h2 className="text-3xl font-bold text-gray-900 mb-2">What's your business category?</h2>
  //       <p className="text-gray-600">This helps customers find your business more easily</p>
  //     </div>

  //     <div className="grid grid-cols-2 gap-3">
  //       {categories.map(category => (
  //         <button
  //           key={category}
  //           onClick={() => handleInputChange('category', category)}
  //           className={`p-4 text-left border rounded-lg transition-all ${formData.category === category
  //             ? 'border-blue-500 bg-blue-50 text-blue-700'
  //             : 'border-gray-300 hover:border-blue-300'
  //             }`}
  //         >
  //           {category}
  //         </button>
  //       ))}
  //     </div>
  //   </div>
  // );

  // const renderStep4 = () => (
  //   <div className="space-y-6">
  //     <div className="text-center mb-8">
  //       <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
  //       <h2 className="text-3xl font-bold text-gray-900 mb-2">Add your address</h2>
  //       <p className="text-gray-600">Provide your complete business address</p>
  //     </div>

  //     <div>
  //       <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address *</label>
  //       <textarea
  //         value={formData.address}
  //         onChange={(e) => handleInputChange('address', e.target.value)}
  //         placeholder="Enter your complete business address"
  //         rows={4}
  //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //       />
  //     </div>

  //     <div className="bg-blue-50 p-4 rounded-lg">
  //       <p className="text-blue-800 text-sm">
  //         <strong>Selected:</strong> {formData.businessName} in {formData.area}, {formData.city}
  //       </p>
  //     </div>
  //   </div>
  // );

  // const renderStep5 = () => (
  //   <div className="space-y-6">
  //     <div className="text-center mb-8">
  //       <Phone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
  //       <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact information</h2>
  //       <p className="text-gray-600">Help customers reach you easily</p>
  //     </div>

  //     <div>
  //       <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
  //       <input
  //         type="tel"
  //         value={formData.phone}
  //         onChange={(e) => handleInputChange('phone', e.target.value)}
  //         placeholder="+91 XXXXX XXXXX"
  //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //       />
  //     </div>

  //     <div>
  //       <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
  //       <input
  //         type="email"
  //         value={formData.email}
  //         onChange={(e) => handleInputChange('email', e.target.value)}
  //         placeholder="business@example.com"
  //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //       />
  //     </div>

  //     <div>
  //       <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours</label>
  //       <input
  //         type="text"
  //         value={formData.hours}
  //         onChange={(e) => handleInputChange('hours', e.target.value)}
  //         placeholder="Mon-Fri: 9 AM - 6 PM"
  //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //       />
  //     </div>
  //   </div>
  // );

  // const renderStep6 = () => (
  //   <div className="space-y-6">
  //     <div className="text-center mb-8">
  //       <Camera className="w-16 h-16 text-blue-600 mx-auto mb-4" />
  //       <h2 className="text-3xl font-bold text-gray-900 mb-2">Final details</h2>
  //       <p className="text-gray-600">Add a description to complete your listing</p>
  //     </div>

  //     <div>
  //       <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
  //       <textarea
  //         value={formData.description}
  //         onChange={(e) => handleInputChange('description', e.target.value)}
  //         placeholder="Tell customers about your business, services, and what makes you special..."
  //         rows={6}
  //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //       />
  //     </div>

  //     <div className="bg-green-50 p-6 rounded-lg border border-green-200">
  //       <h3 className="font-semibold text-green-800 mb-2">Review Your Listing</h3>
  //       <div className="text-sm text-green-700 space-y-1">
  //         <p><strong>Business:</strong> {formData.businessName}</p>
  //         <p><strong>Location:</strong> {formData.area}, {formData.city}</p>
  //         <p><strong>Category:</strong> {formData.category}</p>
  //         <p><strong>Phone:</strong> {formData.phone}</p>
  //       </div>
  //     </div>
  //   </div>
  // );





  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return <ListingBusiName
        formData={formData}
        handleInputChange={handleInputChange}
        cities={cities}
        loading={loading}
        error={error} />;
      case 2: return <ListingArea
        formData={formData}
        cityData={cityData}
        loading={loading}
        handleInputChange={handleInputChange}
        handleFormData={handleFormData}
        error={error} />
      case 3: return <ListingSubArea
        subAreas={dataObj.area.subAreas}
        formData={formData}
        loading={loading}
        handleInputChange={handleInputChange}
        error={error}
      />
      // case 4: return renderStep4();
      // case 5: return renderStep5();
      // case 6: return renderStep6();
      default: return renderStep1();
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.businessName && formData.city;
      case 2: return formData.area;
      // case 3: return formData.category;
      // case 4: return formData.address;
      // case 5: return formData.phone;
      // case 6: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 ">
          {renderProgressBar()}

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