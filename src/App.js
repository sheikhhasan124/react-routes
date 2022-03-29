import React from 'react';
import { Route, Routes,  } from 'react-router-dom';
import Friends from './component/Friends/Friends';


import Home from './component/home/Home';
import NotFound from './component/notFound/NotFound';
import Service from './component/servise/Service';

const App = () => {
    return (
        <div>
            <h2>well come to route project</h2>
          
               <Routes>
                        <Route path="/" element={ <Home />}></Route>
                        <Route path="/friends" element={ <Friends />}></Route>
                         
                        <Route path="/service" element={ <Service />}></Route>
                        <Route path="*" element={<NotFound />} ></Route>
               </Routes>
            
            
        </div>
    );
};

export default App;