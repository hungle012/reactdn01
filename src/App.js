import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import StyleComponent from './StyleComponent/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithArray from './RenderArray/RenderWithArray';
import HomePage from './Props/HomePage';
import BTXemChiTiet from './Props/BTXemChiTiet/BTXemChiTiet';
import CarShop from './Props/CarShop/CarShop';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello React</h1> */}
      {/* <FunctionComponent/> */}
      {/* <ClassComponent/> */}
      {/* <HomeComponent/> */}
      {/* <DataBinding/> */}
      {/* <StyleComponent/> */}
      {/* <HandleEvent/> */}
      {/* <StateDemo/> */}
      {/* <ChangeFontSize/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithArray/> */}
      {/* <HomePage/> */}
      {/* <BTXemChiTiet/> */}
      <CarShop/>
    </div>
  );
}

export default App;
