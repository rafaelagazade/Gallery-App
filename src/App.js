import { useState, useEffect } from "react";
import "./tailwind.css";
import Test from "./test";

import img1 from "./photos/1.jpg";
import img2 from "./photos/2.jpg";
import img3 from "./photos/3.jpg";
import img4 from "./photos/4.jpg";
import img5 from "./photos/5.jpg";
import img6 from "./photos/6.jpg";

function App() {
  const [mainImg, setMainImg] = useState(null);
  const localData = JSON.parse(window.localStorage.getItem("picture"));

  const photos = [
    { image: img1, id: 1 },
    { image: img2, id: 2 },
    { image: img3, id: 3 },
    { image: img4, id: 4 },
    { image: img5, id: 5 },
    { image: img6, id: 6 },
  ];

  useEffect(() => {
    setMainImg(localData ? localData : img1);

    // return () => {
    //   setMainImg(null)
    // }
  }, []);

  //  useEffect(() => {
  //    setMainImg(localData ? localData : img1);
  //  }, [localData]);

  const handleClickImage = (pic) => {
    setMainImg(pic.image);
    window.localStorage.setItem("picture", JSON.stringify(pic.image));
  };

  return (
    <div className="App w-full h-[100vh] bg-gray-700 flex flex-col align-center justify-center ">
      {
        <div className="laptop:w-2/4 laptop:h-[400px] m-auto bg-black justify-center items-center overflow-hidden border-solid border-black border-3 xs:w-full xs:rounded-xl ">
          <div className="w-auto h-2/4 xs:h-1/4 xs:flex xs:justify-center xs:mt-10 ">
            <img
              src={mainImg}
              alt="main"
              className="w-2/4 h-100% border-4 border-red-700 xs:w-auto"
            />
          </div>
          <div className="flex flex-wrap gap-14 xs:gap-10 xs:flex xs:justify-center xs:mt-10 ">
            {photos?.map((photo) => (
              <div
                key={photo.id}
                className="w-28 h-18 border-solid border-4 border-white"
              >
                <img
                  src={photo.image}
                  alt="photo1"
                  onClick={() => handleClickImage(photo)}
                />
              </div>
            ))}
          </div>
        </div>
      }

      <Test />
    </div>
  );
}

export default App;
