import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "1234567890";
    if (char) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [number, char, length]);


  useEffect(()=>{
    passwordGenerator()
  },[length,number,char])

const passwordRef=useRef(null)

const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
      <div className="bg-gray-700 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500">
        <h1 className="text-white text-center text-xl mb-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard} className="active:scale-95 transition outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
