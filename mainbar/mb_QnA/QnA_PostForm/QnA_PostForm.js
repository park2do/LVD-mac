function submitPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!title || !content) {
        alert("제목과 내용을 모두 입력하세요.");
        return;
    }

    const data = { title, content };

    fetch("/api/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        })
    .then(response => response.text())
    .then(message => {
        alert("서버 응답: " + message);
      document.getElementById("postForm").reset(); // 폼 초기화
    })
    .catch(error => {
        console.error("에러 발생:", error);
        alert("오류가 발생했습니다.");
    });
}