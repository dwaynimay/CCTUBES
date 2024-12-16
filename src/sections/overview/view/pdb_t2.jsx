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
        const collectionData = await fetchCollectionData("T2");
        
        const mappedData = collectionData.map((doc, index) => ({
          id: index + 1,
          pdb: doc.pdb || 0,
          tahun: doc.thn || 0,
          prediksi: doc.pre || 0,
        }));
  
        const sortedData = mappedData.sort((a, b) => a.tahun - b.tahun);
        setUsers(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  const pdb = users.map(user => user.pdb);
  const pred = users.map(user => user.prediksi);
  const labels = users.map(user => user.tahun);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Triwulan 2"
            subheader="Data Asli vs Prediksi"
            chart={{
              labels: labels, // Tahun sebagai sumbu X
              series: [
                {
                  name: 'Asli',
                  type: 'bar', // Ubah ke grafik batang
                  data: pdb,
                },
                {
                  name: 'Prediksi',
                  type: 'bar', // Ubah ke grafik batang
                  data: pred,
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
