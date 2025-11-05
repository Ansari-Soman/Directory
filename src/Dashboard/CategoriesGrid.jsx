import housing from "../assets/housing.jpg";
import shop from "../assets/shop.jpg";
import education from "../assets/education.jpg";
import gym from "../assets/gym.jpg";
import hospital from "../assets/hospital.jpg";
import restaurant from "../assets/restaurant.avif";
import housing2 from "../assets/housing2.avif";
import question from "../assets/question.webp";

const CategoriesGrid = () => {
  const categoryData = [
    {
      name: "Housing",
      image: question,
    },
    {
      name: "Shops",
      image: question,
    },
    {
      name: "Hospitals",
      image: question,
    },
    {
      name: "Gym",
      image: question,
    },
    {
      name: "Restaurant",
      image: question,
    },
    {
      name: "Education",
      image: question,
    },
    {
      name: "Housing",
      image: question,
    },
    {
      name: "Shops",
      image: question,
    },
  ];
  // const categoryData = [
  //   {
  //     name: "Housing",
  //     image: question,
  //   },
  //   {
  //     name: "Shops",
  //     image: shop,
  //   },
  //   {
  //     name: "Hospitals",
  //     image: hospital,
  //   },
  //   {
  //     name: "Gym",
  //     image: gym,
  //   },
  //   {
  //     name: "Restaurant",
  //     image: restaurant,
  //   },
  //   {
  //     name: "Education",
  //     image: education,
  //   },
  //   {
  //     name: "Housing",
  //     image: housing,
  //   },
  //   {
  //     name: "Shops",
  //     image: shop,
  //   },
  // ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Explore Categories
          </h2>
          <p className="text-gray-600 text-lg">
            Browse through our wide range of business categories
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl h-[200px] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                src={item.image}
                alt={item.name}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center px-4 drop-shadow-lg">
                  {item.name}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-blue-500 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
