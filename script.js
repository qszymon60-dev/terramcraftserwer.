function copyIP() {
    const ip = document.getElementById("ip").textContent;

    navigator.clipboard.writeText(ip).then(() => {
        alert("✅ IP zostało skopiowane!");
    }).catch(() => {
        alert("❌ Nie udało się skopiować IP.");
    });
}

async function checkServer() {
    const status = document.getElementById("server-status");

    try {
        const response = await fetch(
            "https://api.mcsrvstat.us/2/terramcraft.falix.gg"
        );

        const data = await response.json();

        if (data.online) {
            status.innerHTML =
                "🟢 Serwer ONLINE<br>" +
                "👥 Gracze: " +
                data.players.online +
                "/" +
                data.players.max;
        } else {
            status.innerHTML =
                "🔴 Serwer OFFLINE";
        }

    } catch {
        status.innerHTML =
            "⚠️ Nie można sprawdzić serwera";
    }
}

checkServer();
