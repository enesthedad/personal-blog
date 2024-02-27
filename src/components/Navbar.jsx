const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between w-full px-4 py-2 mx-auto ">
        <div className="text-2xl font-semibold select-none ">Logo</div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-5">
            <a
              href=""
              className="px-5 py-2 rounded-lg shadow-md text-stone-800 bg-stone-100 hover:opacity-85"
            >
              + Create post
            </a>
            <a href="">Last posts</a>
            <a href="">Popular Posts</a>
            <a href="">About Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
