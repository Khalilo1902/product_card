"use client";

import { createApiProduct } from "@/feature/slice/productSlice";
import { AppDispatch } from "@/feature/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CreateProductPage = () => {
    const router = useRouter()
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    price: 0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]:value
    })
  };

  const canSave = [formData.title, formData.image, formData.price,formData.description].every(
    Boolean
  );
  const onFormSubmit = async () => {
    if (canSave) {
      await dispatch(
        createApiProduct({
          _id: "",
          title: formData.title,
          price:formData.price,
          image:formData.image,
          category:"",
          description: formData.description,
          rating: {
            rate: 0,
            count: 0
          }
        })
      );
      setFormData({
        title: "",
        description: "",
        price: 0,
        image:""
      });
      router.push("/");
    }
  }
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="container px-5 flex justify-center">
        <div className="flex flex-col gap-4 items-center bg-CURRENT_LINE w-full lg:w-1/2 px-8 py-5 rounded-lg">
          <input
            className="w-full rounded-lg py-2 outline-0 px-3  text-BACKGROUND"
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}

          />
          <input
            className="w-full rounded-lg py-2 outline-0 px-3  text-BACKGROUND"
            type="text"
            name="image"
            placeholder="imgUrl"
            value={formData.image}
            onChange={handleChange}
          />
          <input
            className="w-full rounded-lg py-2 outline-0 px-3  text-BACKGROUND"
            type="number"
            name="price"
            placeholder="price"
            value={formData.price}
            onChange={handleChange}

          />
          <textarea
            className="w-full rounded-lg outline-0 px-3 py-2 text-BACKGROUND"
            id=""
            cols={30}
            rows={10}
            name="description"
            placeholder="description"
            value={formData.description}
            onChange={handleChange}

          ></textarea>
          <div className="flex px-8 py-2 gap-8">
            <button className="bg-CYAN px-8 py-2 rounded-lg" onClick={onFormSubmit}>Create</button>
            <button className="bg-ORANGE px-8 py-2 rounded-lg">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CreateProductPage;
