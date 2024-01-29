function HomePageReason({ item }) {
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row m-2">
        <div className="md:w-1/2 p-10 md:text-left">
          <div className="text-3xl font-semibold mb-5">{item[0].title}</div>
          <div className="text-lg">{item[0].content}</div>
        </div>
        <div className="bg-[#FF6969] w-1/2 p-1 md:p-6 rounded-[50px]">
          <img
            src={item[0].image}
            alt={item[0].title}
            className="rounded-[50px]"
          ></img>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row m-2">
        <div className="bg-[#FF6969] w-1/2 p-1 md:p-6 rounded-[50px]">
          <img
            src={item[1].image}
            alt={item[1].title}
            className="rounded-[50px]"
          ></img>
        </div>
        <div className="md:w-1/2 p-10 md:text-right">
          <div className="text-3xl font-semibold mb-5">{item[1].title}</div>
          <div className="text-lg">{item[1].content}</div>
        </div>
      </div>
    </div>
  );
}

export default HomePageReason;
