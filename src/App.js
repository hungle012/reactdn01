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
import BTCart from './Props/BTCart/BTCart';
import BTGioHang from './DemoRedux/BTGioHang/BTGioHang';

// redux
import {store} from "./redux/configStore";
import {Provider} from "react-redux";
import BTGameXucXac from './DemoRedux/BTGameXucXac/BTGameXucXac';
import BTQuanLiND from './FormReact/BTQuanLiNguoiDung/BTQuanLiND';
import Parent from './LifeCyrcle/Parent';

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
      {/* <CarShop/> */}
      {/* <BTCart/> */}

      {/* REDUX */}
      <Provider store={store}>
        {/* <BTGioHang/> */}
        {/* <BTGameXucXac/> */}
        <BTQuanLiND/>
        {/* <Parent/> */}

        
      </Provider>
      
    </div>
  );
}

export default App;
