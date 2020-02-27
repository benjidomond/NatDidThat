import React from "react";

class Home extends React.Component {
    render(){
        return (
            <div id="homeContainer">
                <h3 id="siteHeader">You see this hair? Nat Did That.</h3>
                <div id="navContainer">
                <nav id="siteNav">
                    <a className="navLink" href="http://google.com">Shop</a>
                    <a className="navLink" href="http://google.com">Gallery</a>
                    <a className="navLink" href="htttp://google.com">Contact</a>
                </nav>
                </div>
            </div>
        )
    }
}

export default Home;