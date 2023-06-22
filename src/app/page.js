import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="flex-1 mx-6 flex flex-col justify-between space-y-8">
        <h1 className="font-black text-[60px] leading-11 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-[#668FEC] dark:bg-gradient-to-b dark:from-[#668FEC] dark:to-blue-100 ">
          Build your personal brand as a developer.
        </h1>
        <p className="text-slate-400 text-[20px]">
          Turning your ideas into reality by building projects and sharing them
          with the world.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48">
          Show your work
        </button>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          src="/blue-home.svg"
          alt="Homepage Img"
          width={500}
          height={500}
          className="animate-[move_1.5s_infinite_cubic-bezier(.46,.41,.47,.43)_alternate]"
        />
      </div>
    </div>
  );
}
