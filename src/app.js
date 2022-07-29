import React from "react";

import {Estonia, Header, Intro, Products} from "./components";

function App() {

    return (
        <div className='container'>
            <Header/>
            <Intro/>
            <Estonia />
            <Products />
        </div>
    );
}

export default App;
