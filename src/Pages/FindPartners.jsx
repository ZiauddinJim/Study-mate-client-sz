import { Link } from "react-router";
import Container from "../MyComponents/Container";
import TextType from "../Components/CreateProfile/TextType";
import FindPartnerCard from "../Components/FindPartner/FindPartnerCard";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useAuth from "../Hooks/useAuth";
import Spinner from "../Spinner/Spinner";

const FindPartners = () => {
    const Axios = useAxios()
    const { setLoading, loading } = useAuth()
    const [data, setData] = useState([])
    const [sortType, setSortType] = useState("")

    useEffect(() => {
        Axios.get("/partner")
            .then(data => {
                // console.log(data.data);
                setData(data.data)
            })
    }, [Axios])

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500)
        return () => clearTimeout(timer)
    }, [setLoading])
    if (loading) return <Spinner />;


    // Section: handle Sort Data
    const handleSort = async (e) => {
        e.preventDefault();
        const value = e.target.value;
        // console.log(value);
        setSortType(value)

        if (value === "rating") {
            const result = await Axios.get("/rating");
            setData(result.data)
        }
        else if (value === "experience") {
            const result = await Axios.get("/experience");
            setData(result.data)
        }
        else if (value === "name") {
            const result = await Axios.get("/name")
            setData(result.data)
        }
    }
    const handleSearch = async (e) => {
        e.preventDefault();
        const search = e.target.search.value.trim();
        // console.log(search);
        const result = await Axios.get(`/search?search=${search}`)
        console.log(result.data);
        setData(result.data)
    }


    return (
        <div className=" my-10">
            <Container>
                <div className="flex justify-center">
                    <TextType
                        className="text-4xl w-fit font-extrabold text-gradient bg-clip-text text-transparent"
                        text={[
                            "Find Partner",
                            "Find Partner"
                        ]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                    />
                </div>

                <div className="my-5 flex justify-between items-center flex-wrap gap-3">
                    {/* Sort Bar */}
                    <div>
                        <select value={sortType} onChange={handleSort} className="select select-bordered w-50">
                            <option disabled selected value="">Sort by</option>
                            <option value="rating">Rating (5-1)</option>
                            <option value="experience">Experience (high - low)</option>
                            <option value="name">Name (A-Z)</option>
                        </select>
                    </div>

                    {/* Search Bar  */}
                    <form onSubmit={handleSearch} className="join">
                        <label className="input validator join-item">
                            <input type="search" name="search" className="grow" placeholder="Search" />
                        </label>
                        <button type="submit" className="my-btn join-item">
                            <IoIosSearch size={30} />
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 mx-5 lg:mx-auto">
                    {
                        data.map(data => <FindPartnerCard key={data._id} data={data} />)
                    }

                </div>
            </Container >
        </div >
    );
};

export default FindPartners;
