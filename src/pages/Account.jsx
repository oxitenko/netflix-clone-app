import SavedMovies from "../components/SavedMovies";

const Account = () => {
    return (
        <>
            <div className="w-full text-white">
                <img className="w-full h-[400px] object-cover"
                     src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/56e9a99d-45ab-4a9d-84c3-0a09a5708cb8/LT-ru-20230116-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                     alt="/"/>
                <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
                </div>
            </div>
            <SavedMovies />
        </>
    );
};

export default Account;