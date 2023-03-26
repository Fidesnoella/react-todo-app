import { AiOutlinePlus, AiFillDelete } from "react-icons/ai"

export default function App() {
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-20 mx-auto container">
      <h1 className="text-[#bebebe] font-bold text-6xl sm:text-8xl">todos</h1>
      <div className="w-full sm:w-1/2 px-6 sm:px-0">
        <div className="relative">
          <input placeholder="Add todo..." className="placeholder-gray-800 mt-10 px-6 py-4 outline-none border border-[#bebebe] shadow rounded-full w-full" />
          <span className="absolute bottom-3 right-4 rounded-full bg-[#008f94] cursor-pointer p-2"><AiOutlinePlus color="white" fontSize={18} /></span>
        </div>
        <div className="w-full flex flex-col gap-3 pt-8 px-2">
          {
            [1, 2, 3, 4].map(() => {
              return (
                <div className="border-b border-[#bebebe] text-gray-800 py-4">
                  <div className="flex gap-4 relative" >
                    <input type="checkbox" name="" id="" />
                    <p className="text-lg">Hello</p>
                    <span className="absolute top-0 right-0 rounded-full bg-gray-200 cursor-pointer p-2"><AiFillDelete color="#ff2700" fontSize={20} /></span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

