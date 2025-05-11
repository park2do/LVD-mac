let map_Search
let infowindow
let Searchkeyword
let ps

function submitInput() {
    const input = document.getElementById("mapSearchInput");
    if (input) {
        Searchkeyword = input.value.trim();
        console.log("입력된 키워드:", Searchkeyword);  // 콘솔에 출력
        searchMap(Searchkeyword);  // 장소 검색도 함께 실행
    }
}


// 키워드로 장소를 검색합니다
function searchMap_BasicSetting () {

    infowindow = new kakao.maps.InfoWindow({zIndex:1}); //
}

function searchMap(Searchkeyword) {
    ps = new kakao.maps.services.Places(); 
    ps.keywordSearch(Searchkeyword, placesSearchCB); 
}

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        var mapContainer = document.getElementById('maps'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };  
        map_Search = new kakao.maps.Map(mapContainer, mapOption); 
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarkerSearch(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map_Search.setBounds(bounds);
    } 
}

// 지도에 마커를 표시하는 함수입니다
function displayMarkerSearch(place) {
    
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map_Search,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map_Search, marker);
    });
}