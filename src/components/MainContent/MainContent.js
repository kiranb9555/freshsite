import React from "react";
import "./index.scss";


const MainContent = () => {
    const Category = [
        {
            img: require("../../assets/images/chicken.png"),
            name: "Chicken",
        },

        {
            img: require("../../assets/images/mutton.jpg"),
            name: "mutton",
        },
        {
            img: require("../../assets/images/fish&seafood.jpg"),
            name: "fish&seafood",
        },
        {
            img: require("../../assets/images/exoticmeats.jpg"),
            name: "exoticmeats",
        },
        {
            img: require("../../assets/images/coldcuts.jpg"),
            name: "coldcuts",
        },
        {
            img: require("../../assets/images/readytocook.jpg"),
            name: "readytocook",
        },
        {
            img: require("../../assets/images/egg.jpg"),
            name: "egg",
        },
        {
            img: require("../../assets/images/countrychicken.jpg"),
            name: "countrychicken",
        },
        {
            img: require("../../assets/images/bulkproduct.jpg"),
            name: "bulkproduct",
        },

      
    ];
  return (
    <div className="main">
      <div className="section">
        <div className="pagetitle">
          <h3>Shop By Category </h3>

          <div className="images">
                      {Category.map((Categoryitem) => (
                <div className="imagecontainer">
                <div className="CategoryItemImage">
              <img src={Categoryitem.img} width="210px" height="250px" />
                </div>

                 <div className="links">
                    <a>{Categoryitem.name}</a>
                    </div>   
                    
                </div>
           
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
