
function Cards({ children, status=50, ProgressBarColor="text-blue-400",  borderColor="border-t-blue-400", titleText = "Card", quantity = 50 }){
    return(
        
         <div className={`bg-[#161B22] border border-white/[0.08]
            border-t-[3px] ${borderColor} rounded-2xl
            p-5 w-70 flex flex-col  gap-2`}>
                <div className="flex items-start justify-start gap-8 text-xl">
                    {children} <span className="text-4xl items-start text-white/35">{titleText}</span>
                </div>
                <div className="divider "></div>
                <div className="flex justify-center gap-8 mt-2 ml-2">
                    <div className="text-7xl">
                        {quantity}
                    </div>
                    <div className={`radial-progress ${ProgressBarColor}`} style={{ "--value": status } /* as React.CSSProperties */ } aria-valuenow={70} role="progressbar">
                        {status}
                    </div>
                </div>
        </div>
    );
}
export default Cards;