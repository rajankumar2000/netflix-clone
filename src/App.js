import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import Row from "./components/row/Row";
import requests from "./requests";


function App() {
    return (
    //HeaderNav
    <div className="App">
      <Nav />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetFlixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
