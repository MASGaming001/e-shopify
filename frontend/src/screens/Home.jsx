import React, { useEffect, useState } from "react"; 
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { getProducts } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import banner from "../assets/homebanner.webp";
import banner1 from "../assets/b1.jpg";
import banner2 from "../assets/b2.jpg";
const images = [banner];

const specialBanners = [
    {
        image: banner1,
    },
    {
        image: banner2,
    },
];

const collections = [
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291885/SPARK%20Jewellery/collections/pendants_wndu5s.webp",
        name: "Pendants",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291888/SPARK%20Jewellery/collections/rings_hdhzsv.webp",
        name: "Rings",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291877/SPARK%20Jewellery/collections/earrings_srxoi9.webp",
        name: "Earrings",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291802/SPARK%20Jewellery/collections/bracelets_w33sy6.webp",
        name: "Bracelets",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714312020/SPARK%20Jewellery/collections/chains_vcl4ar.webp",
        name: "Chains",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291880/SPARK%20Jewellery/collections/mangalsutras_hzykud.webp",
        name: "Mangalsutras",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291882/SPARK%20Jewellery/collections/nosepins_w8vuve.webp",
        name: "Nose Pins",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291899/SPARK%20Jewellery/collections/toerings_djresk.webp",
        name: "Toe Rings",
    },
];


const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, []);

    if(loading === true) return <Loader />

    return(
        <>
            <Carousel items={images} />
            <div className="z-20 w-full text-gray-900 sm:px-0 px-4">
                <div className="max-w-[1200px] mx-auto">
                    {/* collections */}
                    <div className="my-8">
                        <h1 className="text-3xl font-light">Collections</h1>
                        <div className="flex items-center sm:justify-between justify-center gap-8 py-8 flex-wrap">
                            {
                                collections.map((item, index) => (
                                    <Link to={`/products/${item.name}`} key={index} className="w-20">
                                        <img src={item.image} alt={item.name} className="rounded-lg shadow-md shadow-gray-300 hover:scale-105 transition-all duration-500" />
                                        <p className="text-center text-sm mt-1">{item.name}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    {/* special banners */}
                    <div className="flex items-center sm:justify-between justify-center gap-8 my-8 sm:flex-nowrap flex-wrap">
                    {
                        specialBanners.map((item, index) => (
                            <div key={index} className="">
                                <img src={item.image} alt={"img"} className="w-full h-full object-cover" />
                            </div>
                        ))
                    }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;