import { Building2 } from 'lucide-react'
import React, { useContext } from 'react'
import { DirectoryContext } from '../Context'
import Select from 'react-select'

const ListingBusinessName = ({ cities }) => {
    const { handleInputChange, formData, handleBusinessId } = useContext(DirectoryContext)

    // Add this defensive check
    if (!cities || !Array.isArray(cities)) {
        return <div>Loading cities...</div>; // or return null
    }

    const options =
        cities.map((city) => (
        {
            value: city.u_city_name,
            label: city.u_city_name,
        }
    ));

    // const timeOptions = [
    //     { display: '12:00 AM', value: '00:00' },
    //     { display: '12:30 AM', value: '00:30' },
    //     { display: '01:00 AM', value: '01:00' },
    //     { display: '01:30 AM', value: '01:30' },
    //     { display: '02:00 AM', value: '02:00' },
    //     { display: '02:30 AM', value: '02:30' },
    //     { display: '03:00 AM', value: '03:00' },
    //     { display: '03:30 AM', value: '03:30' },
    //     { display: '04:00 AM', value: '04:00' },
    //     { display: '04:30 AM', value: '04:30' },
    //     { display: '05:00 AM', value: '05:00' },
    //     { display: '05:30 AM', value: '05:30' },
    //     { display: '06:00 AM', value: '06:00' },
    //     { display: '06:30 AM', value: '06:30' },
    //     { display: '07:00 AM', value: '07:00' },
    //     { display: '07:30 AM', value: '07:30' },
    //     { display: '08:00 AM', value: '08:00' },
    //     { display: '08:30 AM', value: '08:30' },
    //     { display: '09:00 AM', value: '09:00' },
    //     { display: '09:30 AM', value: '09:30' },
    //     { display: '10:00 AM', value: '10:00' },
    //     { display: '10:30 AM', value: '10:30' },
    //     { display: '11:00 AM', value: '11:00' },
    //     { display: '11:30 AM', value: '11:30' },
    //     { display: '12:00 PM', value: '12:00' },
    //     { display: '12:30 PM', value: '12:30' },
    //     { display: '01:00 PM', value: '13:00' },
    //     { display: '01:30 PM', value: '13:30' },
    //     { display: '02:00 PM', value: '14:00' },
    //     { display: '02:30 PM', value: '14:30' },
    //     { display: '03:00 PM', value: '15:00' },
    //     { display: '03:30 PM', value: '15:30' },
    //     { display: '04:00 PM', value: '16:00' },
    //     { display: '04:30 PM', value: '16:30' },
    //     { display: '05:00 PM', value: '17:00' },
    //     { display: '05:30 PM', value: '17:30' },
    //     { display: '06:00 PM', value: '18:00' },
    //     { display: '06:30 PM', value: '18:30' },
    //     { display: '07:00 PM', value: '19:00' },
    //     { display: '07:30 PM', value: '19:30' },
    //     { display: '08:00 PM', value: '20:00' },
    //     { display: '08:30 PM', value: '20:30' },
    //     { display: '09:00 PM', value: '21:00' },
    //     { display: '09:30 PM', value: '21:30' },
    //     { display: '10:00 PM', value: '22:00' },
    //     { display: '10:30 PM', value: '22:30' },
    //     { display: '11:00 PM', value: '23:00' },
    //     { display: '11:30 PM', value: '23:30' }
    // ];


    const timeOptions = [
        { display: '12:00 AM', value: '00:00' },
        { display: '01:00 AM', value: '01:00' },
        { display: '02:00 AM', value: '02:00' },
        { display: '03:00 AM', value: '03:00' },
        { display: '04:00 AM', value: '04:00' },
        { display: '05:00 AM', value: '05:00' },
        { display: '06:00 AM', value: '06:00' },
        { display: '07:00 AM', value: '07:00' },
        { display: '08:00 AM', value: '08:00' },
        { display: '09:00 AM', value: '09:00' },
        { display: '10:00 AM', value: '10:00' },
        { display: '11:00 AM', value: '11:00' },
        { display: '12:00 PM', value: '12:00' },
        { display: '01:00 PM', value: '13:00' },
        { display: '02:00 PM', value: '14:00' },
        { display: '03:00 PM', value: '15:00' },
        { display: '04:00 PM', value: '16:00' },
        { display: '05:00 PM', value: '17:00' },
        { display: '06:00 PM', value: '18:00' },
        { display: '07:00 PM', value: '19:00' },
        { display: '08:00 PM', value: '20:00' },
        { display: '09:00 PM', value: '21:00' },
        { display: '10:00 PM', value: '22:00' },
        { display: '11:00 PM', value: '23:00' }
    ];

    return (
        <>
            <div className="space-y-6">
                <div className="text-center mb-8">
                    <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's get your business online</h2>
                    <p className="text-gray-600">Start by telling us your business name and location</p>
                </div>


                {/* __________-BUSINESS-NAME-__________ */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                    <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => {
                            handleInputChange('businessName', e.target.value)
                            handleBusinessId('businessName', e.target.value)
                        }
                        }
                        placeholder="Enter your business name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>


                {/* __________-TIMING-________ */}
                <div className='mb-8'>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Time</label>

                    <div className="grid grid-cols-2 gap-4">
                        {/* From Time - Dropdown */}
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">From</label>
                            <select
                                value={formData.timeFrom}
                                onChange={(e) => {
                                    handleBusinessId('timeFrom', e.target.value);
                                    handleInputChange('timeFrom', e.target.value);
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">Select start time</option>
                                {timeOptions.map((time) => (
                                    <option key={time.value} value={time.value}>
                                        {time.display}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* To Time - Dropdown */}
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">To</label>
                            <select
                                value={formData.timeTo}
                                onChange={(e) => {
                                    handleBusinessId('timeTo', e.target.value);
                                    handleInputChange('timeTo', e.target.value);
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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





                <Select
                    value={options.find(opt => opt.value === formData.city) || null} // ✅ full object
                    onChange={(e) => handleInputChange('city', e.value)}
                    options={options}
                    placeholder="Search location..."
                    isSearchable
                />
            </div>

        </>

    )
}

export default ListingBusinessName;