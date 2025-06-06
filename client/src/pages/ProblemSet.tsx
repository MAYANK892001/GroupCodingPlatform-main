import { useState } from "react";
import CustomNavbar from "../components/CustomNavbar";
import ProblemList from "../components/ProblemList";
import MainHeading from "../components/MainHeading";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";

const ProblemSet = ({
    token,
    id,
}: {
    token: string | null;
    id: string | null;
}) => {
    const [username, setUsername] = useState<string>("");
    const [verified, setVerified] = useState<boolean>(false);
    const navigate = useNavigate();
    const [problemListData, setProblemListData] = useState();
    const customNavData: Navbar = {
        items: [
            { text: "All Topics", link_path: "/problemset" },
            { text: "Algorithms", link_path: "/problemset" },
            { text: "JavaScript", link_path: "/problemset" },
            { text: "DataBase", link_path: "/problemset" },
            { text: "Shell", link_path: "/problemset" },
        ],
    };

    const [searchQ, setSearchQ] = useState<string>("");

    const handleSearch = async (
        searchQuery: string,
        options: SortOptions = {
            acceptance_rate_count: "",
            difficulty: "",
            title: "",
        }
    ) => {
        const { acceptance_rate_count, difficulty, title } = options;
        try {
            const { data } = await axios.post(
                `${API_URL}/api/problem/all?search=${searchQuery}&acceptance=${acceptance_rate_count}&difficulty=${difficulty}&title=${title}`,
                { id }
            );
            setProblemListData(data);
        } catch (error) {
            console.error("Error searching:", error);
        }
    };

    useEffect(() => {
        axios
            .get(`${API_URL}/api/accounts/id/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
            .then(({ data }) => {
                setUsername(data.username);
                setVerified(true);
            })
            .catch((e: AxiosError) => {
                console.log(e);
                navigate("/sorry");
                setVerified(false);
            });

        axios
            .post(`${API_URL}/api/problem/all`, { id: id })
            .then(({ data }) => {
                setProblemListData(data);
            });
    }, []);

    return (
        <>
            {verified ? (
                <MainHeading data={{ username: username }} />
            ) : (
                <MainHeading data={{ status: "none" }} />
            )}

            <div className="h-[calc(100vh-60px)] overflow-hidden bg-blue-500">
                
                <div
                    id="cont"
                    className="relative flex flex-row h-[calc(100vh-60px)] w-full mt-[8px] "
                >
                    <div
                        id="explanation"
                        className="h-[calc(100%-16px)] bg-black border border-borders ml-[8px] rounded-lg w-[calc(100%-16px)] overflow-hidden"
                    >
                        <div className="w-full bg-black border-b border-borders ">
                            <div className="ml-[9px]">
                                <CustomNavbar data={customNavData} />
                            </div>
                        </div>
                        <div className="w-full h-[50px] bg-gray-800 flex items-center px-4 border-b border-gray-700">
    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
    </svg>
    <input
        type="text"
        placeholder="Search questions..."
        onChange={(e) => {
            handleSearch(e.target.value);
            setSearchQ(e.target.value);
        }}
        className="bg-transparent flex-grow outline-none text-sm placeholder-gray-400"
    />
</div>

                        <div>
                            <ProblemList
                                searchFn={handleSearch}
                                searchQuery={searchQ}
                                data={problemListData as any}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProblemSet;
