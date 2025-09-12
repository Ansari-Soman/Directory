import { Building2 } from 'lucide-react'
import React from 'react'

const ListingStep1 = ({ formData, handleInputChange, cities, }) => {
  return (
      <div className="space-y-6">
          <div className="text-center mb-8">
              <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's get your business online</h2>
              <p className="text-gray-600">Start by telling us your business name and location</p>
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              >
                  <option value="">
                      Select your city
                  </option>
                  {cities.map(city => (
                      <option key={city.uni_id} value={city.u_city_name}>
                          {city.u_city_name}
                      </option>
                  ))}
              </select>
          </div>
      </div>
  )
}

export default ListingStep1