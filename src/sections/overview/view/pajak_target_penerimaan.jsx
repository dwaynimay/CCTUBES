import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import fetchCollectionData from "../../../fetchData";  // Make sure this utility is correctly set up
import AppWebsiteVisits from '../app-website-visits'; // Assuming this handles the chart rendering

export default function AppView() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionData = await fetchCollectionData("PDNIT"); // Ganti "PRE" dengan nama koleksi Anda di Firestore
        
        const mappedData = collectionData.map((doc, index) => ({
          id: index + 1, // Create ID based on index
          pdi: doc.pdi || 0, // Fallback if value is not available
          tahun: doc.thn || 0, // Year (tahun)
          pdn: doc.pdn || 0, // Prediction data
        }));

        // Sort the data by `tahun` in ascending order
        const sortedData = mappedData.sort((a, b) => a.thn - b.thn);

        setUsers(sortedData); // Set the users state with sorted data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component is mounted

  // Data arrays for chart
  const pdi = users.map(user => user.pdi);
  const pdn = users.map(user => user.pdn);
  const tahun = users.map(user => user.tahun);

  if (loading) {
    return (
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Loading Data...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Penerimaan Perpajakan Target"
            subheader="Asli"
            chart={{
              labels: tahun,
              series: [
                {
                  name: 'Pajak Perdagangan Internasional',  // Original data
                  type: 'bar',  // Line chart type
                  fill: 'solid',
                  data: pdi,
                },
                {
                  name: 'Pajak Dalam Negeri', // Predicted data
                  type: 'bar',  // Line chart type
                  fill: 'solid',
                  data: pdn,
                }
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
