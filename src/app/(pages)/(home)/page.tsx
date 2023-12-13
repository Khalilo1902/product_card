"use client";
import { FaSpinner } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  displayAllProducts,
  fetchAllProducts,
  setProductId,
} from "@/feature/slice/productSlice";
import { AppDispatch, RootState } from "@/feature/store/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import SearchInput from "@/components/search/SearchInput";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const inputValue = useSelector(
    (state: RootState) => state.products.inputValue
  );
  const status = useSelector((state: RootState) => state.products.status);
  const products = useSelector(displayAllProducts);
  const renderCard = () => {
    switch (status) {
      case "loading":
        return <FaSpinner />;
      case "completed":
        return (
          <div className=" grid grid-cols-3 gap-2 justify-center w-full">
            {products
              .filter((p) =>
                p.title.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((product) => (
                <Card
                  key={product._id}
                  className=" bg-slate-500 flex flex-col justify-between items-center gap-3"
                >
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </CardHeader>
                  <Image
                    className=" rounded-md"
                    src={product.image}
                    alt=""
                    width={200}
                    height={200}
                  />
                  <CardContent>
                    <p>{product.description.slice(0, 20)}...</p>
                  </CardContent>
                  <button
                    onClick={() => {
                      router.push(`/${product.title}`);
                      dispatch(setProductId(product._id));
                    }}
                    className=" uppercase underline font-serif font-extrabold text-white "
                  >
                    Show more{" "}
                  </button>
                  <CardFooter>
                    <p className="font-bold ">
                      {" "}
                      Price:
                      <span className=" text-xl font-bold text-black-300 text-red-900">
                        {product.price} $
                      </span>{" "}
                    </p>
                  </CardFooter>
                </Card>
              ))}
          </div>
        );
      case "failed":
        return <div>Error...</div>;
    }
  };
  console.log(products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return <div className=" container mt-4">{renderCard()}</div>;
}
