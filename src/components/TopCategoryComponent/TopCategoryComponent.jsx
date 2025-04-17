function TopCategoryComponent({ icon, name, count }) {
  return (
    <div className=" h-28 flex gap-5 bg-secondary hover:bg-primary transition cursor-pointer p-5 mr-6">
      <div className=" flex justify-center items-center p-4 bg-white ">
        {" "}
        <img src={icon} alt={`${name} icon`} />
      </div>
      <div>
        <p>{name}</p>
        <p>{count} courses</p>
      </div>
    </div>
  );
}

export default TopCategoryComponent;
