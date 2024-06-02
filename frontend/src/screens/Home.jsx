import React, { useEffect, useState } from "react"; 
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { getProducts } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const images = ["https://www.giva.co/cdn/shop/files/Hero_web_Bestsellers-min.jpg?v=1714041427&width=3000", "https://www.giva.co/cdn/shop/files/Hero_web_Gold_Jewellery_2_-min.jpg?v=1714163504&width=3000" ];

const specialBanners = [
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714287618/SPARK%20Jewellery/specialBanners/t94chsdyaehh21s2myyw.webp",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714287618/SPARK%20Jewellery/specialBanners/i6vo1buaiy77osedm7s4.webp",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714287616/SPARK%20Jewellery/specialBanners/dazy8jthneoibpwmcgz3.webp",
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
                            <div key={index} className="sm:w-1/3">
                                <img src={item.image} alt={"img"} className="w-full h-full object-cover" />
                            </div>
                        ))
                    }
                    </div>

                    {/* Most Ordered */}
                    {/* <div className="my-8">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-light">Most Ordered</h1>
                            <Link to={"/products"} className="text-sm font-normal text-gray-500 cursor-pointer hover:underline">View All</Link>
                        </div>
                        <div className="flex items-center justify-between gap-8 py-8">
                        {
                            products && products.map((item, index) => (
                                <div key={item._id} className="rounded-lg shadow-md overflow-hidden bg-white w-1/4">
                                    <div className="relative">
                                        <img className="w-full h-48 object-cover" src={item.images[0].imageUrl} alt={item.images[0].imageUrl} />
                                        <div className="shadow flex items-center justify-center bg-gray-100 text-sm rounded-full absolute bottom-0 left-0 m-4 px-2">
                                            <span>{item.ratingsCount}</span>
                                            <FaStar className="text-yellow-500" />
                                            <span className="px-1">|</span>
                                            <span>{item.reviewsCount}</span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h5 className="text-xl font-light tracking-tight text-gray-900 text-nowrap overflow-hidden text-ellipsis">
                                        {item.name}
                                        </h5>
                                        <p className="mt-1 text-md font-bold text-gray-700">Rs {item.discountPrice.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center justify-between px-4 pb-2">
                                        <Link
                                        to={`/product/${item._id}`}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
                                        >
                                        View Details
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default Home;