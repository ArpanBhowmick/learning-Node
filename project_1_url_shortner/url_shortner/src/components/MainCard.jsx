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

        <form action="" >
            <div className="flex justify-between">
                <input type="text" placeholder="Enter long Url" className="border"/>
                <input type="text" placeholder="Custom-slug " className="border"/>
            </div>
            <div>
                <input type="date" placeholder="expiry date"/>
                <button>
                    Shorten
                </button>
                <button>
                    clear
                </button>
            </div>
            <p id="form-msg"></p>
        </form>

    </section>
  );
};

export default MainCard;
