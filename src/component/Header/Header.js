import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>welcome my shop</h1>
            <nav>
               
        <CustomLink to={'/'} >Home</CustomLink>
        <CustomLink to={'/service'} >service</CustomLink>
        <CustomLink to={'/about'} >about</CustomLink>
        <CustomLink to={'/posts'} >post</CustomLink>
        <CustomLink to={'/friends'} >friends</CustomLink>


                {/* <Link to={'/'}>home</Link>
                <Link to={'/about'}>about</Link>
                <Link to={'/service'}>service</Link>
                <Link to={'/friends'}>friends</Link> */}

                {/* <li><a href="/aboute">aboute</a></li>
                <li><a href="/service">service</a></li>
                <li><a href="/friends">friends</a></li> */}
            </nav>
        </div>
    );
};

export default Header;