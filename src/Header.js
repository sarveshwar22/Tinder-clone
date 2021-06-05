import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
            <IconButton> 
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <IconButton>
            <img 
            className="header_logo"
            src={"https://cdn1.iconfinder.com/data/icons/social-media-black-white-1/1024/tinder-bw-512.png"}
            alt=""
            />
            </IconButton>
            <IconButton>
            <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>

        </div>
    )
}

export default Header
