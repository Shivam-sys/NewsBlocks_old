// import React from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
// // import { Fragment } from "react/cjs/react.production.min";
// const countries = [
//   {
//     text: "Argentina",
//     code: "ar",
//     avatar: "https://flagcdn.com/w20/ar.png",
//   },
//   {
//     text: "United States",
//     code: "us",
//     avatar: "https://flagcdn.com/w20/za.png",
//   },
//   {
//     text: "Venuzuela",
//     code: "ve",
//     avatar: "https://flagcdn.com/w20/za.png",
//   },
// ];

// export default function Countrydrop(props) {
//   let selectedd = props.country;
//   let changeCountry = props.setCountry;
//   return (
//     <Listbox value={selectedd} onChange={changeCountry}>
//       {({ open }) => (
//         <>
//           <Listbox.Label>Country:</Listbox.Label>
//           <Listbox.Button>{selectedd}</Listbox.Button>
//           {open && (
//             <div>
//               <Transition
//                 show={open}
//                 enter="transition duration-100 ease-out"
//                 enterFrom="transform scale-95 opacity-0"
//                 enterTo="transform scale-100 opacity-100"
//                 leave="transition duration-75 ease-out"
//                 leaveFrom="transform scale-100 opacity-100"
//                 leaveTo="transform scale-95 opacity-0"
//               >
//                 <Listbox.Options static>
//                   {countries.map((c) => {
//                     return (
//                       <Listbox.Option key={c.code} value={c.text}>
//                         {({ active, selected }) => (
//                           <li
//                             className={`${
//                               active
//                                 ? "bg-blue-500 text-white"
//                                 : "bg-white text-black"
//                             }`}
//                           >
//                             {selected && <CheckIcon />}
//                             {c.text}
//                           </li>
//                         )}
//                       </Listbox.Option>
//                     );
//                   })}
//                 </Listbox.Options>
//               </Transition>
//             </div>
//           )}
//         </>
//       )}
//     </Listbox>
//   );
// }
