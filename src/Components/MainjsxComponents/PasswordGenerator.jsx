import React, { useCallback, useState } from 'react';

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [numberAllowed, setNumberAllowed] = useState(true);
    const [scharAllowed, setScharAllowed] = useState(true);
    const [length, setLength] = useState(10);

    const Generator = useCallback(() => {
        let psswd = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) {
            str += "0123456789";
        }
        if (scharAllowed) {
            str += "!@#$%^&*()_+?><:{}[]";
        }

        for (let index = 0; index < length; index++) {
            let randomNumber = Math.floor(Math.random() * str.length);
            psswd += str[randomNumber];
        }
        setPassword(psswd); // Update the password state with the generated password
    }, [numberAllowed, scharAllowed, length]); // Add length to the dependency array

    return (
        <div className="p-4">
            <div className="flex items-center mb-4">
                <label htmlFor="length" className="mr-2">Length:</label>
                <input
                    type="range"
                    id="length"
                    min="1"
                    max="50"
                    value={length}
                    onChange={(e) => setLength(e.target.value)} // Update length state on change
                    className="slider"
                />
                <span className="ml-2">{length}</span>
            </div>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="includeNumbers"
                    checked={numberAllowed} // Bind the checkbox to numberAllowed state
                    onChange={(e) => setNumberAllowed(e.target.checked)} // Update numberAllowed state on change
                    className="mr-2"
                />
                <label htmlFor="includeNumbers">Include Numbers</label>
            </div>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="includeCharacters"
                    checked={scharAllowed} // Bind the checkbox to scharAllowed state
                    onChange={(e) => setScharAllowed(e.target.checked)} // Update scharAllowed state on change
                    className="mr-2"
                />
                <label htmlFor="includeCharacters">Include Characters</label>
            </div>
            <button onClick={Generator} className="bg-blue-500 text-white px-4 py-2">
                Generate Password
            </button>
            <div className="mt-4">
                <input
                    type="text"
                    value={password} // Display the generated password
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
        </div>
    );
};

export default PasswordGenerator;