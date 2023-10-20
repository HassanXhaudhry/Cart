import React, { Fragment, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Careers.css";

const positions = [
  {
    name: "Account Executive",
    category: "sales",
    discription: "Apply"
  },
  {
    name: "HR",
    category: "rd",
    discription: "Apply"
  },
  {
    name: "Backend Developer",
    category: "rd",
    discription: "Apply"
  },
  {
    name: "Devops TeamLead",
    category: "rd",
    discription: "Apply"
  },
  {
    name: "Assistant controller",
    category: "finance",
    discription: "Apply"
  },
  {
    name: "Frontend Developer",
    category: "rd",
    discription: "Apply"
  },
]

const Careers = () => {
  const [item , setItems]=useState(positions);

  
const filterItems=(cateItem)=>{
  const updatedItem=positions.filter((curData)=>{
    return curData.category===cateItem;
  });
  setItems(updatedItem);
}

  
  return (
    <Fragment>
      <Navbar />
      <div className="careers">
        <div className="careers-positions">
          <h1>Open Positions</h1>
          <div className="filter-list">
            <div className="filter-dropdown">
              <div className="filter-options">
                <a className="dpt-link" onClick={() => setItems(positions)}>
                  All
                </a>
                <a
                  className="dpt-link" onClick={() => filterItems('rd')}>
                  R&D
                </a>
                <a className="dpt-link" onClick={() => filterItems('finance')}>
                  Finance
                </a>
                <a className="dpt-link" onClick={() => filterItems('sales')}>
                  Sales
                </a>
              </div>
            </div>
          </div>
          <div className="filtered-positions">
            <div className="filtered-positions-list">
            { item.map((data)=>{
              //const  { name, discription}=data;
              return(
            <div  className="selected-positions">
           
              <div className="selected-position">
              <li>
                <div className="position-name" href="">
                  <h3>{data.name}</h3><a href=""> <h4>{data.discription}</h4></a> 
                </div>
              </li>
              </div>

            </div>
              )
            })}
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Careers;
