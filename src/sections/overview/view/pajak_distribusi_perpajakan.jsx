import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { db } from "../../../firebaseConfig";
import fetchCollectionData from "../../../fetchData";
import AppWebsiteVisits from '../app-website-visits';

export default function AppView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionData = await fetchCollectionData("DP"); // Ganti "pdb" dengan nama koleksi Anda di Firestore
        
        const mappedData = collectionData.map((doc, index) => ({
          id: index + 1, // Buat ID berdasarkan indeks (atau gunakan doc.id jika ada)
          bk: doc.bk || 0, // Pastikan ada fallback jika nilai tidak tersedia
          bm: doc.bm || 0, // Pastikan ada fallback jika nilai tidak tersedia
          pc: doc.pc || 0, // Pastikan ada fallback jika nilai tidak tersedia
          ppdbd: doc.ppdbd || 0, // Pastikan ada fallback jika nilai tidak tersedia
          ppj: doc.ppj || 0, // Pastikan ada fallback jika nilai tidak tersedia
          ppl: doc.ppl || 0, // Pastikan ada fallback jika nilai tidak tersedia
          pppndp: doc.pppndp || 0, // Pastikan ada fallback jika nilai tidak tersedia
          tahun: doc.thn || 0, // Menggunakan variabel `tahun`
        }));
  
        // Urutkan data berdasarkan `tahun` secara ascending
        const sortedData = mappedData.sort((a, b) => a.thn - b.thn);
  
        setUsers(sortedData); // Update state dengan data yang sudah diurutkan
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);


  const bk = users.map(user => user.bk);
  const bm = users.map(user => user.bm);
  const pc = users.map(user => user.pc);
  const ppdbd = users.map(user => user.ppdbd);
  const ppj = users.map(user => user.ppj);
  const ppl = users.map(user => user.ppl);
  const pppndp = users.map(user => user.pppndp);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Target Penerimaan Perpajakan Setiap Tahun"
            subheader="Asli"
            chart={{
              labels: ['Bea Keluar', 'Bea Masuk', 'Pendapatan Cukai', 'Pendapatan Pajak Bumi dan Bangunan', 'Pendapatan Pajak Penghasilan', 'Pendapatan Pajak Lainnya', 'Pendapatan Pajak Pertambahan Nilai dan PPnBM'],
              series: [
                {
                  name: 'Bea Keluar',
                  type: 'pie',  // Pie chart type
                  data: bk,
                },
                {
                  name: 'Bea Masuk',
                  type: 'pie',  // Pie chart type
                  data: bm,
                },
                {
                  name: 'Pendapatan Cukai',
                  type: 'pie',  // Pie chart type
                  data: pc,
                },
                {
                  name: 'Pendapatan Pajak Bumi dan Bangunan',
                  type: 'pie',  // Pie chart type
                  data: ppdbd,
                },
                {
                  name: 'Pendapatan Pajak Penghasilan',
                  type: 'pie',  // Pie chart type
                  data: ppj,
                },
                {
                  name: 'Pendapatan Pajak Lainnya',
                  type: 'pie',  // Pie chart type
                  data: ppl,
                },
                {
                  name: 'Pendapatan Pajak Pertambahan Nilai dan PPnBM',
                  type: 'pie',  // Pie chart type
                  data: pppndp,
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
