import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import fetchCollectionData from "../../../fetchData";
import AppWebsiteVisits from '../app-website-visits';

export default function AppView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionData = await fetchCollectionData("VK"); // Fetch from Firestore collection
        
        const mappedData = collectionData.map((doc, index) => ({
          id: index + 1,
          tahun: doc.thn || 0,
          pblu: doc.pblu || 0,
          ph: doc.ph || 0,
          pknd: doc.pknd || 0,
          ppdn: doc.ppdn || 0,
          ppl: doc.ppl || 0,
          pppi: doc.pppi || 0,
          ps: doc.ps || 0,
        }));
  
        // Sort data by year (ascending)
        const sortedData = mappedData.sort((a, b) => a.thn - b.thn);
        setUsers(sortedData); // Update state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  // Extract the series data for the chart
  const pblu = users.map(user => user.pblu);
  const ph = users.map(user => user.ph);
  const pknd = users.map(user => user.pknd);
  const ppdn = users.map(user => user.ppdn);
  const ppl = users.map(user => user.ppl);
  const pppi = users.map(user => user.pppi);
  const ps = users.map(user => user.ps);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        APBN
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Variabel Kontribusi"
            subheader="Asli"
            chart={{
              labels: users.map(user => user.tahun), // Year as x-axis labels
              series: [
                {
                  name: 'Pendapatan Badan Layanan Umum',
                  type: 'line',
                  data: pblu,
                },
                {
                  name: 'Penerima Hibah',
                  type: 'line',
                  data: ph,
                },
                {
                  name: 'Pendapatan dari Kekayaan Negara diPisahkan',
                  type: 'line',
                  data: pknd,
                },
                {
                  name: 'Penerimaan Pajak Dalam Negeri',
                  type: 'line',
                  data: ppdn,
                },
                {
                  name: 'Pendapatan PNBP Lainnya',
                  type: 'line',
                  data: ppl,
                },
                {
                  name: 'Pendapatan Pajak Perdagangan Internasional',
                  type: 'line',
                  data: pppi,
                },
                {
                  name: 'Penerimaan SDA',
                  type: 'line',
                  data: ps,
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
