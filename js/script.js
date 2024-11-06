// Fungsi untuk menghitung BMI
function hitungBMI() {
    // Mengambil nilai dari form input
    const gender = document.querySelector('input[name="gender"]:checked');
    const height = parseFloat(document.getElementById("height").value) / 100; // cm ke meter
    const weight = parseFloat(document.getElementById("weight").value);

    // Validasi input form
    if (!gender || isNaN(height) || isNaN(weight)) {
        alert("Mohon isi semua bidang dengan benar.");
        return;
    }

    const bmi = weight / (height * height);
    let interpretasi = "";

    if (bmi < 18.5) interpretasi = "Kurus";
    else if (bmi < 24.9) interpretasi = "Normal";
    else if (bmi < 29.9) interpretasi = "Berat Badan Berlebih";
    else interpretasi = "Obesitas";

    document.getElementById("hasilBMI").innerHTML = `
        <h2>Berat Badan ${interpretasi}</h2>
        <p><strong>${bmi.toFixed(1)}</strong></p>
        <p>Hasil BMI diantara 23 dan 25<br>Anda memiliki berat badan berlebih.</p>
    `;
}
// Fungsi untuk menampilkan hasil
function displayResult(bmi) {
    const hasilBMI = document.getElementById('hasilBMI');
    hasilBMI.innerHTML = `<h2>Hasil BMI: ${bmi.toFixed(2)}</h2>`;
    // Logika lebih lanjut untuk kategori BMI bisa ditambahkan di sini
}

// Fungsi untuk mereset form
function resetForm() {
    document.getElementById('bmiForm').reset(); // Reset form
    document.getElementById('hasilBMI').innerHTML = ""; // Kosongkan hasil BMI
}
