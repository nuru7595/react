import { useState } from "react";

export default function Button() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
    }

    return (
        <button onClick={handleClick} className="bg-transparent border border-black">
            {value}
        </button>
    );
}
