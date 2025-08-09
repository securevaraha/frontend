"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function InventoryChart({ sold, total }: { sold: number; total: number }) {
  const data = {
    labels: ["Sold", "In Stock"],
    datasets: [
      {
        data: [sold, total - sold],
        backgroundColor: ["#42a5f5", "#cfd8dc"],
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Inventory Status
        </Typography>
        <Doughnut data={data} />
      </CardContent>
    </Card>
  );
}
