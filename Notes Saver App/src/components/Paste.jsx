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
    <div>
      <input className='p-2 rounded-2xl min-w-[600px] mt-5 border border-amber-100'
        type="search"
        placeholder='Search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='flex flex-col gap-5 mt-10 items-center'>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div key={paste._id} className='border border-amber-200/50 rounded-2xl w-[600px] p-6 flex flex-col gap-4 shadow-sm bg-[#1a1a1a]'>
                  <div className='flex flex-col gap-1'>
                    <h2 className='text-2xl font-bold text-amber-100'>{paste.title}</h2>
                    <p className='text-gray-300 text-base line-clamp-3'>{paste.content}</p>
                  </div>
                  <div className='flex flex-row gap-3 justify-center mt-4'>
                    <Link to={`/?pasteId=${paste?._id}`} className='px-4 py-2 text-sm font-medium text-amber-100 border border-amber-100/50 rounded-lg hover:bg-amber-100 hover:text-black transition-all duration-200'>
                      Edit
                    </Link>
                    <Link to={`/pastes/${paste?._id}`} className='px-4 py-2 text-sm font-medium text-amber-100 border border-amber-100/50 rounded-lg hover:bg-amber-100 hover:text-black transition-all duration-200'>
                      View
                    </Link>
                    <button onClick={() => handleDelete(paste?._id)}
                      className='px-4 py-2 text-sm font-medium text-amber-100 border border-amber-100/50 rounded-lg hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-200'>
                      Delete
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Copied to Clipboard")
                    }} 
                    className='px-4 py-2 text-sm font-medium text-amber-100 border border-amber-100/50 rounded-lg hover:bg-amber-100 hover:text-black transition-all duration-200'>
                      Copy
                    </button>
                    <button onClick={() => handleShare(paste)} className='px-4 py-2 text-sm font-medium text-amber-100 border border-amber-100/50 rounded-lg hover:bg-amber-100 hover:text-black transition-all duration-200'>
                      Share
                    </button>
                  </div>
                  <div className='text-sm text-gray-400 mt-2 flex justify-end'>
                    {new Date(paste.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
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
