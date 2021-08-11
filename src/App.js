import './App.css';
import Row from './Row';
// import requests from './Requests';
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav"
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINALS"
      isLargeRow = {true}
       fetchUrl={requests.fetchNetflixOriginals}/> 
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> 
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchActionMovies}/> 
      <Row title="Horror Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> 
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
