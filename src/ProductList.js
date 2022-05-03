import React, { Component } from "react";

export default class ProductList extends Component {
  state = {
    pageTitle: "Productss",
    productcount: 15,
    productss:  [
      {
       itemID: 1,
             itemType: "Washer",
       itemName: "Super Capacity Top Load Washer",
       manufactorName: "Maytag",
       itemStock: "4",
             price: "$398.00",
             photo: "https://images.pexels.com/photos/2347642/pexels-photo-2347642.jpeg"
     },
     {
       itemID: 2,
             itemType: "Dryer",
       itemName: "MEDC465HW 7.0 Electric Dryer",
       manufactorName: "Maytag",
       itemStock: "6",
            price: "$598.00",
            photo: "https://images.pexels.com/photos/8774498/pexels-photo-8774498.jpeg"
     },
     {
       itemID: 3,
             itemType: "Refrigerator",
       itemName: " RS27T5200SR 27.4 Cu.",
       manufactorName: "Samsung",
       itemStock: 3,
             price: "$1,666.00",
             photo: "https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg"
     },
     {
       itemID: 4,
             itemType: "Freezer",
       itemName: "HMCF5W4 Chest Freezer",
       manufactorName: "Magic Chest",
       itemStock: 7,
             price: "$170.00",
             photo: "https://images.pexels.com/photos/6865456/pexels-photo-6865456.jpeg"
     },
     {
       itemID: 5,
             itemType: "KitchenSink",
       itemName: "SST33R-T Stainless Steel",
       manufactorName: "Soleil",
       itemStock: "5",
             price: "$169.68",
             photo: "https://images.pexels.com/photos/2098451/pexels-photo-2098451.jpeg"
     },
     {
       itemID: 6,
             itemType: "BathroomSink",
       itemName: "Drop-In Bathroom Sink",
       manufactorName: "Glacier Bay",
       itemStock: "4",
             price: "$39.00",
             photo: "https://images.pexels.com/photos/145512/pexels-photo-145512.jpeg"
     },
     {
       itemID: 7,
             itemType: "Toilet",
       itemName: "2-Piece 1.1 GPF/1.6 GPF",
       manufactorName: "Glacier Bay",
       itemStock: "6",
             price: "$99.00",
             photo: "https://images.pexels.com/photos/6444256/pexels-photo-6444256.jpeg"
     },
     {
       itemID: 8,
             itemType: "Shower",
       itemName: "Unidoor Plus Shower Enclosure",
       manufactorName: "DreamLine",
       itemStock: "2",
             price: "$879.99",
             photo: "https://images.pexels.com/photos/1909656/pexels-photo-1909656.jpeg"
     },
     {
       itemID: 9,
             itemType: "AC",
       itemName: "10,000 BTU Window Air Conditioner",
       manufactorName: "Frigidaire",
       itemStock: "10",
             price: "$379.00",
             photo: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg"
     },
     {
       itemID: 10,
             itemType: "SmokeDetector",
       itemName: "Smoke and Carbon Monoxide Alarm",
       manufactorName: "First Alert",
       itemStock: "25",
             price: "$43.99",
             photo: "https://th.bing.com/th/id/OIP._fgFgLj45XQaiAjCngtjQAHaFj?w=272&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
     },
     {
       itemID: 11,
             itemType: "Oven",
       itemName: "LDG4313ST Double-Oven Gas Range",
       manufactorName: "LG",
       itemStock: "3",
             price: "$1,499.00",
             photo: "https://images.pexels.com/photos/3992208/pexels-photo-3992208.jpeg"
     },
     {
       itemID: 12,
             "itemType": "Microwave",
       itemName: "NeoChef 0.9 Cu. ft. Countertop Microwave",
      manufactorName: "LG",
       itemStock: "7",
             price: "$179.99",
             photo: "https://images.pexels.com/photos/211761/pexels-photo-211761.jpeg"
     },
     {
       itemID: 13,
             itemType: "Heater",
       itemName: "DR-968H Portable Space Heater",
       manufactorName: "Dr Infared",
       itemStock: "11",
             price: "$132.00",
             photo: "https://images.pexels.com/photos/923289/pexels-photo-923289.jpeg"
     },
     {
       itemID: 14,
             itemType: "Lamp",
       itemName: "DR-968H Portable Space Heater",
       manufactorName: "Safaviech",
       itemStock: "18",
             price: "$69.87",
             photo: "https://images.pexels.com/photos/7439757/pexels-photo-7439757.jpeg"
     },
     {
       itemID: 15,
             itemType: "SmartVacuum",
       itemName: "Roomba 694 Wi-Fi Connected Robotic Vacuum Cleaner",
       manufactorName: "iRobot",
       itemStock: "12",
             price: "$274.99",
             photo: "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg"
     }
   ]
 }

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.productcount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>itemName</th>
              <th>price</th>
              <th>manufactorName</th>
            </tr>
          </thead>
          <tbody>
            {this.getproductRow()}
          </tbody>
          </table>
      </div>
    );
          }
          onRefreshClick=()=>{
            this.setState({productcount:17});
          }
          getproductRow=()=>{
            return(this.state.productss.map((prod)=> {
              return(
                <tr key={prod.itemID}>
                  <td>{prod.itemID}</td>
                  <td><img alt="Man I'm tired of this project"
                  height={100} width={200} 
                  src={prod.photo}
                  ></img></td>
                  <td>{prod.itemName}</td>
                  <td>{prod.price}</td>
                  <td>{prod.manufactorName}</td>
                </tr>
              );
            }))
          }
        }
          
  