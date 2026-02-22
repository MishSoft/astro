"use client";
import { Box, Button, Typography } from "@mui/material";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <Box  className="bg-[url('/bg-image.webp')] bg-center bg-no-repeat bg-cover">
      <Hero />
    </Box>
  );
}
