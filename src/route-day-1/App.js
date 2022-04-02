import React from 'react';
import { Route, Routes,  } from 'react-router-dom';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';


import Home from './component/home/Home';
import NotFound from './component/notFound/NotFound';
import Post from './component/Post/Post';
import PostDetail from './component/PostDettale/PostDetail';
import Service from './component/servise/Service';

const App = () => {
    return (
        <div>
           
                   <Header />
               <Routes>
                        <Route path="/" element={ <Home />}></Route>
                        <Route path="/friends" element={ <Friends />}></Route>
                        <Route path="/friend/:friendId" element={ <FriendDetail />}></Route>
                         <Route path="/posts" element={<Post />}>
                             <Route path=":postId" element={<PostDetail />}></Route>
                         </Route>
                        <Route path="/service" element={ <Service />}></Route>
                        <Route path="*" element={<NotFound />} ></Route>
               </Routes>
            
            
        </div>
    );
};

export default App;