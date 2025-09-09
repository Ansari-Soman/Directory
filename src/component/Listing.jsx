import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Building2, Phone, Mail, Clock, Camera } from 'lucide-react';

const BusinessListingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    area: '',
    category: '',
    address: '',
    phone: '',
    email: '',
    hours: '',
    description: ''
  });

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'
  ];

  const areas = {
    'Mumbai': ['Andheri', 'Bandra', 'Borivali', 'Malad', 'Thane', 'Navi Mumbai'],
    'Delhi': ['Connaught Place', 'Karol Bagh', 'Lajpat Nagar', 'Janakpuri', 'Dwarka'],
    'Bangalore': ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'BTM Layout'],
    'Chennai': ['T. Nagar', 'Adyar', 'Velachery', 'Anna Nagar', 'OMR'],
    'Kolkata': ['Park Street', 'Salt Lake', 'Ballygunge', 'New Town', 'Howrah'],
    'Hyderabad': ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Kondapur', 'Secunderabad'],
    'Pune': ['Koregaon Park', 'Kothrud', 'Viman Nagar', 'Hinjewadi', 'Camp'],
    'Ahmedabad': ['Satellite', 'Vastrapur', 'Navrangpura', 'Maninagar', 'Bopal']
  };

  const categories = [
    'Restaurant', 'Retail Store', 'Healthcare', 'Education', 'Technology',
    'Real Estate', 'Automotive', 'Beauty & Spa', 'Fitness', 'Professional Services'
  ];

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
    <div className="mb-8 border">
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

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8 ">
        <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's get your business online</h2>
        <p className="text-gray-600">Start by telling us your business name and location</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Name </label>
        <input
          type="text"
          value={formData.businessName}
          onChange={(e) => handleInputChange('businessName', e.target.value)}
          placeholder="Enter your business name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
        <select
          value={formData.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select your city</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose your area</h2>
        <p className="text-gray-600">Select the specific area where your business is located</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Area in {formData.city} *</label>
        <div className="grid grid-cols-2 gap-3">
          {(areas[formData.city] || []).map(area => (
            <button
              key={area}
              onClick={() => handleInputChange('area', area)}
              className={`p-4 text-left border rounded-lg transition-all ${formData.area === area
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-blue-300'
                }`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">What's your business category?</h2>
        <p className="text-gray-600">This helps customers find your business more easily</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleInputChange('category', category)}
            className={`p-4 text-left border rounded-lg transition-all ${formData.category === category
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-300 hover:border-blue-300'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Add your address</h2>
        <p className="text-gray-600">Provide your complete business address</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address *</label>
        <textarea
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          placeholder="Enter your complete business address"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-blue-800 text-sm">
          <strong>Selected:</strong> {formData.businessName} in {formData.area}, {formData.city}
        </p>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Phone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact information</h2>
        <p className="text-gray-600">Help customers reach you easily</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="+91 XXXXX XXXXX"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="business@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours</label>
        <input
          type="text"
          value={formData.hours}
          onChange={(e) => handleInputChange('hours', e.target.value)}
          placeholder="Mon-Fri: 9 AM - 6 PM"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Camera className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Final details</h2>
        <p className="text-gray-600">Add a description to complete your listing</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Tell customers about your business, services, and what makes you special..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Review Your Listing</h3>
        <div className="text-sm text-green-700 space-y-1">
          <p><strong>Business:</strong> {formData.businessName}</p>
          <p><strong>Location:</strong> {formData.area}, {formData.city}</p>
          <p><strong>Category:</strong> {formData.category}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      case 6: return renderStep6();
      default: return renderStep1();
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.businessName && formData.city;
      case 2: return formData.area;
      case 3: return formData.category;
      case 4: return formData.address;
      case 5: return formData.phone;
      case 6: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
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