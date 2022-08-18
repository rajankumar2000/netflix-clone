import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import Row from "./components/row/Row";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import requests from "./requests";

import { ScaleLoader } from "react-spinners";

function App() {
  const [isLoad, setIsLoad] = useState({
    banner: false,
    row: false,
    trending: false,
    top: false,
    action: false,
    horror: false,
    romance: false,
    documentries: false,
  });

  const { banner, row, trending, top, action, horror, romance, documentries } =
    isLoad;

  if (
    !banner &&
    !row &&
    !trending &&
    !top &&
    !action &&
    !horror &&
    !romance &&
    !documentries
  )
    return <ScaleLoader />;
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
      <Banner isLoaded={isLoad} setIsLoad={setIsLoad} />
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
  );
}

export default App;
