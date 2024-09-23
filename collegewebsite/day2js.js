function toggleText(moreId, btn) {
    const moretext = document.getElementById(moreId);
    
    if (moretext.style.display === "none" || moretext.style.display === "") {
        moretext.style.display = "block";  // Use block for better layout
        btn.textContent = "Read Less";
    } else {
        moretext.style.display = "none";
        btn.textContent = "Read More";
    }
}