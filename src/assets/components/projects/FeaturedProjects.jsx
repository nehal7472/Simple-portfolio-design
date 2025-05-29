export default function FeaturedProjects() {
  return (
    <div id="projects" className="bg-secondaryBgColor py-2 px-4 md:py-24 md:px-52 ">
      <h2 className="flex flex-wrap items-center gap-4 my-8 pb-4 text-center sm:text-left text-xl md:text-4xl">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="font-semibold uppercase">Featured Projects</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </h2>

      <div className="flex flex-col gap-16 items-center justify-center">
        {/* First Project */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
          <img
            src="heroImage.JPG"
            alt=""
            className="w-full md:max-w-[450px] rounded-md"
          />
          <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full md:max-w-[450px]">
            <div className="flex flex-col gap-2 border-b-2 border-gray-600 pb-2">
              <h3>Project Name</h3>
              <p className="hidden md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam blanditiis quo, quia fugiat aut quasi. fugiat aut quasi.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <p>Html</p>
              <p>Css</p>
              <p>Figma</p>
              <p>React</p>
            </div>
            <div className="flex gap-2">
              <p>icon</p>
              <p>icon</p>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
          <div className="flex flex-col justify-center items-center md:items-end gap-4 w-full md:max-w-[450px]">
            <div className="flex flex-col items-end gap-2 border-b-2 border-gray-600 pb-2">
              <h3>Project Name</h3>
              <p className="text-right hidden md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam blanditiis quo, quia fugiat aut quasi. fugiat aut quasi.
              </p>
            </div>
            <div className="flex flex-wrap justify-end gap-4">
              <p>Html</p>
              <p>Css</p>
              <p>Figma</p>
              <p>React</p>
            </div>
            <div className="flex justify-end gap-2">
              <p>icon</p>
              <p>icon</p>
            </div>
          </div>
          <img
            src="heroImage.JPG"
            alt=""
            className="w-full md:max-w-[450px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
