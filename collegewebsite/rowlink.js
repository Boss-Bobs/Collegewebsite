function toggleText() {
    const moreText = document.getElementById("more");
    const btn = document.getElementById("readMoreBtn");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
}
