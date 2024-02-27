import Avatar from "./Avatar";
import Tag from "./Tag";

const ArticleCard = () => {
  return (
    <div className=" w-full my-4 bg-white  flex flex-col gap-4 p-4 max-w-[600px]">
      <div className="flex items-center justify-between ">
        <a href="">
          <Avatar />
        </a>
        <div className="text-sm italic font-thin">26/02/2024</div>
      </div>
      <a href="" className="hover:opacity-90">
        <div className="flex items-center justify-between">
          <div className="flex flex-col ">
            <div className="font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
              libero?
            </div>
            <div className="font-thin ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              dolore dolorum aspernatur ut, inventore nesciunt sit fugiat
              suscipit illum neque tempore nihil voluptatem molestiae eum!
              Architecto consectetur vel facilis culpa!
            </div>
          </div>
          <div className="min-w-[100px] min-h-[100px] rounded-lg bg-stone-400 flex items-center justify-center">
            photo
          </div>
        </div>
      </a>
      <div className="flex justify-between gap-6">
        <div className="flex gap-4">
          <Tag header="backend" />
          <Tag header="ui" />
          <Tag header="side project" />
        </div>
        <div className="italic font-thin">reading time</div>
      </div>
    </div>
  );
};

export default ArticleCard;
