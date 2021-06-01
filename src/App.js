import React, {Suspense} from "react";
import './css/styles.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Main from "./Main";

const Loader = () => (
    <div>
        Loading
    </div>
);

function App() {
    return (
        <Suspense fallback={<Loader/>}>
            <div id="page-top">
                <Navigation/>
                <Main/>
                <Footer/>
            </div>
        </Suspense>
    );
}

export default App;
