// import React, { Component } from "react";
// import { Listbox } from "@headlessui/react";
// // import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

// // const { Listbox } = require("@headlessui/react");

// export default class Countrydrop extends Component {
//   countries = [
//     {
//       ar: {
//         text: "Argentina",
//         code: "ar",
//         avatar: "https://flagcdn.com/w20/ar.png",
//       },
//     },
//     {
//       us: {
//         text: "United States",
//         code: "us",
//         avatar: "https://flagcdn.com/w20/za.png",
//       },
//     },
//     {
//       ve: {
//         text: "Venuzuela",
//         code: "ve",
//         avatar: "https://flagcdn.com/w20/za.png",
//       },
//     },
//   ];

//   selected = this.props.country;
//   render() {
//     return (
//       <>
//         <Listbox value="in">
//           <Listbox.Button>{this.selected}</Listbox.Button>
//           <Listbox.Options>
//             {this.countries.map((c) => {
//                 <Listbox.Option key={c.code} value={c.text}>
//                 {c.text}
//               </Listbox.Option>;
//             })}
//           </Listbox.Options>
//         </Listbox>
//       </>
//     );
//   }
// }
