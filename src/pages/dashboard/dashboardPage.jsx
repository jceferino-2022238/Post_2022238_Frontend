import React, { useState, useEffect } from 'react';
import './dashboardPage.css';
import { NavbarC } from '../../components/navbar/Navbar';
import { CarouselB } from '../../components/carousel/Carousel';
import { PostsB } from '../../components/posts/Posts';
import { CommentsTableO } from '../../components/commentsTable/CommentsTable';
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
            <br/>
            <br/>
            <CommentsTableO/>
        </div>
    )
}