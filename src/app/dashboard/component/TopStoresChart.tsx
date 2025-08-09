"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TopStoresChart() {
  const data = {
    labels: ["Store A", "Store B", "Store C", "Store D"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 800, 1500],
        backgroundColor: "#42a5f5",
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top Stores
        </Typography>
        <Bar data={data} />
      </CardContent>
    </Card>
  );
}
