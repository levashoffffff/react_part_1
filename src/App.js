import './App.css';
import Header from './components/Header/Header.jsx';
import What from './components/What/What.jsx';
import ColumnsContainer from './components/Columns/ColumnsContainer.jsx';
import VerticalContainer from './components/Vertical/VerticalContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">

        <div className="content">

          <Header />

          <Routes>
            <Route path="/" element={<What />} />
            {/* <Route path="/columns" element={<Columns columnsPage={props.state.columnsPage} dispatch={props.dispatch}/>} />
            <Route path="/columns" element={<ColumnsContainer store={props.store}/>} />
            <Route path="/vertical" element={<Vertical verticalPage={props.state.verticalPage} />} /> */}
            <Route path="/columns" element={<ColumnsContainer />} />
            <Route path="/vertical" element={<VerticalContainer />} />
          </Routes>
        </div>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}


export default App;
