import { useRef, useEffect } from 'react';

function App() {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current;
    }, []);

    return (
        <input
            ref={inputRef}
            type="text"
            placeholder="Enter your name"
        />
    );
}

export default App;