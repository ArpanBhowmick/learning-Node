

const History = () => {
  return (

    <>
    
    <div className="grid grid-col-1 md:grid-cols-3 gap-6">


      {/* history  */}


     <aside className="bg-gray-900 border border-cyan-500 shadow-lg shadow-cyan-500/30 rounded-2xl p-4 md:col-span-2">
     
     {/* bg-white/5 border border-indigo-700/20 shadow-[0_6px_30px_rgba(7,10,28,0.7)] backdrop-blur-sm backdrop-saturate-120 rounded-3xl p-4 */}

            <div className="flex items-center justify-between mb-3">
                
                <h3 className="text-lg font-semibold text-purple-600 ">
                    {/* drop-shadow-[0_0_8px_rgba(124,58,237,0.9)] */}
                    History
                    </h3>

                <div className="text-sm text-slate-400">Recent</div>
            </div>

            <div id="historyList" className="space-y-3"></div>
            <p id="noHistory" className="text-sm text-slate-400 mt-2">No shortened links yet</p>

        </aside>

        {/* Live preview / QR + info */}

        <aside className="bg-gray-900 border border-cyan-500 shadow-lg shadow-cyan-500/30 rounded-2xl p-6">

        <div className="mb-3">

            <h4 className="text-sm font-medium text-purple-600 ">
                Live Preview
            </h4>

            <p className="text-xs text-slate-400 mt-1">
                Click shorten to preview link and generate QR
            </p>
        </div>

        <div className="bg-black/30 border border-indigo-30 rounded-lg p-3 text-center">
            <div
             id="previewShort" 
             className="text-cyan-300 font-semibold  break-all flex justify-center items-center">

                <div className="w-14 h-[2px] bg-cyan-300 rounded-full"></div>
                
            </div>

            <div>
                <p className="text-xs text-slate-400 mt-1">
                Original URL will appear here 
                </p>
            </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
            <button id="previewCopy" className="px-3 py-2 rounded-lg bg-transparent border border-indigo-700/20">
                Copy
            </button>
            <button id="previewOpen" className="px-3 py-2 rounded-lg bg-transparent border border-indigo-700/20">
                Open
            </button>
        </div>
        </aside> 
    </div>
    </>
   
  )
}

export default History