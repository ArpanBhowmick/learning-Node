

const Header = () => {
  return (
    <header className="flex justify-between w-full  h-16 md:h-21 bg-gray-600 sm:items-center gap-4">
        
        <div className="flex items-center gap-4">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 12h18M12 3v18"/>
              </svg>
            </div>
        

            <div>
                <h1 className="text-3xl font-extrabold">
                  Neon Short
                  {/* Url Shortner */}
                  </h1>
                <p className="text-slate-400 text-sm">Futuristic URL shortener - with neon UI & interactive UX</p> 
            </div>
        
        </div>

        {/* toggle dark/light mode  */}

        <div className="flex items-center gap-3 border">
            <button id="themeToggle" className="">
                toggle light
            </button>
        </div>


    </header>
  )
}

export default Header