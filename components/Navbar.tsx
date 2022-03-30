import { Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { toggleChangeState } from "utils/redux/search";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8  prose-h1:text-white gap-4 prose-p:text-white max-w-[68rem] mx-auto">
        <div className="prose-h1:my-0 w-full prose-p:my-0">
          <h1 className="text-5xl">Movie Database</h1>
          <p>Nothing Works Better Than A Movie.</p>
        </div>
        <Input
          onChange={(e) => dispatch(toggleChangeState(e.target.value))}
          width="full"
          bg="white"
          size="md"
          placeholder="Search your movie..."
        />
      </div>
    </nav>
  );
};

export default Navbar;
