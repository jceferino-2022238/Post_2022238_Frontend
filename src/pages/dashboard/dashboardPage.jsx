import React, { useState, useEffect } from 'react';
import './dashboardPage.css';
import { NavbarC } from '../../components/navbar/Navbar';
import { CarouselB } from '../../components/carousel/Carousel';
import { PostsB } from '../../components/posts/Posts';
export const DashboardPage = () =>{
    return(
        <div>
            <NavbarC/>
            <br/>
            <br/>
            <CarouselB/>
            <br/>
            <br/>
            <PostsB/>
        </div>
    )
}