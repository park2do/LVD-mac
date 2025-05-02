//Community Connection
fetch('sidebar/sb_list/sbli_community/sbli_community.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('sbli_community').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });

//map Connection
fetch('sidebar/sb_list/sbli_map/sbli_map.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('sbli_map').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });

//QnA Connection
    fetch('sidebar/sb_list/sbli_QnA/sbli_QnA.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('sbli_QnA').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });
