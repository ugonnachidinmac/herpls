import React from "react";

const TheList = () => {
  const lists = [
    {
      id: 1,
      listImg:
        "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752582156/Image_16_yjgau6.png",
      listTitle: "Luxury Estate",
      hit: "A luxury estate located in Rukpoku with modern facilities.",
      agentName: "Chidinma",
      listType: "Rent",
      price: "₦1,500,000",
      location: {
        nearestBustop: "Sars Road",
        city: "Port Harcourt",
        country: "Nigeria",
      },
    },
    {
      id: 2,
      listImg:
        "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752588029/Image_wqhtue.png",
      listTitle: "3-Bedroom Flat",
      hit: "Spacious 3-bedroom flat in Port Harcourt city center.",
      agentName: "John Doe",
      listType: "Sale",
      price: "₦22,000,000",
      location: {
        nearestBustop: "Old GRA",
        city: "Port Harcourt",
        country: "Nigeria",
      },
    },
    {
      id: 3,
      listImg:
        "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752582156/Image_16_yjgau6.png",
      listTitle: "Commercial Space",
      hit: "Open-plan office space ideal for startups and businesses.",
      agentName: "Blessing",
      listType: "Lease",
      price: "₦750,000",
      location: {
        nearestBustop: "Garrison",
        city: "Port Harcourt",
        country: "Nigeria",
      },
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-10 py-10 bg-[#F9FAFB]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lists.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition duration-300 hover:shadow-xl flex flex-col"
          >
            <img
              src={item.listImg}
              alt={item.listTitle}
              className="w-full h-[230px] object-cover"
            />

            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <h6 className="text-[18px] font-bold text-[#1B00CC] mb-2">
                  {item.listTitle}
                </h6>
                <p className="text-gray-700 mb-4">{item.hit}</p>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <p>
                    Agent:{" "}
                    <span className="font-semibold text-black">
                      {item.agentName}
                    </span>
                  </p>
                  <p className="font-bold text-[16px] text-primaryDark">
                    {item.listType}
                  </p>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold text-black">Location:</span>{" "}
                  {item.location.nearestBustop}, {item.location.city},{" "}
                  {item.location.country}
                </p>

                <div className="mb-5">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-lg font-bold text-black">{item.price}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-[#1B00CC] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#150099] transition">
                  View Full Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheList;
