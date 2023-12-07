'use client'
import { setInputValue } from "@/feature/slice/productSlice";
import { AppDispatch, RootState } from "@/feature/store/store";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector( (state: RootState) => state.products.inputValue
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };
  return (
    <div className=" flex items-center bg-slate-300 rounded px-2">
      <IoSearch className=" text-2xl text-black p-xl-2 font-bold bg-slate-200 px-1 rounded" />

      <input
        value={inputValue}
        className="outline-none border-none rounded bg-transparent text-xl text-black font-bold w-full"
        type="text"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
