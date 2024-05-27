import Search from "./Search";

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-900 z-40 sticky top-0 p-5 shadow-sm">
      <h1 className="font-bold text-3xl">Discover Events</h1>

      <Search />
    </div>
  );
};

export default Header;
