// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Employee,{Hello} from './Employee';
// import Course from './Course';
import CourseFbc from './CourseFbc'
// import Fragments from './Fragments';
// import CardClassProp from './CardClassProp';
// import CardFbcProp from './CardFbcProp
// import EventhandlingCbc from './EventhandlingCbc';
// import EvenhandleFbc from './EvenhandleFbc';
import StateCbc from './StateCbc';
// import CartSetUpdate from './CartSetUpdate';
// import CssStyles from './CssStyles';
// import Listrendering from './Listrendering';
// import ListrenderingState from './ListrenderingState';
import MarksTable from './MarksTable';
import LoginForm from './LoginForm';
// import LifecylceMethods from './LifecylceMethods';
// import CbcHooksConut from './CbcHooksConut';
// import FbcHooks from './FbcHooks';
// import FbcHookCounter from './FbcHookCounter';
import Fetch from './Fetch';
import FetchFbc from './FetchFbc';
import Axios from './Axios';
import ApiCallFbc from './ApiCallFbc';
import ApiPost from './ApiPost';
import ApiPut from './ApiPut';
import ApiDelete from './ApiDelete';
import UseContextComponentA from './UseContextComponentA';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MarksTable/>}/>
      <Route path='/StateCbc' element={<StateCbc/>}/>
      <Route path='/LoginForm' element={<LoginForm/>}/>
      <Route path='/CourseFbc/:name' element={<CourseFbc/>}/>
      <Route path='/todos' element={<Fetch/>}/>
      <Route path='/FetchFbc' element={<FetchFbc/>}/>
      <Route path='/api' element={<Axios/>}/>
      <Route path='/apiFbc' element={<ApiCallFbc />} />
      <Route path='/post' element={<ApiPost />} />
      <Route path='/put' element={<ApiPut />} />
      <Route path='/delete' element={<ApiDelete />} />
      <Route path='/use' element={<UseContextComponentA />} />

    </Routes>
   
      {/* <button className='btn btn-primary'>Primary button</button> */}
      {/* <Employee/> */}
      {/* <Hello/> */}
      {/* <Course/> */}
      {/* <Fragments/> */}
      {/* < CardClassProp name="iphone"/> */}
      {/* < CardClassProp name="mac"/> */}
      {/* < CardClassProp name="android"/> */}
      {/* <CardFbcProp name="hoodie"/> */}
      {/* <CardFbcProp name="t shirt"/> */}
      {/* <CardFbcProp name="shirt"/> */}
      {/* <EventhandlingCbc/> */}
      {/* <EvenhandleFbc/> */}
      {/* <StateCbc/> */}
      {/* <CartSetUpdate/> */}
      {/* <CssStyles/> */}
      {/* <Listrendering/> */}
      {/* <ListrenderingState/> */}
      {/* <MarksTable/> */}
      {/* <LoginForm/> */}
      {/* <LifecylceMethods/> */}
      {/* <CbcHooksConut/> */}
      {/* <FbcHooks/> */}
      {/* <FbcHookCounter/> */}
    </BrowserRouter>
  );
}

export default App;
