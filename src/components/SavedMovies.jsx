import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {UserAuth} from "../context/AuthContext";
import {db} from "../firebase";
import {updateDoc, doc, onSnapshot} from "firebase/firestore"
import {useEffect, useState} from "react";
import {AiOutlineClose} from "react-icons/ai"

const SavedMovies = () => {

    const [movies, setMovies] = useState([]);
    const {user} = UserAuth();

    const slideLeft = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovies(doc?.data().savedMovies);
        });
    }, [user?.email]);

    const movieRef = doc(db, "users", `${user?.email}`)

    const deleteMovie = async (id) => {
        try {
            const result = movies.filter((item) => item.id !== id);
            await updateDoc(movieRef, {
                savedMovies: result
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1 className="text-white font-bold md:text-xl p-4">My Shows</h1>
            <div className="relative flex items-center group">
                <MdChevronLeft
                    onClick={slideLeft}
                    className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                    size={40}/>
                <div id={"slider"}
                     className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    {movies.map((item, id) =>
                        <div key={id}
                            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                            <img src={`https://image.tmdb.org/t/p/w500${item?.img}`} alt={item?.title}/>
                            <div
                                className="absolute top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item?.title}</p>
                                <p onClick={() => deleteMovie(item.id)} className="absolute text-gray-300 top-4 right-5"><AiOutlineClose /></p>
                            </div>
                        </div>)}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                    size={40}/>
            </div>
        </div>
    );
};

export default SavedMovies;