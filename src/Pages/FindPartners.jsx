import Container from "../MyComponents/Container";
import TextType from "../Components/CreateProfile/TextType";
import FindPartnerCard from "../Components/FindPartner/FindPartnerCard";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useAuth from "../Hooks/useAuth";
import Spinner from "../Spinner/Spinner";

const FindPartners = () => {
    const Axios = useAxios();
    const { setLoading, loading } = useAuth();
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState("");

    useEffect(() => {
        Axios.get("/partner")
            .then(data => setData(data.data));
    }, [Axios]);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [setLoading]);

    if (loading) return <Spinner />;

    const handleSort = async (e) => {
        e.preventDefault();
        const value = e.target.value;
        setSortType(value);

        if (value === "experience-low") {
            const result = await Axios.get("/experience");
            setData(result.data);
        }
        else if (value === "experience-high") {
            const result = await Axios.get("/experienceHigh");
            setData(result.data);
        }
        else if (value === "rating") {
            const result = await Axios.get("/rating");
            setData(result.data);
        }
        else if (value === "name") {
            const result = await Axios.get("/name");
            setData(result.data);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        const search = e.target.search.value.trim();
        const result = await Axios.get(`/search?search=${search}`);
        setData(result.data);
    };

    return (
        <div className="mt-10 mb-24 ">
            <Container>
                {/* Heading */}
                <div className="flex justify-center text-center">
                    <TextType
                        className="text-3xl sm:text-4xl font-extrabold text-gradient bg-clip-text text-transparent"
                        text={["Find Partner", "Find Partner"]}
                        typingSpeed={75}
                        pauseDuration={5000}
                        showCursor={true}
                    />
                </div>

                {/* Sort & Search Section */}
                <div className="my-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5">
                    {/* Sort */}
                    <div className="w-full sm:w-auto">
                        <select value={sortType} onChange={handleSort} className="select select-bordered w-full sm:w-56">
                            <option disabled value="">Sort by Experience</option>
                            <option value="rating">Rating (5-1)</option>
                            <option value="experience-low">Experience (low - high)</option>
                            <option value="experience-high">Experience (high - low)</option>
                            <option value="name">Name (A-Z)</option>
                        </select>
                    </div>

                    {/* Search */}
                    <form onSubmit={handleSearch} className="join w-full sm:w-auto flex justify-center">
                        <label className="input validator join-item grow w-fit sm:w-auto">
                            <input type="search" name="search" className="grow w-full" placeholder="Search" />
                        </label>
                        <button type="submit" className="my-btn join-item flex items-center justify-center">
                            <IoIosSearch size={24} />
                        </button>
                    </form>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10 px-3 sm:px-5 lg:px-10">
                    {data.map(item => (
                        <FindPartnerCard key={item._id} data={item} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default FindPartners;
