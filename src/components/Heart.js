import React from "react";

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Heart = (props) => {

	const heart_url = props.is_like ? <FavoriteBorderIcon fontSize="inherit" color="secondary"/> : <FavoriteIcon fontSize="inherit" /> 

	return (
		<React.Fragment>
			<IconButton aria-label="delete" size="small" onClick={props._onClick}>
        {heart_url}
      </IconButton>
		</React.Fragment>
	)
}

export default Heart;