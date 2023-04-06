import { useState } from "react"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

export default function Todos() {
    const [text, setText] = useState('')
    const [displayText, setDisplayText] = useState([])
    const [isEditing, setIsEditing] = useState(false);


    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') return handleClick()
    }

    const handleClick = () => {
        if (!text.trim()) return;
        if (isEditing !== false) {
            setDisplayText((displayText) => {
                const newDisplayText = [...displayText];
                newDisplayText[isEditing] = {
                    ...newDisplayText[isEditing],
                    value: text,
                };
                return newDisplayText;
            });
            setIsEditing(false);
        } else {
            setDisplayText([...displayText, { value: text, isChecked: false }]);
        }
        setText('');
    };

    const handleCheckboxChange = (index) => {
        setDisplayText((displayText) => {
            const newDisplayText = [...displayText];
            newDisplayText[index] = { ...newDisplayText[index], isChecked: !newDisplayText[index].isChecked }
            return newDisplayText
        })
    }

    const handleDeleteClick = (index) => {
        setDisplayText((displayText) => {
            const newDisplayText = [...displayText];
            newDisplayText[index] = { ...newDisplayText[index], isDeleting: true }
            return newDisplayText
        })
    }

    const handleCancelClick = (index) => {
        setDisplayText((displayText) => {
            const newDisplayText = [...displayText];
            newDisplayText[index] = { ...newDisplayText[index], isDeleting: false }
            return newDisplayText
        })
    }

    const handleConfirmClick = (index) => {
        setDisplayText((displayText) => {
            const newDisplayText = [...displayText];
            newDisplayText.splice(index, 1);
            return newDisplayText
        })
    }

    const handleEditClick = (index, value) => {
        setText(value)
        setIsEditing(index);
        setDisplayText((displayText) => {
            const newDisplayText = [...displayText];
            newDisplayText[index] = { ...newDisplayText[index], value: value };
            return newDisplayText;
        });
    };

    return (
        <main className="flex flex-col items-center mt-10 sm:mt-20 mx-auto container">
            <h1 className="text-[#bebebe] font-bold text-6xl sm:text-8xl">todos</h1>
            <div className="w-full sm:w-1/2 px-6 sm:px-0">
                <div className="relative">
                    <TodoInput handleClick={handleClick} handleChange={handleChange} text={text} handleKeyDown={handleKeyDown} />
                </div>
                <div className="w-full flex flex-col gap-3 pt-8 px-2">
                    {
                        displayText.map(({ value, isChecked, isDeleting }, index) => {
                            return (
                                <TodoList
                                    key={index}
                                    isChecked={isChecked}
                                    handleCheckboxChange={() => handleCheckboxChange(index)}
                                    value={value} isDeleting={isDeleting}
                                    handleDeleteClick={() => handleDeleteClick(index)}
                                    handleConfirmClick={() => handleConfirmClick(index)}
                                    handleCancelClick={() => handleCancelClick(index)}
                                    handleEditClick={() => handleEditClick(index, value)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}