import React from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { Button, Grid, Image, Text } from "../elements";
import Heart from "./Heart";
import Modal from "./Modal";
import CommentWrite from "./CommentWrite";

import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import { likeToggle } from "../redux/modules/post";

const Post = (props) => {

	const dispatch = useDispatch();

	const [modalOpen, setModalOpen] = React.useState(false);
	console.log(modalOpen)

	return (
		<React.Fragment>
			<Border >

				{/* 프로필사진, 아이디, */}
				<Grid is_flex justifyContent="space-between" height="41px"  padding="5px 4px 5px 8px" >
					<Grid is_flex width="auto">
						<Image shape="circle" size="25" margin="0px" src={props.src} />
						<Text bold size="10px" margin="6px">{props.user_info.user_name}</Text>
					</Grid>
					<Button width="20px" padding="0px" bg="#fff" color="#000"  
						className="openModalBtn" _onClick={()=>{setModalOpen(true)}}>
							···
					</Button>
					{/* <Modal></Modal> */}
				</Grid>

				{/* 사진 */}
				<Grid>
					<Image shape="rectangle" style={{}} src={props.image_url}  />
				</Grid>

				{/* 하트, 상세페이지, 보내기 아이콘 */}
				<Grid padding = '3px'>

					{/* <IconButton size="small">
        		<FavoriteBorderIcon fontSize="inherit" />
      		</IconButton> */}
					<Heart  _onClick={(e) => {
              //  이벤트 캡쳐링과 버블링을 막아요!
              e.preventDefault();
              e.stopPropagation();
							dispatch(likeToggle)
            }}
            is_like={props.is_like}>
					</Heart>

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
					<Text bold size="10px" margin="8px 8px" >{props.user_info.user_name}</Text> 
					<Text bold size="10px" margin="8px 8px" >{props.contents}</Text>
				</Div>

				{/* 댓글 */}
				{/* <CommentWrite /> */}
				
			</Border>

			{modalOpen && <Modal setOpenModal={setModalOpen} />}

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
	is_like: false,
}


export default Post;

const Border = styled.div`
	width: 400px;
	margin: auto;
	border: 1px solid #dee2e6;
	border-radius: 3px;
	margin-bottom: 20px;
	background-color: #fff;
`;

const Div = styled.div`
	display: flex;
`;