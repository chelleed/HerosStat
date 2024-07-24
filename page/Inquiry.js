import { Card, Col, Container, Dropdown, Form, InputGroup, Row } from "react-bootstrap"

function InquiryPage({닉네임, 캐릭터기본정보, 캐릭터능력치정보, 캐릭터장비정보, 현재장비정보, 현재장비정보변경}){

    console.log(캐릭터장비정보)
    

    // let 무기 = 캐릭터장비정보.find(function(x){
    //     return x.item_equipment_slot_name == 'Right Hand'
    //     })
    
    



    return(
    <div>
        <Container fluid>
            <Row style={{marginTop:10, marginLeft:10, marginRight:10}}>
                <Col xs={2}>
                <Row>
                <Card Body className='UsernameBox'>캐릭터 닉네임 : {닉네임}</Card>
                </Row>
                <Row style={{marginTop : 20}}>
                <Card Body className='UsernameBox'> 연마상태 (아이템명을 클릭해주세요)
                    <Row><Col>선택 장비 이름</Col></Row>
                    <Row>
                        <Col>공속</Col>
                        <Col>수치</Col>
                    </Row>
                    <Row>
                        <Col>크리</Col>
                        <Col>수치</Col>
                    </Row>
                    <Row>
                        <Col>밸런스</Col>
                        <Col>수치</Col>
                    </Row>

                </Card>
                </Row>
                </Col>
                
                <Col xs={7}><Card Body className='UsernameBox'>     
                    <Row>
                        <Col className="EquNameText">부위</Col>
                        <Col className="EquipText">아이템명</Col>
                        <Col className="EquipInfoText">강화수치</Col>
                        <Col className="EquipInfoText">접미</Col>
                        <Col className="EquipInfoText">접두</Col>
                        <Col className="EquipInfoText">품질</Col>
                    </Row>     
                    <hr></hr>     
                    <Row>
                        <Col className="EquNameText">무기</Col>
                        <Col className="EquipText">{현재장비정보[0]}</Col>
                        <Col>
                        <Form.Select aria-label="무기강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>

                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">보조무기</Col>
                        <Col className="EquipText">{현재장비정보[1]}</Col>
                        <Col></Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">모자</Col>
                        <Col className="EquipText">{현재장비정보[2]}</Col>
                        <Col>
                        <Form.Select aria-label="무기강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">상의</Col>
                        <Col className="EquipText">{현재장비정보[3]}</Col>
                        <Col>
                        <Form.Select aria-label="무기강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">하의</Col>
                        <Col className="EquipText">{현재장비정보[4]}</Col>
                        <Col>
                        <Form.Select aria-label="무기강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">장갑</Col>
                        <Col className="EquipText">{현재장비정보[5]}</Col>
                        <Col>
                        <Form.Select aria-label="무기강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">신발</Col>
                        <Col className="EquipText">{현재장비정보[6]}</Col>
                        <Col>
                        <Form.Select aria-label="무기강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">로드</Col>
                        <Col className="EquipText">{현재장비정보[7]}</Col>
                        <Col></Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">반지</Col>
                        <Col className="EquipText">{현재장비정보[8]}</Col>
                        <Col>
                        <Form.Select aria-label="반지강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>                           
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>                            
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">반지</Col>
                        <Col className="EquipText">{현재장비정보[9]}</Col>
                        <Col>
                        <Form.Select aria-label="반지강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>                           
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>                            
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">귀걸이</Col>
                        <Col className="EquipText">{현재장비정보[10]}</Col>
                        <Col>
                        <Form.Select aria-label="반지강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>                           
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>                            
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">벨트</Col>
                        <Col className="EquipText">{현재장비정보[11]}</Col>
                        <Col>
                        <Form.Select aria-label="반지강화">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>                           
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>                            
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">목걸이</Col>
                        <Col className="EquipText">{현재장비정보[16]}</Col>
                        <Col></Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText"> 브로치</Col>
                        <Col className="EquipText">{현재장비정보[12]}</Col>
                        <Col></Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">아티펙트</Col>
                        <Col className="EquipText">{현재장비정보[13]}</Col>
                        <Col></Col>
                        <Col>
                        <Form.Select aria-label="무기접두">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기접미">
                            <option value="0">없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select aria-label="무기품질">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">팔찌</Col>
                        <Col className="EquipText">{현재장비정보[14]}</Col>
                        <Col>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            <Form.Control
                            placeholder="물리공격력"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            //onChange={(e) => {닉네임변경(e.target.value)}}
                            />
                        </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            <Form.Control
                            placeholder="마법공격력"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            //onChange={(e) => {닉네임변경(e.target.value)}}
                            />
                        </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            <Form.Control
                            placeholder="방어력"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            //onChange={(e) => {닉네임변경(e.target.value)}}
                            />
                        </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            <Form.Control
                            placeholder="체력"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            //onChange={(e) => {닉네임변경(e.target.value)}}
                            />
                        </InputGroup>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col className="EquNameText">팔찌</Col>
                        <Col className="EquipText">{현재장비정보[15]}</Col>
                        <Col>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            <Form.Control
                            placeholder="물리공격력"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            //onChange={(e) => {닉네임변경(e.target.value)}}
                            />
                        </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            <Form.Control
                            placeholder="마법공격력"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            //onChange={(e) => {닉네임변경(e.target.value)}}
                            />
                        </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            <Form.Control
                            placeholder="방어력"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            //onChange={(e) => {닉네임변경(e.target.value)}}
                            />
                        </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            <Form.Control
                            placeholder="체력"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            //onChange={(e) => {닉네임변경(e.target.value)}}
                            />
                        </InputGroup>
                        </Col>
                    </Row>
                    <hr></hr>
                    
                    <Row>
                        <Col className="EquNameText">배지</Col>
                        <Col className="EquipText">{현재장비정보[17]}</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    
                </Card></Col>
                <Col xs ={3}><Card Body className='UsernameBox'>
                    <Row> 
                        <Col className="StatNameText">직업</Col>
                        <Col className="StatText">{캐릭터기본정보[0]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">레밸</Col>
                        <Col className="StatText">{캐릭터기본정보[1]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">물리공격력</Col>
                        <Col className="StatText">{캐릭터능력치정보[0]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">마법공격력</Col>
                        <Col className="StatText">{캐릭터능력치정보[1]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">방어</Col>
                        <Col className="StatText">{캐릭터능력치정보[2]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">힘</Col>
                        <Col className="StatText">{캐릭터능력치정보[3]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">민첩</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[4]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">지능</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[5]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">의지</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[6]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">행운</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[7]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">최대생명력</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[8]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">스태미나</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[9]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">공격속도</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[12]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">추가피해</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[13]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">크리티컬</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[14]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">크리티컬피해량</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[15]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">크리티컬저항</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[16]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">밸런스</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[17]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">마을이동속도</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[18]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">스킬랭크합</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[19]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText" xs = {8}>공격력제한헤제</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[20]}</Col>    
                    </Row>
                    <Row>
                        <Col className="StatNameText">대항력</Col>                        
                        <Col className="StatText">{캐릭터능력치정보[21]}</Col>    
                    </Row>                    
                    </Card></Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col xs={5}>2 of 3 (wider)</Col>
                <Col><button>설정완료</button></Col>
            </Row>
        </Container>


        <h4></h4>
        
    </div>)
}

export default InquiryPage