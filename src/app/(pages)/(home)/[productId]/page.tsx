"use client";

import { LiaStarSolid } from "react-icons/lia";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { displaySingleProduct } from "@/feature/slice/productSlice";
import { RootState } from "@/feature/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const blogId = useSelector((state: RootState) => state.products.blogId);
  const singleProduct = useSelector((state: RootState) =>
    displaySingleProduct(state, blogId)
  );
  console.log(blogId);
  const sterne = []
  const rate = Math.round(singleProduct?.rating.rate || 0)
  console.log(rate)
  for (let i = 0 ;i < 5 ; i++){
    sterne.push(<p key={i} className={ `${ i < rate ? "text-yellow-500": "text-white"}`}><LiaStarSolid/></p>)
  }
  return (
    <div className="container">
      <Card className=" bg-slate-500 flex flex-col justify-between items-center gap-3 p-2">
        <CardHeader>
          <CardTitle>{singleProduct?.title}</CardTitle>
          <CardDescription>{singleProduct?.category}</CardDescription>
        </CardHeader>
        <Image
          className=" rounded-md"
          src={singleProduct?.image ?? ""}
          alt=""
          width={400}
          height={400}
        />
        <CardContent>
          <p>{singleProduct?.description}</p>
        </CardContent>

        <CardFooter>
          <p className="font-bold ">
            {" "}
            Price:
            <span className=" text-xl font-bold text-black-300 text-red-900">
              {singleProduct?.price} $
            </span>{" "}
          </p>
        </CardFooter>
        <div className="flex gap-2 items-center">
          {sterne} {singleProduct?.rating.rate}
        </div>
      </Card>
    </div>
  );
};

export default SingleProduct;
