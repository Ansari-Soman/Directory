import React, { useState } from "react";

const CityProfile = () => {
  const [city] = useState("Mumbai");

  const overview = {
    description:
      "Mumbai, the financial capital of India, is a vibrant city known for its fast-paced lifestyle, iconic landmarks, film industry, and street food culture.",
    population: "20 million+",
    knownFor: ["Bollywood", "Gateway of India", "Marine Drive"],
  };

  const popularFoods = [
    { name: "Vada Pav", img: "/images/vadapav.jpg" },
    { name: "Pav Bhaji", img: "/images/pavbhaji.jpg" },
    { name: "Bhel Puri", img: "/images/bhelpuri.jpg" },
    { name: "Bombay Sandwich", img: "/images/sandwich.jpg" },
  ];

  const attractions = [
    { name: "Gateway of India", img: "/images/gateway.jpg" },
    { name: "Marine Drive", img: "/images/marine.jpg" },
    { name: "Siddhivinayak Temple", img: "/images/siddhivinayak.jpg" },
  ];

  const businessHubs = [
    {
      name: "Bandra Kurla Complex",
      desc: "Corporate hub with MNCs and startups.",
    },
    {
      name: "Lower Parel",
      desc: "Premium offices, cafes, and business centers.",
    },
    { name: "Andheri East", desc: "Media and technology companies cluster." },
  ];

  const festivals = [
    { name: "Ganesh Chaturthi", img: "/images/ganesh.jpg" },
    { name: "Kala Ghoda Festival", img: "/images/kalaghoda.jpg" },
  ];

  return (
    <div className="font-poppins bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url(/images/mumbai-hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white px-8 pb-16 md:pb-24">
          <h1 className="text-5xl font-bold mb-3">{city}</h1>
          <p className="max-w-2xl text-lg opacity-90">{overview.description}</p>
          <div className="mt-4 text-sm text-gray-200">
            <p>Population: {overview.population}</p>
            <p>Famous for: {overview.knownFor.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* Section: Popular Foods */}
      <section className="py-10 px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">
          🍲 Famous Food in {city}
        </h2>
        <div className="flex overflow-x-auto gap-6 scrollbar-hide">
          {popularFoods.map((food, idx) => (
            <div
              key={idx}
              className="min-w-[200px] bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={food.img}
                alt={food.name}
                className="h-40 w-full object-cover"
              />
              <p className="p-4 text-center font-medium text-gray-700">
                {food.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Attractions */}
      <section className="py-10 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">
          🏞️ Must Visit in {city}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {attractions.map((place, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md"
            >
              <img
                src={place.img}
                alt={place.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Business Hubs */}
      <section className="py-10 px-6 md:px-20 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">
          💼 Business & Economy
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {businessHubs.map((hub, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100"
            >
              <h3 className="font-semibold text-gray-800 mb-2">{hub.name}</h3>
              <p className="text-gray-600 text-sm">{hub.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Festivals */}
      <section className="py-10 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">
          🎉 Festivals & Culture
        </h2>
        <div className="flex overflow-x-auto gap-6 scrollbar-hide">
          {festivals.map((fest, idx) => (
            <div
              key={idx}
              className="min-w-[240px] bg-gray-100 rounded-2xl overflow-hidden"
            >
              <img
                src={fest.img}
                alt={fest.name}
                className="h-40 w-full object-cover"
              />
              <p className="p-4 text-center font-medium text-gray-700">
                {fest.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Planning to visit {city}?</h2>
        <p className="text-blue-100 mb-6">
          Explore places, try iconic street foods, and experience local culture.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
          Explore More
        </button>
      </section>
    </div>
  );
};

export default CityProfile;
