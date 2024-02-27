const Tag = (props) => {
  const { header } = props;
  return (
    <span className="px-2 py-1 text-sm rounded-lg select-none hover:opacity-75 bg-stone-200">
      {header}
    </span>
  );
};

export default Tag;
