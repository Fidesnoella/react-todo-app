import { AiOutlinePlus } from "react-icons/ai"

export default function TodoInput(props) {
    return (
        <div>
            <input type="text" placeholder="Add todo..." className="placeholder-gray-800 mt-10 px-6 py-4 outline-none border border-[#bebebe] shadow rounded-full w-full"
                onChange={props.handleChange} onKeyDown={props.handleKeyDown}
                value={props.text}
            />
            <span className="absolute bottom-3 right-4 rounded-full bg-[#008f94] cursor-pointer p-2" onClick={props.handleClick}>
                <AiOutlinePlus color="white" fontSize={18} />
            </span>
        </div>
    );
}
