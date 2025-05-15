function clearSectionsPb() {
    // 불러오는 대상들 모두 비워주기 (필요한 만큼 추가)
    const sections = ['mb_map', 'mb_community', 'mb_defaulPage', 'mb_QnA'];
    
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });
}


function loadPL () { //개시글 목록
    fetch('mainbar/mb_QnA/QnA_PostList/QnA_PostList.html')
        .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
        .then(html => {
        document.getElementById('QnA_PostList').innerHTML = html;
        })
        .catch(error => {
        console.error('Error fetching HTML:', error);
        });
}

function loadPF () {
    fetch('mainbar/mb_QnA/QnA_PostForm/QnA_PostForm.html')
        .then(response => response.text()) // 응답을 "텍스트(문자열)"로 변환
        .then(html => {
        document.getElementById('QnA_PostForm').innerHTML = html;
        })
        .catch(error => {
        console.error('Error fetching HTML:', error);
        });
}

let isFormVisible = false;

// 게시글 작성 버튼 클릭 시 실행할 함수
function toggleQnAForm() {
    const formDiv = document.getElementById("QnA_PostForm");

    if (!isFormVisible) {
        // 폼이 보이지 않는 경우, HTML을 불러와서 폼을 추가
        fetch("mainbar/mb_QnA/QnA_PostForm/QnA_PostForm.html")
            .then(res => res.text())
            .then(html => {
                formDiv.innerHTML = html;
                isFormVisible = true;  // 폼이 보이게 된 상태로 업데이트
            });
    } else {
        // 폼이 이미 보이는 경우, 폼을 숨김
        formDiv.innerHTML = "";
        isFormVisible = false;  // 폼이 사라진 상태로 업데이트
    }
}

// 버튼에 클릭 이벤트 리스너를 추가
document.getElementById("QnA_PostButton").addEventListener("click", toggleQnAForm);
