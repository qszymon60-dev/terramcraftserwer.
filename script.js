function copyIP() {
    const ip = document.getElementById("ip").textContent;

    navigator.clipboard.writeText(ip).then(() => {
        alert("✅ IP zostało skopiowane!");
    }).catch(() => {
        alert("❌ Nie udało się skopiować IP.");
    });
}
