import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function HeroSection() {
  return (
    <>
      <section className="w-full h-[calc(100vh-80px)] mt-[80px]">
        <div className="w-full h-full bg-[url('heroImage.JPG')] bg-cover bg-center flex flex-col items-center justify-center gap-6 px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Ahsanul Haque Nehal
            </h1>
            <p className="text-lg sm:text-xl text-white">front end developer</p>
          </div>
          <MdKeyboardDoubleArrowDown  className="text-[50px] text-white" />
        </div>
      </section>
    </>
  );
}
