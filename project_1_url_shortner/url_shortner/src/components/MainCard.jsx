// const MainCard = () => {
//   return (
//     <section className="bg-gray-900 border border-cyan-500 shadow-lg shadow-cyan-500/30  rounded-3xl p-6 ">
//       {/* m-5 */}
//       <div className="pb-5">
//         <h1 className="text-xl font-bold text-purple-700 ">
//           {/* [text-shadow:0_0_8px_rgb(124,58,237,0.9)] */}
//           Shorten any link — instantly
//           </h1>
//         <p className="text-slate-400 mt-1 text-sm max-w-xl">
//           Paste your long URL and get a compact, shareable link. Includes
//           history, copy, QR, and demo generation for offline use.
//         </p>
//       </div>

//       <form id="shrtnerForm"
//        action="" 
//        className="mt-6 grid gap-4">
//         <div
//          className="grid grid-cols-1 md:grid-cols-3 gap-3">
//           <input
//             id="longUrl"
//             type="url"
//             placeholder="https://example.com/very/long/path"
//             required
//             className="col-span-2 rounded-lg px-4 py-3  border  border-indigo-700/20 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 truncate"
//           />

           
//           <input
          
//             type="text"
//             placeholder="Custom-slug"
//             className="rounded-lg px-4 py-3 bg-transparent border border-indigo-700/20 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//         </div>

//         <div className="flex items-center gap-3">
//           <input
//             type="number"
//             placeholder="expiry days (0 = never)"
//             min="0"
//             className="rounded-lg px-4 py-2 bg-transparent border border-indigo-700/20 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
//           />

          // <button
          //   type="submit"
          //   className="ml-auto text-black font-semibold rounded-lg px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-400
          // shadow-[0_6px_30px_rgba(7,12,45,0.6),0_0_16px_rgba(59,130,246,0.12)]
          //  hover:from-green-700 hover:to-green-700 hover:text-white transition-all duration-300 cursor-pointer "
          // >
          //   Shorten
          // </button>

//           <button className="ml-2 px-3 py-2 rounded-lg text-sm border border-indigo-500/20 shadow-[0_6px_30px_rgba(7,12,45,0.5)] hover:bg-white/5">
//             clear
//           </button>
//         </div>

//         <p id="form-msg" className="text-sm text-rose-400 h-5"></p>
//       </form>

//       {/* Result section  */}

//       <div id="resultArea" className="mt-6 ">
//         <div className="flex flex-col bg-black/30 border-indigo-700/30 rounded-lg p-4">
//           <div className="min-w-0 truncate">
//             <a
//               href=""
//               target="_blank"
//               className="font-semibold text-cyan-300 truncate"
//             ></a>
//             <p
//               id="originalUrl"
//               className="text-xs text-slate-400 truncate mt-1"
//             ></p>
//           </div>
//           <div className="flex items-center gap-2">
//             <button className="px-3 py-2 rounded-lg bg-transparent border border-indigo-700/30 hover:bg-white/5">
//               Copy
//             </button>
//             <button className="px-3 py-2 rounded-lg bg-transparent border border-indigo-700/30 hover:bg-white/5">
//               Open
//             </button>
//             <button className="px-3 py-2 rounded-lg bg-transparent border border-indigo-700/30 hover:bg-white/5">
//               QR
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MainCard;












// src/components/MainCard.jsx

import "../index.css"; // import neon utilities

const MainCard = () => {
  return (
    <section className="neon-card rounded-3xl p-6 enter show">
      {/* Header inside card */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold neon-accent">Shorten any link — instantly</h2>
          <p className="text-slate-400 mt-1 text-sm max-w-xl">
            Paste your long URL and get a compact, shareable link. Includes history, copy, QR, and demo generation for offline use.
          </p>
        </div>

        {/* <div className="flex items-center gap-3">
          <div className="text-xs text-slate-400">Status</div>
          <div className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-cyan-700/40 to-indigo-800/40 border border-indigo-600/30">
            Frontend Demo
          </div>
        </div> */}
        
      </div>

      {/* URL Shortener Form */}
      <form className="mt-6 grid gap-4">
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="url"
            placeholder="https://example.com/very/long/path"
            required
            className="col-span-2 rounded-lg px-4 py-3 bg-transparent border border-indigo-700/20 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            placeholder="custom-slug (opt)"
            className="rounded-lg px-4 py-3 bg-transparent border border-indigo-700/20 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Expiry + Buttons */}
        <div className="flex items-center gap-3">
          <input
            type="number"
            placeholder="expiry days (0 = never)"
            min="0"
            className="rounded-lg px-4 py-2 bg-transparent border border-indigo-700/20 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
          />
          <button
            type="submit"
            className="ml-auto  text-black font-semibold rounded-lg px-5 py-2 bg-gradient-to-r from-cyan-300 to-blue-600 
            hover:from-green-700 hover:to-green-700 hover:text-white transition-all duration-300 cursor-pointer
            "
          >
            {/* hover:scale-105 transform transition-transform */}

            Shorten
          </button>
          <button
            type="button"
            className="ml-2 px-3 py-2 rounded-lg text-sm border border-purple-400/30 hover:bg-white/5  "
          >
            Clear
          </button>
        </div>

        {/* Placeholder for form messages */}
        <p className="text-sm text-rose-400 h-5"></p>
      </form>

      {/* Result / preview area (static placeholder for now) */}
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-black/30 border border-indigo-700/30 rounded-lg p-4">
          <div className="min-w-0 truncate">

            {/* <a href="#" target="_blank" rel="noopener" className="font-semibold text-cyan-300 truncate">
              —
            </a> */}
            
            <p className="text-xs text-slate-400 truncate mt-1">Shorted URL will appear here</p>
            {/* Original URL will appear here */}
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg bg-transparent border border-indigo-700/20 hover:bg-white/5">
              Copy
            </button>
            <button className="px-3 py-2 rounded-lg bg-transparent border border-indigo-700/20 hover:bg-white/5">
              Open
            </button>
            <button className="px-3 py-2 rounded-lg bg-transparent border border-indigo-700/20 hover:bg-white/5">
              QR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCard;


