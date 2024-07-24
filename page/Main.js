import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MainPage({닉네임, 닉네임변경, 캐릭터식별자, 캐릭터식별자변경, 캐릭터기본정보, 캐릭터기본정보변경, 캐릭터능력치정보, 캐릭터능력치정보변경, 캐릭터장비정보, 캐릭터장비정보변경, 현재장비정보, 현재장비정보변경}){
    const api_key = "test_2e9cc2257ba6bd5c3e9f74d4b37fd97c84befbacbc547e2a6bfd8f45f3cb9524efe8d04e6d233bd35cf2fabdeb93fb0d"
    let navigate = useNavigate()

    function 캐릭터식별자조회(){
        let character_name = 닉네임;
        let url = "https://open.api.nexon.com/heroes/v1/id?character_name="+character_name;
    
        const answer = fetch(url, {
          headers:{
            "x-nxopen-api-key":api_key
          }
        })
        .then(response => response.json())
        .then(data => {캐릭터식별자변경(data["ocid"]); 캐릭터정보변경(data["ocid"]);})
        .catch(error => console.error(error));


        
        console.log(answer);
      }

      function 캐릭터정보변경(식별자){
        let url1 = "https://open.api.nexon.com/heroes/v1/character/basic?ocid="+식별자;
        let url2 = "https://open.api.nexon.com/heroes/v1/character/stat?ocid="+식별자;
        let url3 = "https://open.api.nexon.com/heroes/v1/character/item-equipment?ocid="+식별자;
    
    
        const answer1 = fetch(url1, {
          headers:{
            "x-nxopen-api-key":api_key
          }
        })
        .then(response => response.json())
        .then(data => 캐릭터기본정보출력(data))
        .catch(error => console.error(error));
    
        function 캐릭터기본정보출력(data){
          let copy = [...캐릭터기본정보];
          copy[0] = data["character_class_name"];
          copy[1] = data["character_level"]
          캐릭터기본정보변경(copy);
        }
    
        const answer2 = fetch(url2, {
          headers:{
            "x-nxopen-api-key":api_key
          }
        })
        .then(response => response.json())
        .then(data => 캐릭터기본능력치출력(data))
        .catch(error => console.error(error));
    
    
        function 캐릭터기본능력치출력(data){
          const statData = data["stat"];
          let copy = [...캐릭터능력치정보];
          let i;
          for (i =0; i < 22; i++){
            copy[i] = statData[i]["stat_value"];
          };
          캐릭터능력치정보변경(copy);
        }

        const answer3 = fetch(url3, {
            headers:{
              "x-nxopen-api-key":api_key
            }
          })
          .then(response => response.json())
          .then(data => 캐릭터장비출력(data))
          .catch(error => console.error(error))
      
      
          function 캐릭터장비출력(data){
            let copy = [...캐릭터장비정보]
            copy = data["item_equipment"]
            캐릭터장비정보변경(copy)
            }
          }

          function 아이템정보적용(){
            let copy = [...현재장비정보]
    
            const 무기인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Right Hand"); //존재하지 않으면 -1 반환
            if(무기인덱스 == -1){
                copy[0] = "미장착"
            }
            else{
                copy[0] = 캐릭터장비정보[무기인덱스]["item_name"]
            }
    
            const 보조무기인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Left Hand");
            if(보조무기인덱스 == -1){
                copy[1] = "미장착"
            }
            else{
                copy[1] = 캐릭터장비정보[보조무기인덱스]["item_name"]
            }
    
            const 머리인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Head");
            if(머리인덱스 == -1){
                copy[2] = "미장착"
            }
            else{
                copy[2] = 캐릭터장비정보[머리인덱스]["item_name"]
            }
    
            const 상의인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Upper");
            if(상의인덱스 == -1){
                copy[3] = "미장착"
            }
            else{
                copy[3] = 캐릭터장비정보[상의인덱스]["item_name"]
            }
    
            const 하의인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Lower");
            if(하의인덱스 == -1){
                copy[4] = "미장착"
            }
            else{
                copy[4] = 캐릭터장비정보[하의인덱스]["item_name"]
            }
            
            const 장갑인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Hand");
            if(장갑인덱스 == -1){
                copy[5] = "미장착"
            }
            else{
                copy[5] = 캐릭터장비정보[장갑인덱스]["item_name"]
            }
            const 신발인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Leg");
            if(신발인덱스 == -1){
                copy[6] = "미장착"
            }
            else{
                copy[6] = 캐릭터장비정보[신발인덱스]["item_name"]
            }
            const 로드인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Rhod");
            if(로드인덱스 == -1){
                copy[7] = "미장착"
            }
            else{
                copy[7] = 캐릭터장비정보[로드인덱스]["item_name"]
            }
            const 좌반지인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Right Finger");
            if(좌반지인덱스 == -1){
                copy[8] = "미장착"
            }
            else{
                copy[8] = 캐릭터장비정보[좌반지인덱스]["item_name"]
            }
            const 우반지인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Left Finger");
            if(우반지인덱스 == -1){
                copy[9] = "미장착"
            }
            else{
                copy[9] = 캐릭터장비정보[우반지인덱스]["item_name"]
            }
            const 귀걸이인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Earring");
            if(귀걸이인덱스 == -1){
                copy[10] = "미장착"
            }
            else{
                copy[10] = 캐릭터장비정보[귀걸이인덱스]["item_name"]
            }
            const 벨트인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Belt");
            if(벨트인덱스 == -1){
                copy[11] = "미장착"
            }
            else{
                copy[11] = 캐릭터장비정보[벨트인덱스]["item_name"]
            }
            const 브로치인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Charm");
            if(브로치인덱스 == -1){
                copy[12] = "미장착"
            }
            else{
                copy[12] = 캐릭터장비정보[브로치인덱스]["item_name"]
            }
            const 아티인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Artifact");
            if(아티인덱스 == -1){
                copy[13] = "미장착"
            }
            else{
                copy[13] = 캐릭터장비정보[아티인덱스]["item_name"]
            }
            const 좌팔찌인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Right Wrist");
            if(좌팔찌인덱스 == -1){
                copy[14] = "미장착"
            }
            else{
                copy[14] = 캐릭터장비정보[좌팔찌인덱스]["item_name"]
            }
            const 우팔찌인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Left Wrist");
            if(우팔찌인덱스 == -1){
                copy[15] = "미장착"
            }
            else{
                copy[15] = 캐릭터장비정보[우팔찌인덱스]["item_name"]
            }
            const 목걸이인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Necklace");
            if(목걸이인덱스 == -1){
                copy[16] = "미장착"
            }
            else{
                copy[16] = 캐릭터장비정보[목걸이인덱스]["item_name"]
            }
            const 배지인덱스 = 캐릭터장비정보.findIndex((item) => item.item_equipment_slot_name === "Badge");
            if(배지인덱스 == -1){
                copy[17] = "미장착"
            }
            else{
                copy[17] = 캐릭터장비정보[배지인덱스]["item_name"]
            }
    
            현재장비정보변경(copy)
        }
      

    return(
        <>
        <Container>
            <Row>
                <Col xs={6}><Card Body className='UsernameBox'>
                <InputGroup >
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <Form.Control
                placeholder="닉네임"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {닉네임변경(e.target.value)}}
                />
            </InputGroup></Card></Col>
                <Col><Card Body className='UsernameBox'>조회 후 직업과 레밸이 맞다면 다음버튼을 눌러주세요</Card></Col>
            </Row>
            <Row>
                <Col><button style={{marginLeft : '10px'}} onClick={캐릭터식별자조회} >조회</button></Col>
                <Col><button onClick={()=>{아이템정보적용(); navigate('/inquiry');}}>다음</button></Col>
            </Row>
        </Container>


        
        
        <h4>캐릭터 닉네임 : {닉네임}</h4>
        <h4>캐릭터 식별자 : {캐릭터식별자}</h4>
        <h4>직업 : {캐릭터기본정보[0]}</h4>
        <h4>레밸 : {캐릭터기본정보[1]}</h4>
        <hr></hr>
        </>
    )
}

export default MainPage