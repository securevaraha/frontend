"use client";
import { Card, CardContent, Typography, Box } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import ErrorIcon from "@mui/icons-material/Error";

const icons: Record<string, any> = {
  inventory: InventoryIcon,
  shopping_cart: ShoppingCartIcon,
  store: StoreIcon,
  error: ErrorIcon,
};

export default function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string;
  icon: string;
  color: "primary" | "secondary" | "success" | "error";
}) {
  const Icon = icons[icon] || InventoryIcon;
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: "50%",
              bgcolor: `${color}.light`,
              color: `${color}.main`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon fontSize="large" />
          </Box>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h6">{value}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
