import React from "react";
import Slotmachin from "./Slotmachin";
import "./App.css";
const App = () => {
    return (
        <>
            <h1 className="heading_style">
                🎰 Welcome  to <span style={{ fontWeight: "bold" }}>Slot Machin Game</span> 🎰
        </h1>
            <div className="slotmachin">
                <Slotmachin x="😇" y="😈" z="😃" />
                <hr />
                <Slotmachin x="😇" y="😇" z="😇" />
                <hr/>
                <Slotmachin x="😈" y="😈" z="😈" />
            </div>

        </>
    );
}
export default App;
