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
        const collectionData = await fetchCollectionData("PREDIKRPP");
        
        const mappedData = collectionData.map((doc, index) => ({
          id: index + 1,
          PP: doc.PP || 0,
          tahun: doc.thn || 0,
          pppre: doc.pppre || 0,
        }));
  
        const sortedData = mappedData.sort((a, b) => a.tahun - b.tahun);
        setUsers(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  const PP = users.map(user => user.PP);
  const pppre = users.map(user => user.pppre);
  const labels = users.map(user => user.tahun);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Prediksi Penerimaan Pajak"
            subheader="Asli vs Prediksi"
            chart={{
              labels: labels,
              series: [
                {
                  name: 'Asli',
                  type: 'line',
                  data: PP,
                },
                {
                  name: 'Prediksi',
                  type: 'line',
                  data: pppre,
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
