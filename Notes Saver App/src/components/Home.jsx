import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Home = () => {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const AllPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = AllPastes.find((p) => p._id === pasteId);
      if (paste) {
        // eslint-disable-next-line
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, AllPastes]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      dispatch(updateToPastes(paste));
    }
    else {
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4">
      <div className="flex flex-row gap-4 justify-between w-full max-w-[800px]">
        <input 
          className="p-2 px-4 rounded-lg border border-gray-700 bg-[#1a1a1a] text-white flex-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          type="text" 
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button 
          onClick={createPaste}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
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
              navigator.clipboard.writeText(value);
              toast.success("Copied to Clipboard");
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          </button>
        </div>
        <textarea
          className="w-full p-4 bg-[#1a1a1a] text-white resize-y focus:outline-none min-h-[400px]"
          value={value}
          placeholder="Write Your Content Here...."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default Home
