import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Import Firestore instance

// Fungsi untuk fetch data dari koleksi Firestore
const fetchCollectionData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(data); // Debug: Menampilkan data di console
    return data;
  } catch (error) {
    console.error("Error fetching collection data:", error);
    throw error; // Lempar error untuk ditangani di tempat lain
  }
};

export default fetchCollectionData;
