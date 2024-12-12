import Button from "./Button.jsx";

export default function Board() {
    return (
        <div>
            <div className="border-2 border-black grid grid-cols-3 grid-rows-3 w-36 h-36 font-bold text-3xl mx-auto">
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
            </div>
        </div>
    );
}
