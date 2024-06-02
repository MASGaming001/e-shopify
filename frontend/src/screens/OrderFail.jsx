import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

const OrderFail = () => {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    })
    return (
        <div className="flex flex-col items-center justify-center h-[90vh]">
            <ImCross size={50} className="animate-bounce text-red-700" />
            <h1 className="mb-2 text-4xl font-bold text-gray-900">Order Failed</h1>
            <h1 className="text-md mb-6 text-gray-700">You order has been not placed, retry or come back after some time.</h1>
            <p>System will redirect you to home orders page in 2 seconds.</p>
            {/* <Link to={"/"} className="rounded-md text-sm py-2 px-6 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out">Home</Link> */}
        </div>
    )
}

export default OrderFail;