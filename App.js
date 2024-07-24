import './App.css';
import { useState } from 'react';
import { wait } from '@testing-library/user-event/dist/utils';
import { Card, Col, Container, Form, InputGroup, Nav, Navbar, Row } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import InquiryPage from './page/Inquiry.js';
import MainPage from './page/Main.js';
import SettingPage from './page/Setting.js';

function App() {

  let navigate = useNavigate()

  let [닉네임,닉네임변경] = useState('')
  let [캐릭터식별자, 캐릭터식별자변경] = useState('')
  const api_key = "test_2e9cc2257ba6bd5c3e9f74d4b37fd97c84befbacbc547e2a6bfd8f45f3cb9524efe8d04e6d233bd35cf2fabdeb93fb0d"

  

  
  
  let [캐릭터기본정보, 캐릭터기본정보변경] = useState(["직업", "레벨"])
  let [캐릭터능력치정보, 캐릭터능력치정보변경] = useState(["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"])
  let [캐릭터장비정보, 캐릭터장비정보변경] = useState([''])
  let [현재장비정보, 현재장비정보변경] = useState([''])
  



  return (
    <div className="App">
      <Navbar bg= "black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">마영전 스탯 시뮬레이터</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/inquiry')}}>조회</Nav.Link>
            <Nav.Link onClick={() => {navigate('/setting')}}>아이템 세팅</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element = {<div><MainPage 닉네임 = {닉네임} 닉네임변경 = {닉네임변경} 캐릭터식별자 = {캐릭터식별자} 캐릭터식별자변경 = {캐릭터식별자변경} 캐릭터기본정보 = {캐릭터기본정보} 캐릭터기본정보변경 = {캐릭터기본정보변경} 캐릭터능력치정보 = {캐릭터능력치정보} 캐릭터능력치정보변경 = {캐릭터능력치정보변경} 캐릭터장비정보 = {캐릭터장비정보} 캐릭터장비정보변경 = {캐릭터장비정보변경} 현재장비정보 = {현재장비정보} 현재장비정보변경 = {현재장비정보변경} /></div>}></Route>
        <Route path='/inquiry' element = {<div><InquiryPage 닉네임 = {닉네임} 캐릭터기본정보 = {캐릭터기본정보} 캐릭터능력치정보 = {캐릭터능력치정보} 캐릭터장비정보={캐릭터장비정보} 현재장비정보={현재장비정보} 현재장비정보변경={현재장비정보변경} /></div>}></Route>
        <Route path='/setting' element = {<div><SettingPage/></div>}></Route>
      </Routes>


      

    </div>
  );
}

export default App;
