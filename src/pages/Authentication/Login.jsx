function Login(){
    return (
        <div className="flex justify-center items-center h-[90vh]">
            <div className="card bg-neutral text-neutral-content w-96">
                <div class="flex flex-col items-center mb-6 mt-6">
                    <div class="w-16 h-16 rounded-full bg-[#1a2a3a] border-2 border-[#38c9f0] flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#38c9f0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="8" r="4" fill="#38c9f0" stroke="none"/>
                            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#38c9f0" stroke-width="1.8"/>
                        </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-white tracking-wide">Welcome Back</h2>
                    <p class="text-sm text-slate-400 mt-1">Login in to your account</p>
                </div>
                <div className="card-body items-center text-start">
                    <div className="w-full">
                        <div>USER ID</div>
                    </div>
                    <div className="w-full">
                        <input type="text" placeholder="Enter user id " className="input input-primary" />
                    </div>
                    <div className="w-full">
                        <div>PASSWORD</div>
                    </div>
                    <div className="w-full">
                        <input type="password" placeholder="Enter password" className="input input-primary" />
                    </div>
                    <div className="w-full">
                        <button className="btn btn-warning  font-bold text-lg w-full mt-8">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
