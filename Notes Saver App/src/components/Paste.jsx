import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function handleShare(paste) {
    navigator.clipboard.writeText(`${window.location.origin}/pastes/${paste?._id}`);
    toast.success("Share link copied to clipboard!");
  }

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 pb-20">
      <input 
        className="p-2 px-4 rounded-lg border border-gray-700 bg-[#1a1a1a] text-white w-full max-w-[800px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all mb-6"
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-6 items-center w-full max-w-[800px]">
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div key={paste._id} className="w-full border border-gray-700 rounded-lg overflow-hidden bg-[#1a1a1a] shadow-sm">
                  {/* Window Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#222222]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  {/* Window Content */}
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex flex-col gap-1 text-center">
                      <h2 className="text-2xl font-bold text-white">{paste.title}</h2>
                      <p className="text-gray-300 text-base line-clamp-3">{paste.content}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row gap-3 justify-center mt-4 flex-wrap">
                      <Link to={`/?pasteId=${paste?._id}`} className="px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-lg hover:bg-[#222222] transition-all duration-200">
                        Edit
                      </Link>
                      <Link to={`/pastes/${paste?._id}`} className="px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-lg hover:bg-[#222222] transition-all duration-200">
                        View
                      </Link>
                      <button onClick={() => handleDelete(paste?._id)}
                        className="px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-lg hover:bg-red-500 hover:border-red-500 transition-all duration-200">
                        Delete
                      </button>
                      <button onClick={() => {
                        navigator.clipboard.writeText(paste?.content)
                        toast.success("Copied to Clipboard")
                      }} 
                      className="px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-lg hover:bg-[#222222] transition-all duration-200">
                        Copy
                      </button>
                      <button onClick={() => handleShare(paste)} className="px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-lg hover:bg-[#222222] transition-all duration-200">
                        Share
                      </button>
                    </div>

                    {/* Date */}
                    <div className="text-sm text-gray-400 mt-2 flex justify-end">
                      {new Date(paste.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Paste
