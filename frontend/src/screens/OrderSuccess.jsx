import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";

const OrderSuccess = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    })
    return (
        <div className="flex flex-col items-center justify-center h-[90vh]">
            <TiTick size={80} className="animate-bounce text-green-700" />
            <h1 className="mb-2 text-4xl font-bold text-gray-900">Order Success</h1>
            <h1 className="text-md mb-6 text-gray-700">You order has been placed successfully.</h1>
            <p className="text-[12px] underline">System will redirect you to home page in 2 seconds.</p>
            {/* <Link to={"/"} className="rounded-md text-sm py-2 px-6 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out">Home</Link> */}
        </div>
    )
}

export default OrderSuccess;