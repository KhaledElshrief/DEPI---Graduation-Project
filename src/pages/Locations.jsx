import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Mock data for educational institutions
const institutions = [
  {
    id: 1,
    name: 'Tiba Academy',
    description: 'أكاديمية تعليمية للمدارس و الكليات',
    logo: './images/IMG-20220408-WA0001.webp?height=100&width=100',
  },
  {
    id: 2,
    name: 'Pioneers Learning Center',
    description: 'أكاديمية تعليمية للمدارس للأطفال و الإنترناشونال',
    logo: './images/mahmoud-khososy.net-1.webp?height=100&width=100',
  },
]

// Mock data for filter options
const specializations = ['كل التخصصات', 'مدارس', 'جامعات', 'تعليم لغات']
const regions = ['كل المناطق', 'القاهرة', 'الإسكندرية', 'الجيزة']

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialization, setSelectedSpecialization] = useState('كل التخصصات')
  const [selectedRegion, setSelectedRegion] = useState('كل المناطق')

  const filteredInstitutions = institutions.filter(institution =>
    institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    institution.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4" dir="rtl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="ابحث ..."
          className="flex-grow p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="relative">
          <select
            className="appearance-none bg-white border rounded-md p-2 pr-8"
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            {specializations.map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
          <ChevronDown className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="relative">
          <select
            className="appearance-none bg-white border rounded-md p-2 pr-8"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            {regions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          <ChevronDown className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          إستعادة
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredInstitutions.map((institution) => (
          <div key={institution.id} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 flex items-center justify-between bg-gray-100">
              <img src={institution.logo} alt={institution.name} className="w-16 h-16 object-contain" />
              <h2 className="text-xl font-bold">{institution.name}</h2>
            </div>
            <div className="p-4">
              <p>{institution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

