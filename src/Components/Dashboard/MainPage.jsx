import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const MainPage = () => {
  const [chartData, setChartData] = useState([]);
  const [listings, setListings] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const COLORS = ["#150099", "#FBBF24", "#036444"];
  const renderCustomizedLabel = ({ percent }) =>
    `${(percent * 100).toFixed(0)}%`;

  // Listen for window resize to handle responsive outerRadius
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulated chart data
    setChartData([
      { name: "Sale", value: 400 },
      { name: "Lease", value: 300 },
      { name: "Rent", value: 300 },
    ]);

    // Simulated listings
    setListings([
      {
        id: 1,
        title: "Palm City Estate",
        dateAdded: "21/06/2025",
        location: "Port Harcourt, Nigeria",
        image:
          "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752582156/Image_16_yjgau6.png",
      },
      {
        id: 2,
        title: "Sunrise Apartments",
        dateAdded: "18/06/2025",
        location: "Lagos, Nigeria",
        image:
          "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752588029/Image_wqhtue.png",
      },
      {
        id: 3,
        title: "Greenfield Homes",
        dateAdded: "15/06/2025",
        location: "Abuja, Nigeria",
        image:
          "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752582156/Image_16_yjgau6.png",
      },
    ]);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row gap-[25px] bg-primaryDarkest w-full max-w-[1100px] rounded-xl p-2 mb-6 mx-auto">
      {/* Pie Chart */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Listing Distribution <br /> (Sale, Lease, Rent)
        </h2>

        <div className="w-full h-[250px] sm:h-[300px] px-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={windowWidth < 350 ? 50 : 100} // Responsive size
                fill="#8884d8"
                dataKey="value"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 text-center text-sm text-neutral font-extrabold">
          {new Date().toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>

      {/* Listing Updates */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-4">
        <h3 className="text-[16px] lg:text-[20px] font-semibold text-gray-800 mb-4 text-center">
          Still Available: <br /> Your Most Older Listings
        </h3>

        <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
          {listings.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 items-center bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[80px] h-[80px] rounded-full object-cover"
              />
              <div className="text-sm text-gray-700 text-center sm:text-left">
                <p className="mb-1">
                  <span className="font-bold">Title:</span> {item.title}
                </p>
                <p className="mb-1">
                  <span className="font-bold">Date Added:</span>{" "}
                  {item.dateAdded}
                </p>
                <p>
                  <span className="font-bold">Location:</span>{" "}
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
