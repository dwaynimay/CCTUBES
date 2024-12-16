import React, { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Pastikan file ini sudah benar

const App = () => {
  // Data JSON yang akan diunggah
  const data = 
  [
    {"thn": 2025, "prediksi": 970421.25},
    {"thn": 2026, "prediksi": 883562.33},
    {"thn": 2027, "prediksi": 834412.28},
    {"thn": 2028, "prediksi": 815334.44},
    {"thn": 2029, "prediksi": 802277.17},
    {"thn": 2030, "prediksi": 780562.89}
]


  
  // Fungsi untuk mengunggah data ke Firestore
  const uploadData = async () => {
    try {
      const collectionRef = "PREDIKBN"; // Ganti dengan nama koleksi yang diinginkan

      // Iterasi data dan unggah setiap item
      const uploadPromises = data.map(async (item) => {
        const docRef = doc(db, collectionRef, item.thn.toString());
        await setDoc(docRef, item); // Mengunggah data ke dokumen
        console.log(`Data untuk thn ${item.thn} berhasil diunggah.`);
      });

      // Tunggu semua proses selesai
      await Promise.all(uploadPromises);

      console.log("Semua data berhasil diunggah ke Firestore!");
    } catch (error) {
      console.error("Terjadi kesalahan saat mengunggah data:", error);
    }
  };

  // Jalankan fungsi upload saat komponen pertama kali dirender
  useEffect(() => {
    uploadData();
  }, []); // Dependensi kosong memastikan fungsi hanya dipanggil sekali

  return (
    <div>
      Proses upload sedang berjalan, cek console untuk detailnya.
    </div>
  );

}
;

export default App;