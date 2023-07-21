import { useEffect, useState } from "react"
import "./style.scss"
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Image from "../../../components/lazyLoadImage/Image";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { data, loading } = useFetch("/movie/upcoming");
    const { url } = useSelector((state) => state.home);

    useEffect(() => {
        const bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        // console.log('bg', bg);
        setBackground(bg);
    }, [data, url])

    const searchQueryHandler = (event) => {
        // console.log(event);
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }
    return (
        <div className="heroBanner">
            {
                !loading && <div className="backdrop-img">
                    <Image src={background} />
                </div>
            }
            <div className="opacity-layer"></div>
            <ContentWrapper >
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Millions of movies,TV shows and pepole to discover.Explore now</span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for movies or tv shows..."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}

                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner