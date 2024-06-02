import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const [keyword, setKeyword] = useState("");

    return(
        <div className="z-20 w-full bg-cyan-300 text-black">
            <div className="max-w-[1200px] sm:mx-auto py-8 px-2">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold pb-2">Quick Links</h2>
                        <ul>
                            <li className="leading-7"><Link className="cursor-pointer hover:underline underline-offset-4">Customer Reviews</Link></li>
                            <li className="leading-7"><Link className="cursor-pointer hover:underline underline-offset-4">Our Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold pb-2">Info</h2>
                        <ul>
                            <li className="leading-7"><Link className="cursor-pointer hover:underline underline-offset-4">Shipping & Returns</Link></li>
                            <li className="leading-7"><Link className="cursor-pointer hover:underline underline-offset-4">Privacy Policy</Link></li>
                            <li className="leading-7"><Link className="cursor-pointer hover:underline underline-offset-4">FAQs & Support</Link></li>
                            <li className="leading-7"><Link className="cursor-pointer hover:underline underline-offset-4">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold pb-2">Contact Us</h2>
                        <ul>
                            <li className="leading-7">E-Shopify</li>
                            <li className="leading-7">First Floor, Raghunath Complex, Mumbai 421305</li>
                            <li className="leading-7"> - eshopify@gmail.com</li>
                            <li className="leading-7"> - 9896585254(10:30 AM to 8:30 PM)</li>
                        </ul>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-4">
                    <div className="md:col-span-1 col-span-1">
                        <label className="text-xl font-light block leading-10">Subscribe for exclusive offers & updates</label>
                        <div className="relative">
                            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="bg-gray-50 w-full text-md px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="email" type="email" placeholder="Email address" />
                            <FaArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" size={20} />
                        </div>
                    </div>
                    <div className="flex items-center md:justify-end col-span-1 gap-4">
                        <Link className="cursor-pointer hover:scale-110"><FaFacebook size={26} /></Link>
                        <Link className="cursor-pointer hover:scale-110"><FaInstagram size={26} /></Link>
                        <Link className="cursor-pointer hover:scale-110"><FaYoutube size={26} /></Link>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-50 mt-4">Copyright &copy; 2021 SPARK Jewellery Private Ltd.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;