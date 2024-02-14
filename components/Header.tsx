const Header = () => {
  return (
    <div className="flex flex-row space-x-2 justify-between align-center w-screen bg-black px-20 py-10 border-b border-slate-800">
      <h3 className="text-neutral-200 text-2xl hover:scale-125 transition-all">
        tRelloW
      </h3>
      <input
        type="text"
        placeholder="Search"
        className="w-6/12 px-2 rounded-md outline-none"
      />
    </div>
  );
};

export default Header;
