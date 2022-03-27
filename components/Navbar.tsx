import { Input } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-8 bg-black prose-h1:text-white prose-p:text-white">
      <div className="prose-h1:my-0 w-full prose-p:my-0">
        <h1 className="text-5xl">Movie Database</h1>
        <p>Nothing Works Better Than A Movie.</p>
      </div>
      <Input
        className="prose"
        bg="white"
        size="md"
        placeholder="Search your movie..."
      />
    </nav>
  );
};

export default Navbar;
