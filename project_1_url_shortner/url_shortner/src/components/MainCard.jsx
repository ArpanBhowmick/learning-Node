const MainCard = () => {
  return (
    <section className="border-2 rounded-3xl p-5 m-5">
      <div className="pb-5">
        <h1 className="font-bold">Shorten any link — instantly</h1>
        <p className="max-w-2xl">
          Paste your long URL and get a compact, shareable link. Includes
          history, copy, QR, and demo generation for offline use.
        </p>
      </div>

      <form id="shrtnerForm" action="" className="mt-6 grid gap-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          <input
           type="url"
            placeholder="https://example.com/very/long/path"
            required
            className="col-span-2 rounded-lg px-4 py-3 bg-transparent border border-indigo-700/20 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />

          <input
           type="text"
            placeholder="Custom-slug"
             className="rounded-lg px-4 py-3 bg-transparent border border-indigo-700/20 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>

        <div className="flex items-center gap-3">
          <input
           type="number" 
           placeholder="expiry days (0 = never)"
           min="0"
            className="rounded-lg px-4 py-2 bg-transparent border border-indigo-700/20 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm" />

          <button 
          type="submit"
          className="ml-auto text-black font-semibold rounded-lg px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-400
          shadow-[0_6px_30px_rgba(7,12,45,0.6),0_0_16px_rgba(59,130,246,0.12)]
           hover:from-green-700 hover:to-green-700 hover:text-white transition-all duration-300 cursor-pointer ">
            Shorten
            </button>

          <button 
          className="ml-2 px-3 py-2 rounded-lg text-sm border border-indigo-500/20 shadow-[0_6px_30px_rgba(7,12,45,0.5)] hover:bg-white/5">
            clear
            </button>

        </div>
        <p id="form-msg"></p>
      </form>
    </section>
  );
};

export default MainCard;
