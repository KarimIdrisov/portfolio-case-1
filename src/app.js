import React from "react";

import {Estonia, Header, Intro, Products} from "./components";
import {Banner} from "./components/Banner/Banner";
import {Partners} from "./components/Partners/Partners";
import {Exchange} from "./components/Exchange/Exchange";

function App() {

    return (
        <div className='container'>
            <Header/>
            <Intro/>
            <Estonia />
            <Products />
            <Banner />
            <Partners />
            <Exchange />
        </div>
    );
}

export default App;
