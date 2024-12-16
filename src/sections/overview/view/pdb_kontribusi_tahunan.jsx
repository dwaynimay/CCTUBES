import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import fetchCollectionData from "../../../fetchData";
import AppWebsiteVisits from '../app-website-visits';

export default function AppView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionData = await fetchCollectionData("PDBKT");
        
        const mappedData = collectionData.map((doc, index) => ({
          id: index + 1,
          tahun: doc.thn || 0,
          debj: doc.debj || 0,
          ds: doc.ds || 0,
          ebj: doc.ebj || 0,
          pi: doc.pi || 0,
          pkl: doc.pkl || 0,
          pkp: doc.pkp || 0,
          pkr: doc.pkr || 0,
          pmtdb: doc.pmtdb || 0,
        }));
  
        const sortedData = mappedData.sort((a, b) => a.tahun - b.tahun);
        setUsers(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);


  const debj = users.map(user => user.debj);
  const ds = users.map(user => user.ds);
  const ebj = users.map(user => user.ebj);
  const pi = users.map(user => user.pi);
  const pkl = users.map(user => user.pkl);
  const pkp = users.map(user => user.pkp);
  const pkr = users.map(user => user.pkr);
  const pmtdb = users.map(user => user.pmtdb);
  const labels = users.map(user => user.tahun);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Kontribusi Tiap Variabel Terhadap PDB dalam Skala Tahunan"
            subheader="Asli"
            chart={{
              labels: labels, // Tahun sebagai sumbu X
              series: [
                {
                  name: 'Dikurangi Impor Barang Jasa',
                  type: 'line', // Ubah ke grafik garis
                  data: debj,
                },
                {
                  name: 'Diskrepansi Statistik',
                  type: 'line',
                  data: ebj,
                },
                {
                  name: 'Ekspor Barang Jasa',
                  type: 'line',
                  data: ebj,
                },
                {
                  name: 'Perubahan Inventori',
                  type: 'line',
                  data: pi,
                },
                {
                  name: 'Pengeluaran Konsumsu LNPRT',
                  type: 'line',
                  data: pkl,
                },
                {
                  name: 'Pengeluaran Konsumsi Pemerintah',
                  type: 'line',
                  data: pkp,
                },
                {
                  name: 'Pengeluaran Konsumsi Rumahtangga',
                  type: 'line',
                  data: pkr,
                },
                {
                  name: 'Pembentukan Modal Tetap Domestik Bruto',
                  type: 'line',
                  data: pmtdb,
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
