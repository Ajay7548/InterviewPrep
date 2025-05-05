import React, { useEffect, useState, useRef } from "react";

// Throttle function scroll evenet 
// const throttle = (func, delay) => {
//   let lastCall = 0;
//   return (...args) => {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       func(...args);
//     }
//   };
// };

// const App = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = throttle(() => {
//       if (scrollRef.current) {
//         setScrollY(scrollRef.current.scrollTop);
//       }
//     }, 200);

//     const scrollContainer = scrollRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       if (scrollContainer) {
//         scrollContainer.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full h-screen flex flex-col gap-4 p-4 bg-gray-950 text-white">
//       <h1 className="text-3xl font-semibold mb-4 text-center">
//         Scroll event Throttle
//       </h1>
//       <p className="text-center mb-2">Scroll Position (Y): {scrollY}px</p>

//       <div
//         ref={scrollRef}
//         className="overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2"
//       >
//         {/* CARDS SECTION (Fixed JSX with className) */}
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//           >
//             <a href="#">
//               <img
//                 className="rounded-t-lg"
//                 src="/docs/images/blog/image-1.jpg"
//                 alt=""
//               />
//             </a>
//             <div className="p-5">
//               <a href="#">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Noteworthy technology acquisitions 2021
//                 </h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Here are the biggest enterprise technology acquisitions of 2021
//                 so far, in reverse chronological order.
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Read more
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


import ResizeTracker from './ResizeTracker'


const App = () => {
  return (
    <div className='bg-gray-950 h-screen w-full text-white text-center'>
     <ResizeTracker/>
    </div>
  )
}

export default App