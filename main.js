//sidebar Connection
fetch('sidebar/sidebar.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('sidebar').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });

//mainbar Connection
fetch('mainbar/mainbar.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('mainbar').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });

//etcbar Connection
fetch('etcbar/etcbar.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('etcbar').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });

function DefineMap () {    
    var container = document.getElementById('map1');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);
}