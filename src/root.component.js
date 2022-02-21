import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from '@material-ui/core';
import './index.css';

export default function Root() {
  return (
    <>
    <BrowserRouter>
         <AppBar position='static'>
         <nav className="nav">
        <Link to="/page1" className="link">
        <Typography variant="h6" color="inherit" component="div">
        Задачи
    </Typography>
        </Link>
        <Link to="/page3" className="link">
        <Typography variant="h6" color="inherit" component="div">
        Важно
    </Typography>
        </Link>
        <Link to="/page2" className="link">
        <Typography variant="h6" color="inherit" component="div">
        Календарь
    </Typography>
        </Link>
      </nav>
         </AppBar>
    </BrowserRouter>
    </>
    
  )
}
