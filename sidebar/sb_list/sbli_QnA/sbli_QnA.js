function clearSectionsMb() {
    // 불러오는 대상들 모두 비워주기 (필요한 만큼 추가)
    const sections = ['mb_map', 'mb_community', 'mb_defaulPage', 'mb_QnA'];
    
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });
}


function loadPage(url) {

    clearSectionsMb()

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("HTML 불러오기 실패");
            return response.text();
        })
        .then(data => {
            document.getElementById('mb_QnA').innerHTML = data;
        })
            .catch(error => {
            document.getElementById('mb_QnA').innerHTML = `<p style="color:red;">오류: ${error.message}</p>`;
        });
    
    loadPL() //PostList Page Load
    TogglingPostingPage()
    }
