import { useState } from "react";

export default function App() {
  const data = [
    {
      name: "Starry Night",
      image: "./Starry_Night_Thumbnail.png",
    },
    {
      name: "Brand",
      image: "./Brand thumbnail.png",
    },
    {
      name: "Forrest Kiosk ",
      image: "./Forrest Kiosk Thumbnail.png",
    },
    {
      name: "OceanView Thumbnail",
      image: "./OceanView Thumbnail.png",
    },
    {
      name: "Road Thumbnail",
      image: "./Road Thumbnail@2.png",
    },
    {
      name: "City K",
      image: "./City K.png",
    },
  ];

  const [selected, setSelected] = useState(data[0]);

  return (
    <div
      style={{
        // backgroundColor: "hsl(240 10% 3.9%)",
        // backgroundImage: "url('./McLaren Amplified Logo.svg')",
        backgroundImage: `url('${selected?.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen bg-black"
    >
      <div className="fixed inset-0 z-10 bg-black bg-opacity-80" />
      <div className="pt-10 pb-2 relative z-20 flex flex-col items-center justify-center">
        {/* sample image */}
        <img
          src="./McLaren Amplified Logo.svg"
          alt="sample image"
          className="w-28 object-contain"
        />
      </div>

      <div className="p-10 grid grid-cols-1 relative z-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <img
            onClick={() => setSelected(item)}
            key={item.name}
            src={item.image}
            alt="sample image"
            className={`w-full object-contain ${
              selected?.name === item.name && "border-white border"
            } cursor-pointer rounded-lg shadow-2xl shadow-white/15`}
          />
        ))}
      </div>
    </div>
  );
}
