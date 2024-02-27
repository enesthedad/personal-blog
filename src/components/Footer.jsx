const Footer = () => {
  return (
    <div className="grid justify-end w-full grid-cols-1 px-10 py-6 text-white md:grid-cols-4 bg-stone-800">
      <div className="flex flex-col ">
        <div className="text-sky-500">Logo</div>
        <div className="">
          My personal blog about my journey to how i became a fullstack
          developer.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="font-semibold">Site Links</h5>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Popular post#1
        </a>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Popular post#2
        </a>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Popular post#3
        </a>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Popular post#4
        </a>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Popular post#5
        </a>
      </div>
      <div className="flex flex-col gap-4 ">
        <h5 className="font-semibold ">Other Links</h5>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Portfolio
        </a>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Art
        </a>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          About Me
        </a>
      </div>
      <div className="flex flex-col gap-4 ">
        <h5 className="font-semibold">Contact</h5>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Github
        </a>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Twitter
        </a>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Dev
        </a>
        <a
          href=""
          className="text-stone-300 hover:text-white hover:font-semibold w-max"
        >
          Medium
        </a>
      </div>
    </div>
  );
};

export default Footer;
