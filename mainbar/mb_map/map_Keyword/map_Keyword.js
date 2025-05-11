function KeywordJS() {
}

function KeywordValue(element) {
    const KV = element.innerText; // 또는 element.innerText
    console.log("클릭한 텍스트:", KV);
    searchMap(KV)
}
