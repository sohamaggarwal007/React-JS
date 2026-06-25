import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import toast from "react-hot-toast";

const ViewPaste = () => {

  const { id } = useParams();
  const AllPastes = useSelector((state) => state.paste.pastes);

  const paste = AllPastes.filter((p) => p._id === id)[0];

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4">
      <div className="flex flex-row gap-4 justify-between w-full max-w-[800px]">
        <input 
          className="p-2 px-4 rounded-lg border border-gray-700 bg-[#1a1a1a] text-white flex-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all opacity-80"
          type="text" 
          placeholder="Title"
          value={paste?.title}
          disabled
        />
      </div>

      <div className="w-full max-w-[800px] mt-6 border border-gray-700 rounded-lg overflow-hidden bg-[#1a1a1a]">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#222222]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(paste?.content);
              toast.success("Copied to Clipboard");
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          </button>
        </div>
        <textarea
          className="w-full p-4 bg-[#1a1a1a] text-white resize-y focus:outline-none min-h-[400px] opacity-80"
          value={paste?.content}
          placeholder="Write Your Content Here...."
          disabled
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
