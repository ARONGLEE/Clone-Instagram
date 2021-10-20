import React from "react";
import styled from "styled-components";

//import { Button } from "../elements";

const Modal = (props) => {
  const { setOpenModal } = props;

  // const list = ['신고', '팔로우 취소', '게시물로 이동', '공유 대상...', '링크 복사', '퍼가기', '취소'];

  // 모달 오버레이에서 스크롤 방지
  React.useEffect(() => {
    document.body.style.cssText = `
				position: fixed; 
				top: -${window.scrollY}px;
				overflow-y: scroll;
				width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <React.Fragment>
      <ModalBackground class="modal-background" id="modal">
        <ModalContainer class="modal">
          <Button style={{ borderRadius: "10px 10px 0 0" }}>삭제</Button>
          <Button>팔로우 취소</Button>
          <Button>게시물로 이동</Button>
          <Button>공유 대상...</Button>
          <Button>링크 복사</Button>
          <Button>퍼가기</Button>
          <Button
            style={{ borderRadius: "0 0 10px 10px" }}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            취소
          </Button>
        </ModalContainer>
      </ModalBackground>
    </React.Fragment>
  );
};

export default Modal;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContainer = styled.div`
  /* width: 384px; */
  border-radius: 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  border-width: 0;
  /* padding: 25px; */
`;

const Button = styled.button`
  width: 384px;
  font-size: 14px;
  font-weight: bold;
  padding: 14px;
  background-color: #fff;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #dee2e6;
`;
