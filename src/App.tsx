import Accordian from "./components/accordian"
import RandomColor from './components/random-color'
import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider"

import LoadMoreData from './components/load-more-data'
import QRgenrator from './components/qr-code-gen'
import LightAndDark from "./components/light-dark-mode"
import Scrollbar from "./components/scroll-bar"
import TabTest from "./components/costom-tabs/tab-test"
import ModalTest from "./components/costom-model-popup/model-test"
import GithubProfileFinder from "./components/github-profile-finder"
import SearchAutoComplete from "./components/search-auto-complete"
import Board from "./components/tic-tac/main"


function App() {
 

  return (
    <>
      <div className="App">
      {/* <Accordian/> 
      <RandomColor />
      <StarRating noOfStar={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />
      <LoadMoreData />
       <QRgenrator /> */}
      {/* <LightAndDark /> */}
       {/* <Scrollbar url={'https://dummyjson.com/products?limit=100'} /> 
       <TabTest />

        <ModalTest /> */}
      
       {/* <GithubProfileFinder/> */}

       {/* <SearchAutoComplete /> */}

       <Board />
     
    </div>
     
    </>
  )
}

export default App
