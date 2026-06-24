import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

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
      // eslint-disable-next-line
      setTitle(paste.title);
      setValue(paste.content);
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
    <div>

      <div className="flex flex-row gap-10 justify-center">
        <input className="p-2 rounded-2xl border border-amber-100 mt-2"
          type="text" placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createPaste}
          className="p-2 border border-amber-100 rounded-2xl mt-2">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      <div>
        <textarea
          className="border border-amber-100 p-4 rounded-2xl mt-4 min-w-[500px]"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>

    </div>
  )
}

export default Home
