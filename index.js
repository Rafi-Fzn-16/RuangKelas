const express = require("express");

const ruangKelas = express();
const PORT = 3000;

ruangKelas.use(express.json());

ruangKelas.get("/", (req, res) => {
    res.json({
        message: "API RuangKelas berhasil dijalankan!"
    });
});

ruangKelas.get("/mata-pelajaran", (req, res) => {
    const mataPelajaran = [
        {
            id: 1,
            nama: "Matematika"
        },
        {
            id: 2,
            nama: "Bahasa Inggris"
        },
        {
            id: 3,
            nama: "Sejarah"
        }
    ];

    res.json(mataPelajaran);
});

ruangKelas.listen(PORT, () => {
    console.log(`RuangKelas berjalan di port ${PORT}`);
});