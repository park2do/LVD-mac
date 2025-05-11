let map_Geoloc //전역 설정

function clearSections() { //새로고침
    // 불러오는 대상들 모두 비워주기 (필요한 만큼 추가)
    const sections = ['mb_map', 'mb_community', 'mb_defaulPage', 'mb_QnA'];

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });
}

function DefineMap () {    
    var container = document.getElementById('maps');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };

    map_Geoloc = new kakao.maps.Map(container, options);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map_Geoloc, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map_Geoloc, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map_Geoloc.setCenter(locPosition);      
}    

function geodisplay() {
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
        
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
            
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
            
            var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
            
            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);
                
        });
        
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        
        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
            message = 'geolocation을 사용할수 없어요..'
            
        displayMarker(locPosition, message);
    }
}
// 전체 실행 함수 > Mainbar_Map 구역 전체 표시 후 나머지 작업
function loadMap() {

    clearSections();

    fetch("mainbar/mb_map/mb_map.html")
        .then(res => {
            if (!res.ok) throw new Error("mb_map.html 불러오기 실패");
            return res.text();
        })
        .then(mbmapHtml => {
            document.getElementById("mb_map").innerHTML = mbmapHtml;

            // mb_map.html이 DOM에 삽입된 후 자식 요소가 생기므로 다음 프레임에 실행
            requestAnimationFrame(() => {
                fetch("mainbar/mb_map/map/map.html")
                    .then(res => {
                        if (!res.ok) throw new Error("map.html 불러오기 실패");
                        return res.text();
                    })
                    .then(mapHtml => {
                        const target = document.getElementById("map_");
                        if (target) {
                            target.innerHTML = mapHtml;
                    
                            //Draw Map
                            DefineMap() //at sbli_Map
                            geodisplay() //at sbli_Map
                            loadKeywordbar()

                        } else {
                            console.error("#map이 존재하지 않습니다.");
                        }
                    })

                    .catch(err => console.error("map.html 로드 실패:", err.message));
                
                    
            });
        })
        .catch(err => console.error("mb_map.html 로드 실패:", err.message));
}

function loadKeywordbar () {            
    fetch('mainbar/mb_map/map_Keyword/map_Keyword.html')
        .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
        .then(html => {
        document.getElementById('map_Keyword').innerHTML = html;
        })
        .catch(error => {
        console.error('Error fetching HTML:', error);
    });
}