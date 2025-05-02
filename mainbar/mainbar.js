fetch('mainbar/mb_map/mb_map.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('mb_map').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });

//Map
fetch('mainbar/mb_communitiy/mb_community.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('mb_community').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });

//QnA 
fetch('mainbar/mb_QnA/mb_QnA.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('mb_QnA').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });
