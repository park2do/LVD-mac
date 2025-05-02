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
