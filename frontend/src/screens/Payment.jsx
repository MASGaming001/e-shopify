import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const loading = false;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            paymentMethod,
            cardNumber,
            cardExpiry,
            cardCVV,
            cardHolderName
        );
    }

    return(
        <div className="w-full py-8 flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="md:w-1/4 sm:w-1/2 w-full md:px-0 px-8 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Payment</h1>
                <div className="w-full my-3">
                    <label className="text-sm font-semibold" htmlFor="paymentMethod">Payment Method</label>
                    <div className="flex items-center justify-between mt-2 rounded border-red-700 border text-sm font-semibold">
                        <label className={`flex-1 py-2 rounded-l cursor-pointer ${paymentMethod === "cod" ? "bg-red-700 text-white" : "bg-gray-50 text-red-700"}`}>
                            <input onClick={(e) => setPaymentMethod(e.target.value)} checked={paymentMethod === "cod"} value="cod" type="radio" name="paymentMethod" className="hidden" />
                            <p className="text-center">
                                Cash on Delivery
                            </p>
                        </label>
                        <label className={`flex-1 py-2 rounded-r cursor-pointer ${paymentMethod === "card" ? "bg-red-700 text-white" : "bg-gray-50 text-red-700"}`}>
                            <input onClick={(e) => setPaymentMethod(e.target.value)} checked={paymentMethod === "card"} value="card" type="radio" name="paymentMethod" className="hidden" />
                            <p className="text-center">
                                Credit/Debit Card
                            </p>
                        </label>
                    </div>
                </div>

                <div className={paymentMethod === "cod" ? "hidden" : "block w-full my-3"}>
                    <div className="w-full my-3">
                        <label className="text-sm font-semibold" htmlFor="cardNumber">Card Number</label>
                        <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="no-spinner mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="cardNumber" type="number" placeholder="XXXX XXXX XXXX XXXX" />
                    </div>

                    <div className="flex justify-between w-full gap-4 my-3">
                        <div className="w-1/2">
                            <label className="text-sm font-semibold" htmlFor="cardExpiry">Expiry</label>
                            <input value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="cardExpiry" type="text" placeholder="XX/XX" />
                        </div>
                        <div className="w-1/2">
                            <label className="text-sm font-semibold" htmlFor="cardCVV">CVV</label>
                            <input value={cardCVV} onChange={(e) => setCardCVV(e.target.value)} className="no-spinner mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="cardCVV" type="number" placeholder="***" />
                        </div>
                    </div>

                    <div className="w-full my-3">
                        <label className="text-sm font-semibold" htmlFor="cardHolderName">Card Holder Name</label>
                        <input value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} className="no-spinner mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="cardHolderName" type="number" placeholder="Enter card holder name" />
                    </div>
                </div>

                <div onClick={handleSubmit} className="w-full my-3">
                    <button type="submit" className="w-full rounded text-sm py-2 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out">{
                        loading ? <ImSpinner8 className="animate-spin mx-auto text-xl" /> : "Proceed"
                    }</button>
                </div>
            </form>
        </div>
    )
}

export default Payment;