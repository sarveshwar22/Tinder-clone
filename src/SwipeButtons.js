import React from 'react'
import './SwipeButton.css'
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';

function SwipeButtons() {
    return (
        <div className="swipebuttons">
            <IconButton className="swipebuttons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebuttons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebuttons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebuttons__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebuttons__lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
