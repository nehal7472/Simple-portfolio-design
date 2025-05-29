export default function OtherProjects() {
  return (
    <div className="bg-secondaryBgColor py-2 px-4 md:py-24 md:px-52 ">
      <h2 className="flex items-center gap-4 my-8 pb-4 text-xl md:text-4xl">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="font-semibold uppercase">Other Projects</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <!-- Project one --> */}
        <div
          className="flex flex-col sm:flex-row md:flex-row gap-3 items-center
         md:items-start justify-between"
        >
          <img
            src="heroImage.JPG"
            alt=""
            className="w-[115px] h-[115px] rounded-md"
          />
          <div className="flex flex-col justify-center items-center md:items-start w-full">
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
              <h4>Project Name</h4>
              <p className="hidden md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam blanditiis quo
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <p>Html</p>
              <p>Css</p>
              <p>Figma</p>
              <p>React</p>
            </div>
            <div className="flex gap-2 mt-2">
              <p>icon</p>
              <p>icon</p>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-3  justify-between items-center md:items-star">
          <img
            src="heroImage.JPG"
            alt=""
            className="w-[115px] h-[115px] rounded-md"
          />
          <div className="flex flex-col justify-center i w-full items-center md:items-start">
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
              <h4>Project Name</h4>
              <p className="hidden md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam blanditiis quo
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <p>Html</p>
              <p>Css</p>
              <p>Figma</p>
              <p>React</p>
            </div>
            <div className="flex gap-2 mt-2">
              <p>icon</p>
              <p>icon</p>
            </div>
          </div>
        </div>

        {/*  Project 3  */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-3  justify-between items-center md:items-start">
          <img
            src="heroImage.JPG"
            alt=""
            className="w-[115px] h-[115px] rounded-md"
          />
          <div className="flex flex-col justify-center  w-full items-center md:items-start">
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
              <h4>Project Name</h4>
              <p className="hidden md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam blanditiis quo
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <p>Html</p>
              <p>Css</p>
              <p>Figma</p>
              <p>React</p>
            </div>
            <div className="flex gap-2 mt-2">
              <p>icon</p>
              <p>icon</p>
            </div>
          </div>
        </div>

        {/*  Project 4  */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-3  justify-between items-center md:items-start">
          <img
            src="heroImage.JPG"
            alt=""
            className="w-[115px] h-[115px] rounded-md"
          />
          <div className="flex flex-col justify-center  w-full items-center md:items-start">
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
              <h4>Project Name</h4>
              <p className="hidden md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam blanditiis quo
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <p>Html</p>
              <p>Css</p>
              <p>Figma</p>
              <p>React</p>
            </div>
            <div className="flex gap-2 mt-2">
              <p>icon</p>
              <p>icon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
