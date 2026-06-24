import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {

  const {id} = useParams();
  const AllPastes = useSelector((state) => state.paste.pastes);

  const paste = AllPastes.filter((p) => p._id === id)[0];

  return (
    <div>

      <div className="flex flex-row gap-10 justify-center">
        <input className="p-2 rounded-2xl border border-amber-100 mt-2"
          type="text" placeholder="Enter title here"
          value={paste.title}
          disabled
        />
      </div>

      <div>
        <textarea
          className="border border-amber-100 p-4 rounded-2xl mt-4 min-w-[500px]"
          value={paste.content}
          placeholder="Enter content here"
          disabled
          rows={20}
        />
      </div>

    </div>
  )
}

export default ViewPaste
