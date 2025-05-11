function loadPage(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("HTML 불러오기 실패");
            return response.text();
        })
        .then(data => {
            document.getElementById('mb_defaultPage').innerHTML = data;
        })
            .catch(error => {
            document.getElementById('mb_defaultPage').innerHTML = `<p style="color:red;">오류: ${error.message}</p>`;
        });
    }