import { useState } from "react";

export default function App() {
  const data = [
    {
      id: "one",
      name: "McLaren Amplified branding",
      image: "./McLaren Amplified branding.png",
    },
    {
      id: "two",
      name: "Branding",
      image: "./Branding.png",
    },
    {
      id: "three",
      name: "Starry Night",
      image: "./Starry_Night_Thumbnail.png",
    },
    {
      id: "four",
      name: "Brand",
      image: "./Brand thumbnail.png",
    },
    {
      id: "five",
      name: "Forrest Kiosk ",
      image: "./Forrest Kiosk Thumbnail.png",
    },
    {
      id: "six",
      name: "OceanView Thumbnail",
      image: "./OceanView Thumbnail.png",
    },
    {
      id: "seven",
      name: "Road Thumbnail",
      image: "./Road Thumbnail@2.png",
    },
    {
      id: "eight",
      name: "City K",
      image: "./City K.png",
    },
  ];

  const [selected, setSelected] = useState(data[0]);

  function changeImage(name) {
    const url = `localhost:3000/scenes`;
    fetch(`${url}/${name}`, {
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

  function handleClick(e) {
    setSelected(e);
    changeImage(e.id);
  }

  function handleNextClick() {
    changeImage("next");
    const index = data.findIndex((item) => item.id === selected.id);
    const nextIndex = index + 1;
    if (nextIndex < data.length) {
      setSelected(data[nextIndex]);
    } else {
      setSelected(data[0]);
    }
  }

  function handlePrevClick() {
    changeImage("previos");
    const index = data.findIndex((item) => item.id === selected.id);
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      setSelected(data[prevIndex]);
    } else {
      setSelected(data[data.length - 1]);
    }
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
      <div className="p-10 header-padding pb-2 relative z-20 flex items-center justify-between">
        {/* sample image */}
        <LeftIcon onClick={handlePrevClick} />
        <img
          src="./logo.svg"
          alt="sample image"
          className="w-56 object-contain"
        />
        <RightIcon onClick={handleNextClick} />
      </div>

      <div className="mt-3 p-10 grid grid-style relative z-20 gap-10">
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

const RightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className="w-10 h-10 text-white"
    {...props}
  >
    <path
      fill="currentColor"
      d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6S320 110.5 320 120v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288v72c0 9.6 5.7 18.2 14.5 22"
    ></path>
  </svg>
);

const LeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className="w-10 h-10 text-white"
    {...props}
  >
    <path
      fill="currentColor"
      d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22v72h288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192v72c0 9.6-5.7 18.2-14.5 22"
    ></path>
  </svg>
);
