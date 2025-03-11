function sendRequest() {
    let name = document.getElementById("name").value;
    let feature = document.getElementById("feature").value;
    let details = document.getElementById("details").value;
    let status = document.getElementById("status");

    if (name === "" || feature === "" || details === "") {
        status.innerText = "Harap isi semua kolom!";
        status.style.color = "red";
        return;
    }

    let botToken = "7908961253:AAFcN4hg7YrYmjq4OhKPSNjPdNIOZdUG5Hc";  // Ganti dengan token bot Telegram Anda
    let chatId = "5844779869";  // Ganti dengan chat ID Telegram tujuan
    let message = `📢 *Request Fitur Baru* 📢\n\n👤 Dari: *${name}*\n📌 Nama Fitur: *${feature}*\n📝 Detail: ${details}`;

    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                status.innerText = "Request berhasil dikirim!";
                status.style.color = "green";
            } else {
                status.innerText = "Gagal mengirim request.";
                status.style.color = "red";
            }
        })
        .catch(error => {
            status.innerText = "Terjadi kesalahan.";
            status.style.color = "red";
        });
}