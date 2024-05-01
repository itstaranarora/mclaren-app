import { useState } from "react";

export default function App() {
  const data = [
    {
      id: "one",
      name: "Starry Night",
      image: "./Starry_Night_Thumbnail.png",
    },
    {
      id: "two",
      name: "Brand",
      image: "./Brand thumbnail.png",
    },
    {
      id: "three",
      name: "Forrest Kiosk ",
      image: "./Forrest Kiosk Thumbnail.png",
    },
    {
      id: "four",
      name: "OceanView Thumbnail",
      image: "./OceanView Thumbnail.png",
    },
    {
      id: "five",
      name: "Road Thumbnail",
      image: "./Road Thumbnail@2.png",
    },
    {
      id: "six",
      name: "City K",
      image: "./City K.png",
    },
  ];

  const [selected, setSelected] = useState(data[0]);

  function handleClick(e) {
    setSelected(e);
    const url = `localhost:3000/scenes`;
    fetch(`${url}/${e.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          // src="./McLaren Amplified Logo.svg"
          src="./logo.svg"
          alt="sample image"
          className="w-56 object-contain"
        />
      </div>

      <div className="mt-6 p-10 grid grid-cols-1 relative z-20 sm:grid-cols-2 md:grid-cols-2 gap-10">
        {data.map((item) => (
          <img
            onClick={() => handleClick(item)}
            key={item.id}
            src={item.image}
            alt="sample image"
            className={`w-full object-contain ${
              selected?.name === item.name && "border-white border-2"
            } cursor-pointer rounded-lg shadow-2xl shadow-white/15`}
          />
        ))}
      </div>
    </div>
  );
}
