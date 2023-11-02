// import { useState } from "react";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { IoIosStats } from "react-icons/io";
// import { FaUserPlus } from "react-icons/fa";
// import { IoMdPie } from "react-icons/io";
// import Heading from "../../elements/heading";

// interface CustomCardProps {
//   type?: any;
// }

// const CustomCard = ({ type }: CustomCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const BackgroundColor = ` ${
//     type === "orders"
//       ? "bg-card1"
//       : type === "rate"
//       ? "bg-card2"
//       : type === "registrations"
//       ? "bg-card3"
//       : type === "visitors"
//       ? "bg-card4"
//       : "bg-white"
//   }`;

//   const HeadingType = ` ${
//     type === "orders"
//       ? "150"
//       : type === "rate"
//       ? "53%"
//       : type === "registrations"
//       ? "44"
//       : type === "visitors"
//       ? "65"
//       : ""
//   }`;

//   const InfoType = ` ${
//     type === "orders"
//       ? "New Orders"
//       : type === "rate"
//       ? "Bounce Rate"
//       : type === "registrations"
//       ? "User Registrations"
//       : type === "visitors"
//       ? "Unique Visitors"
//       : ""
//   }`;

//   const getIcon = () => {
//     return type === "orders" ? (
//       <HiOutlineShoppingBag />
//     ) : type === "rate" ? (
//       <IoIosStats />
//     ) : type === "registrations" ? (
//       <FaUserPlus />
//     ) : type === "visitors" ? (
//       <IoMdPie />
//     ) : null;
//   };

//   return (
//     <div
//       className={` ${BackgroundColor} rounded-lg shadow-lg max-w-full w-full flex-wrap `}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex justify-between m-4 flex-grow">
//         <div className="text-white">
//           <Heading priority="2" color="white">
//             {HeadingType}
//           </Heading>
//           <Heading priority="5" color="white">
//             {InfoType}
//           </Heading>
//         </div>
//         <div
//           className={`text-gray-600 opacity-40 transition-transform transform ${
//             isHovered ? "scale-125" : "scale-100"
//           }`}
//         >
//           {getIcon()}
//         </div>
//       </div>
//       <div className="card-footer bg-gray-600 opacity-40 rounded-b-lg p-1 sticky bottom-0">
//         <a href="/" className="card-more-info text-white ">
//           More info
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CustomCard;
