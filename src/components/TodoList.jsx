import { AiFillDelete, AiOutlineCheck, AiOutlineClose, AiFillEdit } from "react-icons/ai"

export default function TodoList(props) {
    return (
        <div className="border-b border-[#bebebe] text-gray-800 py-4">
            <div className="flex gap-4 relative" >
                <input type="checkbox" checked={props.isChecked} onChange={props.handleCheckboxChange} />
                <p className={`text-xl break-words w-[80%] sm:w-[85%] ${props.isChecked ? "line-through" : "no-underline"}`}>
                    {props.value}
                </p>
                <div className="absolute top-0 right-0 flex gap-3">
                    <span className="rounded-full bg-gray-200 cursor-pointer p-1">
                        <AiFillEdit color="#008f94" fontSize={22} onClick={props.handleEditClick} />
                    </span>
                    {!props.isDeleting ?
                        <span className="rounded-full bg-gray-200 cursor-pointer p-1">
                            <AiFillDelete color="#ff2700" fontSize={22} onClick={props.handleDeleteClick} />
                        </span>
                        :
                        <div className="flex gap-3 cursor-pointer">
                            <span className="bg-[#008f94] rounded-full p-1" onClick={props.handleConfirmClick}>
                                <AiOutlineCheck color="white" fontSize={21} />
                            </span>
                            <span className="rounded-full bg-gray-200 p-1" onClick={props.handleCancelClick}>
                                <AiOutlineClose color="#ff2700" fontSize={22} />
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}