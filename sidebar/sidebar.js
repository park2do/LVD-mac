//sb_logo Connection
fetch('sidebar/sb_logo/sb_logo.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('sb_logo').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });
//sb_list Connection
fetch('sidebar/sb_list/sb_list.html')
    .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
    .then(html => {
    document.getElementById('sb_list').innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching HTML:', error);
    });
