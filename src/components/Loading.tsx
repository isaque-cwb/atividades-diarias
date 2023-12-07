import PulseLoader from "react-spinners/PulseLoader";

export function Loading() {
  return (
    <main className="grid h-screen place-content-center bg-slate-100 ">

      <div className=" w-32 font-bold text-lg pt-2 border-teal-600 border-2 rounded-lg h-12 bg-teal-100 hover:bg-teal-200 transition-all duration-500 flex flex-col items-center shadow-[0_4px_9px_-4px_#0D7E94]" >
        <PulseLoader
          className="mt-2  w-full  flex justify-center"
          color="#0D7E94"
          size={10}
        />
      </div>
    </main>
  )
}