import React from 'react'

function TrustBadges() {
  return (
    <> <div className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-3xl font-bold text-center mb-10">Trusted By The Industry's Best</h2>
        <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-6 lg:gap-8">
            {/* Trust Badge 1 */}
            <div className="flex border-2 border-white rounded-lg p-2 md:p-3 space-x-2 w-full max-w-[200px] sm:w-auto">
                <div className="flex items-center text-sm text-white font-bold inc-years pt-2">
                    9 YEARS
                </div>
            </div>
            {/* Trust Badge 2 */}
            <div className="flex flex-col border-2 border-white rounded-lg p-3 w-full max-w-[150px] sm:w-auto items-center justify-center text-center">
                <div className="text-white text-3xl font-black mb-1">
                    G
                </div>
                <div className="text-sm font-medium text-white leading-tight">
                    Google Partner
                </div>
                <div className="text-[0.6rem] font-bold text-yellow-400 mt-1 uppercase tracking-wider">
                    PREMIER 2025
                </div>
            </div>
            {/* Trust Badge 3 */}
            <div className="flex border-2 border-white rounded-lg w-full max-w-[200px] sm:w-auto">
                <div className="flex items-center text-sm text-white font-bold inc-years p-1">
                    2025
                </div>
                <div className="flex flex-col p-3 md:p-4 items-center justify-center text-center">
                    <svg viewBox="0 0 100 100" className="w-6 h-6 mb-1" fill="#fff">
                        <rect x="0" y="0" width="45" height="45" />
                        <rect x="55" y="0" width="45" height="45" />
                        <rect x="0" y="55" width="45" height="45" />
                        <rect x="55" y="55" width="45" height="45" />
                    </svg>
                    <div className="text-sm font-medium text-white leading-tight">
                        Microsoft Advertising
                    </div>
                    <div className="text-xl font-bold text-white mt-1">
                        Select Partner
                    </div>
                </div>
            </div>
            {/* Trust Badge 4 */}
            <div className="flex border-2 border-white rounded-lg p-3 w-full max-w-[150px] sm:w-auto items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <span className="text-white text-2xl font-black mb-1">
                        BBB
                    </span>
                    <div className="text-white text-xl font-bold leading-none">
                        A+
                    </div>
                    <div className="text-white text-sm leading-none mt-1">
                        rating.
                    </div>
                </div>
            </div>
            {/* Trust Badge 5 */}
            <div className="flex flex-col border-2 border-white rounded-lg p-3 w-full max-w-[150px] sm:w-auto items-center justify-center text-center">
                <div className="flex text-white text-2xl font-extrabold mb-1 items-center space-x-0.5">
                    <span className="text-4xl leading-none">&infin;</span> 
                    <span>Meta</span>
                </div>
                <div className="text-sm font-medium text-white leading-tight">
                    Business Partner
                </div>
            </div>
            {/* Trust Badge 6 */}
            <div className="flex flex-col border-2 border-white rounded-lg p-3 w-full max-w-[180px] sm:w-auto items-center justify-center text-center">
                 <div className="text-white text-lg font-black mb-1 flex items-center">
                     <span className="text-white font-bold text-2xl mr-1">amazon</span><span className="text-white text-xs">ads</span>
                </div>
                <div className="text-sm font-medium text-white leading-tight">
                    Verified partner
                </div>
            </div>
        </div>
    </div></>
  )
}

export default TrustBadges