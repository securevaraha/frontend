"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ExpenseProfitChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses",
        data: [1200, 1900, 3000, 2500, 2200, 2800],
        borderColor: "#ef5350",
        backgroundColor: "#ef5350",
      },
      {
        label: "Profit",
        data: [1500, 2400, 3500, 3000, 2800, 3500],
        borderColor: "#66bb6a",
        backgroundColor: "#66bb6a",
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Expense vs Profit
        </Typography>
        <Line data={data} />
      </CardContent>
    </Card>
  );
}
