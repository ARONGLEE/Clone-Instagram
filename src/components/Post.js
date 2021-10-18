import React from "react";
import styled from 'styled-components';
import { Button, Grid, Image, Text } from "../elements";

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';

const Post = (props) => {

	return (
		<React.Fragment>
			<Border >

				{/* 프로필사진, 아이디, */}
				<Grid is_flex height="41px"  padding="5px 4px 5px 8px" >
					<Grid is_flex width="auto">
						<Image shape="circle" size="25" margin="0px" src={props.src} />
						<Text bold size="10px" margin="6px">{props.user_info.user_name}</Text>
					</Grid>
					<Button width="20px" padding="0px" style={{backgroundColor: "#ffffff"}}>···</Button>
				</Grid>

				{/* 사진 */}
				<Grid>
					<Image shape="rectangle" style={{}} src={props.image_url}  />
				</Grid>

				{/* 하트, 상세페이지, 보내기 아이콘 */}
				<Grid padding = '3px'>

					<IconButton size="small">
        		<FavoriteBorderIcon fontSize="inherit" />
      		</IconButton>

					<IconButton size="small">
        		<ModeCommentIcon fontSize="inherit" />
      		</IconButton>

					<IconButton size="small">
        		<SendIcon fontSize="inherit" />
      		</IconButton>

				</Grid>

				{/* 좋아요, 내용 */}
				<Text margin="0px 8px" bold size="12px" style={{fontWeight: "600"}}>좋아요 {props.comment_cnt}개</Text>
				<Div>
					<Text bold size="10px" margin="8px 8px" style={{}}>{props.user_info.user_name}</Text> 
					<Text bold size="10px" margin="8px 8px" >{props.contents}</Text>
				</Div>
				


			</Border>
		</React.Fragment>
	)
}


// 부모에서 프롭스 못받을때 오류나 화면 깨짐 방지
Post.defaultProps = {
	user_info: {
		user_name: 'jinsik',
		// user_profile: 'https://filminvalle.com/wp-content/uploads/2019/10/User-Icon.png'
	},
	image_url: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wheat-field-picture.jpg',
	contents: '배경 내용이 들어가요',
	comment_cnt: 10,
	insert_dt: '2021-09-30 10:00:00',
}

export default Post;

const Border = styled.div`
	width: 400px;
	margin: auto;
	border: 1px solid #dee2e6;
	border-radius: 3px;
`;

const Div = styled.div`
	display: flex;
`;