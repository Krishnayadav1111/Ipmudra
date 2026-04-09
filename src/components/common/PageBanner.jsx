import React from "react";
import { Box, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion } from "framer-motion";

const PageBanner = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 220, md: 300 },
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #060f26 0%, #0B1F4B 50%, #1a3a7a 100%)",
        overflow: "hidden",
        mt: 0,
        pt: { xs: 8, md: 10 },
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(201,168,76,0.06)",
          border: "1px solid rgba(201,168,76,0.1)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -40,
          left: -40,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(201,168,76,0.04)",
          border: "1px solid rgba(201,168,76,0.08)",
        }}
      />
      {/* Gold bottom border */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 3, md: 8 },
          py: { xs: 4, md: 5 },
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {breadcrumbs.length > 0 && (
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                sx={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}
              />
            }
            sx={{ mb: 2 }}
          >
            <MuiLink
              component={Link}
              to="/"
              sx={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.82rem",
                textDecoration: "none",
                "&:hover": { color: "#C9A84C" },
              }}
            >
              Home
            </MuiLink>
            {breadcrumbs.map((crumb, i) =>
              i === breadcrumbs.length - 1 ? (
                <Typography
                  key={i}
                  sx={{ color: "#C9A84C", fontSize: "0.82rem" }}
                >
                  {crumb.label}
                </Typography>
              ) : (
                <MuiLink
                  key={i}
                  component={Link}
                  to={crumb.path}
                  sx={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.82rem",
                    textDecoration: "none",
                    "&:hover": { color: "#C9A84C" },
                  }}
                >
                  {crumb.label}
                </MuiLink>
              ),
            )}
          </Breadcrumbs>
        )}
        <Typography
          variant="overline"
          sx={{
            color: "#C9A84C",
            letterSpacing: "0.18em",
            display: "block",
            mb: 1,
            fontSize: "0.72rem",
          }}
        >
          IP Mudra
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
            color: "white",
            mb: subtitle ? 1.5 : 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: 600,
              lineHeight: 1.7,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default PageBanner;
