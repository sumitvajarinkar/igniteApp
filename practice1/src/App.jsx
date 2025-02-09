// ! Simple app with harcoded data - called component render hardcoded data

// import "./App.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <img
//           src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
//           alt="logo"
//         />
//       </div>
//       <div className="nav-item">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Store</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = () => {
//   return (
//     <div className="restaurant-card">
//       <img
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e8fe88f0-e41d-4995-b044-2ddb772042c5_625226.jpg"
//         alt=""
//       />
//       <div className="card-content">
//         <h3>Pizzhut</h3>
//         <h3>Pizza, snacks, drinks</h3>
//         <h4>Deliver in 30 min</h4>
//         <h4>Rating : 4.5</h4>
//       </div>
//     </div>
//   );
// };

// const Body=()=>{
// return(
//   <div className="body">
//   <div className="search">
//     Search
//   </div>
//   <div className="restaurant-cards">
//     <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/>
//   </div>
//   </div>

// )
// }

// function App() {
//   return (
//     <>
//       <Header />
//       <Body />
//     </>
//   );
// }

// export default App;

//! ***************************************************************************************************************
//todo : Passed data from component to render UI

// import "./App.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <img
//           src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
//           alt="logo"
//         />
//       </div>
//       <div className="nav-item">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Store</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// // todo: Destructuring on fly
// const RestaurantCard = ({ name, cuisines, rating, price }) => {
//   //todo normal destructuring
//   // const RestaurantCard = (props) => {
//   // const {name,cuisines,rating,price}=props;
//   return (
//     <div className="restaurant-card">
//       <img
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e8fe88f0-e41d-4995-b044-2ddb772042c5_625226.jpg"
//         alt=""
//       />
//       <div className="card-content">
//         <h3>{name}</h3>
//         <h3>{cuisines}</h3>
//         <h4>{rating} Stars</h4>
//         <h4>Rs. {price}</h4>
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <>
//       <div className="search">Search</div>
//       <div className="restaurant-cards">
//         {/* {
//           todo : passing as pops ""
//         } */}
//         <RestaurantCard
//           name="Raja foods"
//           cuisines="Snacks, Drinks"
//           rating="3.5"
//           price="400"
//         />
//         <RestaurantCard
//           name="Raja foods"
//           cuisines="Snacks, Drinks"
//           rating="3.5"
//           price="400"
//         />
//       </div>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <Header />
//       <Body />
//     </>
//   );
// }

// export default App;

// ! *********************************************************************************************************************************
//todo : Here 1 restaurant as object

// import "./App.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <img
//           src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
//           alt="logo"
//         />
//       </div>
//       <div className="nav-item">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Store</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const resObj = {
//   info: {
//     id: "21001",
//     name: "Pizza Hut",
//     cloudinaryImageId:
//       "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/1a74ecfe-ccf6-43b8-9288-eb91319bdce8_21001.jpg",
//     locality: "F.C. Road",
//     areaName: "Shivajinagar",
//     costForTwo: "₹350 for two",
//     cuisines: ["Pizzas"],
//     avgRating: 4.2,
//     parentId: "721",
//     avgRatingString: "4.2",
//     totalRatingsString: "12K+",
//     sla: {
//       deliveryTime: 28,
//       lastMileTravel: 2.6,
//       serviceability: "SERVICEABLE",
//       slaString: "25-30 mins",
//       lastMileTravelString: "2.6 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2025-01-20 02:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "₹300 OFF",
//       subHeader: "ABOVE ₹1699",
//       discountTag: "FLAT DEAL",
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "4.3",
//         ratingCount: "4.5K+",
//       },
//       source: "GOOGLE",
//       sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//   },
//   analytics: {
//     context: "seo-data-f6d45a53-1086-4944-b918-4d5752dc8cb9",
//   },
//   cta: {
//     link: "https://www.swiggy.com/city/pune/pizza-hut-f-c-road-shivajinagar-rest21001",
//     type: "WEBLINK",
//   },
// }
// const RestaurantCard = (props) => {
//   console.log(props);
//   const { resData } = props;
//   console.log("data", resData?.info?.name);

//   return (
//     <div className="restaurant-card">
//       <img
//         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}
//         alt="card img"
//       />
//       <div className="card-content">
//         <h3>{resData?.info?.name}</h3>
//         <h3>{resData?.info?.cuisines.join(", ")}</h3>
//         <h4>{resData?.info?.avgRating} Stars</h4>
//         <h4>Rs. {resData?.info?.costForTwo}</h4>
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="restaurant-cards">
//         <RestaurantCard resData={resObj} />
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <>
//       <Header />
//       <Body />
//     </>
//   );
// }

// export default App;

// ! *********************************************************************************************************************************
// todo : here object of array need to render using map.

// import "./App.css";
// import {resList} from "./config.js"

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <img
//           src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
//           alt="logo"
//         />
//       </div>
//       <div className="nav-item">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Store</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = (props) => {
//   console.log(props);
//   const { resData } = props;
//   console.log("data", resData?.info?.name);

//   return (
//     <div className="restaurant-card">
//       <img
//         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}
//         alt="card img"
//       />
//       <div className="card-content">
//         <h3>{resData?.info?.name}</h3>
//         <h4>{resData?.info?.cuisines?.join(", ")}</h4>
//         <h4>{resData?.info?.avgRating} Stars</h4>
//         <h4>Rs. {resData?.info?.costForTwo}</h4>
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="restaurant-cards">
//         {resList.map((restaurant, i) => {
//           return <RestaurantCard key={i} resData={restaurant} />;
//         })}
//         {/* <RestaurantCard resData={resList[1]} />; */}
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <>
//       <Header />
//       <Body />
//     </>
//   );
// }

// export default App;

  // ! *********************************************************************************************************************************
  //todo : here object of array need to render using map.

import "./App.css";
import {resList} from "./config";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Store</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  costForTwo,
  cloudinaryImageId,
}) => {
  // console.log(props);
  // const { resData } = props;
  // console.log("data", resData?.info?.name);
  // const { name, cuisines, avgRating, costForTwo } = resData?.info;
  // console.log(name, cuisines, avgRating, costForTwo, cloudinaryImageId);

  return (
    <div className="restaurant-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="card img"
      />
      <div className="card-content">
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>Rs. {costForTwo}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-cards">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          );
        })}
        {/* // todo : One liner code for map without return */}
        {/* {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
        ))} */}
        {/* <RestaurantCard resData={resList[1]} />; */}
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
