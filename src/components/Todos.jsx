import { useState } from "react"
import { AiOutlinePlus, AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai"

export default function Todos() {
    const [text, setText] = useState('')
    const [displayText, setDisplayText] = useState([])

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleClick = () => {
        if (!text.trim()) return
        text ? setDisplayText([...displayText, { value: text, isChecked: false }]) : null
        setText('')
    }

    const handleCheckboxChange = (index) => {
        setDisplayText((prevDisplayText) => {
            const newDisplayText = [...prevDisplayText];
            newDisplayText[index] = {
                ...newDisplayText[index],
                isChecked: !newDisplayText[index].isChecked,
            }
            return newDisplayText
        })
    }

    const handleDeleteClick = (index) => {
        setDisplayText((prevDisplayText) => {
            const newDisplayText = [...prevDisplayText];
            newDisplayText[index] = {
                ...newDisplayText[index],
                isDeleting: true,
            }
            return newDisplayText
        })
    }

    const handleCancelClick = (index) => {
        setDisplayText((prevDisplayText) => {
            const newDisplayText = [...prevDisplayText];
            newDisplayText[index] = {
                ...newDisplayText[index],
                isDeleting: false,
            }
            return newDisplayText
        })
    }

    const handleConfirmClick = (index) => {
        setDisplayText((prevDisplayText) => {
            const newDisplayText = [...prevDisplayText];
            newDisplayText.splice(index, 1);
            return newDisplayText
        })
    }

    return (
        <main className="flex flex-col items-center mt-10 sm:mt-20 mx-auto container">
            <h1 className="text-[#bebebe] font-bold text-6xl sm:text-8xl">todos</h1>
            <div className="w-full sm:w-1/2 px-6 sm:px-0">
                <div className="relative">
                    <input type="text" placeholder="Add todo..." className="placeholder-gray-800 mt-10 px-6 py-4 outline-none border border-[#bebebe] shadow rounded-full w-full" onChange={handleChange} onKeyDown={event => (event.key === 'Enter') && handleClick()} value={text} />
                    <span className="absolute bottom-3 right-4 rounded-full bg-[#008f94] cursor-pointer p-2" onClick={handleClick}><AiOutlinePlus color="white" fontSize={18} /></span>
                </div>
                <div className="w-full flex flex-col gap-3 pt-8 px-2">
                    {
                        displayText.map((item, index) => {
                            return (
                                <div className="border-b border-[#bebebe] text-gray-800 py-4" key={index}>
                                    <div className="flex gap-4 relative" >
                                        <input type="checkbox" checked={item.isChecked} onChange={() => handleCheckboxChange(index)} />
                                        <p className={`text-xl break-words max-w-sm sm:max-w-xl ${item.isChecked ? "line-through" : "no-underline"}`}>{item.value}</p>
                                        {!item.isDeleting ?
                                            <span className="absolute top-0 right-0 rounded-full bg-gray-200 cursor-pointer p-1">
                                                <AiFillDelete color="#ff2700" fontSize={22} onClick={() => handleDeleteClick(index)} />
                                            </span>
                                            :
                                            <div className="absolute top-0 right-0 flex gap-3 cursor-pointer">
                                                <span className="bg-[#008f94] rounded-full p-1" onClick={() => handleConfirmClick(index)}>
                                                    <AiOutlineCheck color="white" fontSize={18} />
                                                </span>
                                                <span className=" rounded-full bg-gray-200 p-1" onClick={() => handleCancelClick(index)}>
                                                    <AiOutlineClose color="#ff2700" fontSize={20} />
                                                </span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

