
function Cards({ children, footer="Open", status=50, ProgressBarColor="text-blue-400",  borderColor="border-t-blue-400", titleText = "Card", quantity = 50 }){
    return(
         <div className={`bg-[#161B22] border border-white/[0.08]
            border-t-[5px] ${borderColor} rounded-2xl
            p-5 w-60 hover:scale-115 duration-300 ease-out flex flex-col cursor-pointer hover:scale-100 gap-2`}>
                <div className="flex items-center justify-start gap-6 text-xl">
                     <span className={`text-2xl  items-start ${ProgressBarColor}`}>{titleText}</span>
                </div>
                <div className="flex justify-center gap-8 mt-1 ml-2">
                    <div className="text-6xl">
                        {quantity}
                    </div>
                    <div className={`radial-progress ${ProgressBarColor}`} style={{ "--value": status } /* as React.CSSProperties */ } aria-valuenow={60} role="progressbar">
                        {status*100}%
                    </div>
                </div>
                <div className="flex gap-4 mt-3">
                    {children}
                </div>
        </div>
    );
}

export default Cards;