import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ImSpinner8 } from "react-icons/im";
import { IoMdClose, IoMdImages } from "react-icons/io";
import { clearErrors, createProductAdmin } from "../../actions/ProductAction";
import toast from "react-hot-toast";
import { ADMIN_CREATE_PRODUCT_RESET } from "../../constants/ProductConstant";
import MetaData from "../../components/MetaData";

const collections = ["Mobiles", "Tablets", "Earbuds", "Watches", "Laptops"];

const CreateProduct = () => {
    const { loading, error, success } = useSelector((state) => state.productCreateReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [productData, setProductData] = useState({
        name: "",
        metal: "",
        description: "",
        collection: "",
        stock: null,
        price: null,
        discountPrice: null,
    });

    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const { name, description, metal, collection, price, discountPrice,stock } = productData;

    const handleChange = (e) => {
        if(e.target.name === "images") {
            const files = Array.from(e.target.files);

            files.forEach((file) => {
                const reader = new FileReader();

                reader.onload = () => {
                    if(reader.readyState === 2) {
                    setImages((old) => [...old, reader.result]);
                    setImagesPreview((old) => [...old, reader.result]);
                    }
                }

                reader.readAsDataURL(file);
            })
        }
        else {
            setProductData({...productData, [e.target.name]: e.target.value})
        }
    }

    const removeImage = (index) => {
        const filteredImages = images.filter((_, i) => i !== index);
        const filteredImagesPreview = imagesPreview.filter((_, i) => i !== index);
        setImages(filteredImages);
        setImagesPreview(filteredImagesPreview);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("name", name);
        formData.set("description", description);
        formData.set("metal", metal);
        formData.set("collection", collection);
        formData.set("price", price);
        formData.set("discountPrice", discountPrice);
        formData.set("stock", stock);
        images.forEach((image) => {
            formData.append("images", image);
        })

        dispatch(createProductAdmin(formData));
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        if (success) {
            toast.success("Product has been created.");
            navigate("/account/admin/products");
            dispatch({ type: ADMIN_CREATE_PRODUCT_RESET });
        }
    })

    return(
        <>
            <MetaData title="Create Product" />

            <h1 className="inline-block text-2xl font-bold text-black">Create Product</h1>

            <form encType="multipart/form-data" onSubmit={handleSubmit} className="md:w-full sm:w-full w-full md:px-0 px-8 flex flex-col items-center justify-center">
                <div className="w-full my-3">
                    <label className="text-sm font-semibold" htmlFor="name">Name</label>
                    <input autoFocus value={name} onChange={(e) => handleChange(e)} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="name" type="text" name="name" placeholder="Enter Name" />
                </div>
                
                <div className="w-full my-3">
                    <label className="text-sm font-semibold" htmlFor="description">Description</label>
                    <textarea rows={7} value={description} onChange={(e) => handleChange(e)} className="resize-none mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" name="description" id="description" placeholder="Enter Description" />
                </div>

                <div className="flex justify-between w-full gap-4">
                    <div className="flex-1 my-3">
                        <label className="text-sm font-semibold" htmlFor="collection">Collection</label>
                        <select required value={collection} onChange={(e) => handleChange(e)} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" name="collection" id="collection">
                            <option value="">None</option>
                            {
                                collections && collections.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className="flex justify-between w-full gap-4">
                    <div className="w-1/2 my-3">
                        <label className="text-sm font-semibold" htmlFor="price">Price</label>
                        <input value={price} onChange={(e) => handleChange(e)} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" name="price" id="price" type="number" placeholder="Enter Price" />
                    </div>
                    <div className="w-1/2 my-3">
                        <label className="text-sm font-semibold" htmlFor="discountPrice">Discount Price</label>
                        <input value={discountPrice} onChange={(e) => handleChange(e)} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" name="discountPrice" id="discountPrice" type="number" placeholder="Enter Discount in %" />
                    </div>
                </div>

                <div className="flex justify-between w-full gap-4">
                    <div className="w-1/2 my-3 pr-2">
                        <label className="text-sm font-semibold" htmlFor="stock">Stock</label>
                        <input value={stock} onChange={(e) => handleChange(e)} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" name="stock" id="stock" type="number" placeholder="Enter Stock" />
                    </div>
                </div>

                <div className="w-full my-3">
                  <label className="block text-sm font-semibold mb-1" htmlFor="images">Product Images</label>
                  <div className="flex items-center justify-between">
                    <input
                      onChange={(e) => handleChange(e)}
                      className="hidden"
                      name="images"
                      id="images"
                      type="file"
                      accept="image/*"
                      multiple
                    />
                    <label
                      htmlFor="images"
                      className="flex flex-col items-center justify-center w-full h-32 border border-gray-300 rounded-md cursor-pointer bg-gray-100 text-gray-600"
                    >
                      <IoMdImages className="text-3xl" />
                      <p className="ml-2 text-sm font-medium">Select Product Images</p>
                    </label>
                  </div>
                </div>

                <div className="w-full flex items-center gap-4 flex-wrap">
                  {
                    imagesPreview && imagesPreview.map((image, index) => (
                      <div className="relative rounded-md">
                        <button onClick={() => removeImage(index)} className="absolute -top-2 -right-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-full p-1"><IoMdClose /></button>
                        <img className="h-20 w-20 rounded-md" src={image} alt="ProductImage" />
                      </div>
                    ))
                  }
                </div>

                <div className="w-1/6 my-3 self-start">
                    <button disabled={loading === true ? true : false} onClick={handleSubmit} type="submit" className="w-full rounded-md text-sm py-2 font-semibold bg-cyan-400 text-white hover:bg-cyan-500 duration-150 ease-in-out">{
                        loading ? <ImSpinner8 className="animate-spin mx-auto text-xl" /> : "Create"
                    }</button>
                </div>
            </form>

    </>
    )
}

export default CreateProduct;