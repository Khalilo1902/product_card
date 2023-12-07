import Link from "next/link";
import SearchInput from "../search/SearchInput";

const Nav = () => {
  return (
    <div className=" flex  px-2 py-1 gap-4 container justify-between">
      <div className=" flex gap-4 px-4" >
        <Link href="/">Products</Link>
        <Link href="/create">Create Products</Link>
      </div>
      <div className=" px-4">
        <SearchInput/>
      </div>
    </div>
  );
};

export default Nav;
