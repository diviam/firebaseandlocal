import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Addedit } from './pages/Addedit';
import { View } from './pages/View';
import { About } from './pages/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components/Header';
function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Header />
      <ToastContainer position="top-center"/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/add" element={<Addedit/>}/>
  <Route path="/updatedit/:id" element={<Addedit/>}/>
  <Route path="/view/:id" element={<View/>}/>
  <Route path="/About" element={<About/>}/>

</Routes>
   </div>
   </BrowserRouter>
   
  );
}

export default App;
