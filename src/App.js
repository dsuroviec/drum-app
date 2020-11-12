import React, { useRef, useState, useEffect } from "react";

const App = () => {
    //create state to display sound description after keypress
    const [soundInfo, setSoundInfo] = useState("");

    //listen for keypress on document and call the unique sound to play
    //sound urls  from freecodecamp example
    //newAudio() method found on MDN

    //when user clicks a key, event listener takes in key
    // and runs the function to play the switch sound
    // use .current because must when using a ref from useRef
    //set current time to zero, so that it restarts clip for every key press
    useEffect(() => {
        const handleKeyDown = (key) => {
            switch (key.key) {
                case "q":
                    q.current.currentTime = 0;
                    q.current.play();
                    setSoundInfo("Heater-1");
                    break;
                case "w":
                    w.current.currentTime = 0;
                    w.current.play();
                    setSoundInfo("Heater-2");
                    break;
                case "e":
                    e.current.currentTime = 0;
                    e.current.play();
                    setSoundInfo("Heater-3");
                    break;
                case "a":
                    a.current.currentTime = 0;
                    a.current.play();
                    setSoundInfo("Heater-4");
                    break;
                case "s":
                    s.current.currentTime = 0;
                    s.current.play();
                    setSoundInfo("Clap");
                    break;
                case "d":
                    d.current.currentTime = 0;
                    d.current.play();
                    setSoundInfo("Open HH");
                    break;
                case "z":
                    z.current.currentTime = 0;
                    z.current.play();
                    setSoundInfo("Kick n' Hat");
                    break;
                case "x":
                    x.current.currentTime = 0;
                    x.current.play();
                    setSoundInfo("Kick");
                    break;
                case "c":
                    c.current.currentTime = 0;
                    c.current.play();
                    setSoundInfo("Closed HH");
                    break;
                default:
                    console.log("no sound for that keypress in SWITCH");
            }
        };
        // runs in the useEffect to remove function store side effect
        // because sound will run twice on codeSandbox and distort
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    //useRef allows user to click with mouse, then play
    //the sound clicked in the value in the return
    //current time set to zero to restart sound every click
    //setSoundInfo tells the user what sound is playing
    const q = useRef(null);
    const onClickQ = () => {
        q.current.currentTime = 0;
        q.current.play();
        setSoundInfo("Heater-1");
    };
    const w = useRef(null);
    const onClickW = () => {
        w.current.currentTime = 0;
        w.current.play();
        setSoundInfo("Heater-2");
    };
    const e = useRef(null);
    const onClickE = () => {
        e.current.currentTime = 0;
        e.current.play();
        setSoundInfo("Heater-3");
    };
    const a = useRef(null);
    const onClickA = () => {
        a.current.currentTime = 0;
        a.current.play();
        setSoundInfo("Heater-4");
    };
    const s = useRef(null);
    const onClickS = () => {
        s.current.currentTime = 0;
        s.current.play();
        setSoundInfo("Clap");
    };
    const d = useRef(null);
    const onClickD = () => {
        d.current.currentTime = 0;
        d.current.play();
        setSoundInfo("Open HH");
    };

    const z = useRef(null);
    const onClickZ = () => {
        z.current.currentTime = 0;
        z.current.play();
        setSoundInfo("Kick n' Hat");
    };

    const x = useRef(null);
    const onClickX = () => {
        x.current.currentTime = 0;
        x.current.play();
        setSoundInfo("Kick");
    };

    const c = useRef(null);
    const onClickC = () => {
        c.current.currentTime = 0;
        c.current.play();
        setSoundInfo("Closed HH");
    };

    return (
        <div className="App" id="drum-machine">
            <div id="display">
                <div className="drum-pad" id="q" onClick={onClickQ}>
                    Q
                    <audio
                        className="clip"
                        ref={q}
                        id="Q"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                    />
                </div>
                <div className="drum-pad" id="w" onClick={onClickW}>
                    W
                    <audio
                        className="clip"
                        ref={w}
                        id="W"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                    />
                </div>
                <div className="drum-pad" id="e" onClick={onClickE}>
                    E
                    <audio
                        className="clip"
                        ref={e}
                        id="E"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                    />
                </div>
                <div className="drum-pad" id="a" onClick={onClickA}>
                    A
                    <audio
                        className="clip"
                        ref={a}
                        id="A"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                    />
                </div>
                <div className="drum-pad" id="s" onClick={onClickS}>
                    S
                    <audio
                        className="clip"
                        ref={s}
                        id="S"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                    />
                </div>
                <div className="drum-pad" id="d" onClick={onClickD}>
                    D
                    <audio
                        className="clip"
                        ref={d}
                        id="D"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                    />
                </div>
                <div className="drum-pad" id="z" onClick={onClickZ}>
                    Z
                    <audio
                        className="clip"
                        ref={z}
                        id="Z"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                    />
                </div>
                <div className="drum-pad" id="x" onClick={onClickX}>
                    X
                    <audio
                        className="clip"
                        ref={x}
                        id="X"
                        src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                    />
                </div>

                <div className="drum-pad" id="c" onClick={onClickC}>
                    C
                    <audio
                        className="clip"
                        ref={c}
                        id="C"
                        src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                    />
                </div>
                <div className="soundInfo">
                    <p className="title">{soundInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default App;