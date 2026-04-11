import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link, NavLink, useNavigate } from "react-router-dom";
import useNavbarScroll from "../../hooks/useNavbarScroll";
import { NAV_LINKS } from "../../utils/constants";

const Navbar = () => {
  const scrolled = useNavbarScroll(80);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);

  const navbarBg = scrolled ? "rgba(11, 31, 75, 0.98)" : "transparent";

  const drawer = (
    <Box
      sx={{
        width: 300,
        height: "100%",
        background: "linear-gradient(160deg, #060f26 0%, #0B1F4B 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2.5,
          borderBottom: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            component="img"
            src="/src/assets/ipmudra.png"
            alt="IP Mudra Logo"
            sx={{
              height: 46,
              objectFit: "contain",
              mixBlendMode: "screen",
            }}
          />
          <Box>
            <Box
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#C9A84C",
                lineHeight: 1.1,
              }}
            >
              IP MUDRA
            </Box>
            <Box
              sx={{
                fontSize: "0.7rem",
                color: "#C9A84C",
                mt: 0.3,
                fontWeight: 600,
              }}
            >
              विचारो का अधिकार
            </Box>
          </Box>
        </Stack>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flex: 1, pt: 1 }}>
        {NAV_LINKS.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              component={NavLink}
              to={link.path}
              end={link.path === "/"}
              onClick={handleDrawerToggle}
              sx={{
                px: 3,
                py: 1.5,
                color: "rgba(255,255,255,0.85)",
                transition: "all 0.2s",
                "&.active": {
                  color: "#C9A84C",
                  background: "rgba(201,168,76,0.1)",
                  borderRight: "3px solid #C9A84C",
                },
                "&:hover": {
                  color: "#C9A84C",
                  background: "rgba(201,168,76,0.07)",
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: "rgba(201,168,76,0.2)", mx: 3 }} />
      <Box sx={{ p: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => {
            navigate("/contact");
            handleDrawerToggle();
          }}
          sx={{ py: 1.5, fontWeight: 700 }}
        >
          Get Consultation
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: navbarBg,
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1400,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
            py: scrolled ? 0.5 : 1,
            transition: "padding 0.3s ease",
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src="/src/assets/ipmudra.png"
              alt="IP Mudra Logo"
              sx={{
                height: { xs: 50, md: 68 },
                objectFit: "contain",
                flexShrink: 0,
                mixBlendMode: "screen",
              }}
            />
            <Box>
              <Box
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 800,
                  fontSize: { xs: "1.4rem", md: "1.8rem" },
                  color: "#C9A84C",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                IP MUDRA
              </Box>
              <Box
                sx={{
                  fontSize: { xs: "0.7rem", md: "1rem" },
                  color: "#C9A84C",
                  mt: 0.5,
                  fontWeight: 600,
                  display: { xs: "none", sm: "block" },
                }}
              >
                विचारो का अधिकार
              </Box>
            </Box>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Stack direction="row" spacing={0.5} alignItems="center">
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.path}
                  component={NavLink}
                  to={link.path}
                  end={link.path === "/"}
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    px: 1.5,
                    py: 1,
                    minWidth: "auto",
                    textTransform: "none",
                    letterSpacing: "0.02em",
                    borderRadius: 1,
                    transition: "all 0.2s",
                    "&.active": {
                      color: "#C9A84C",
                      background: "rgba(201,168,76,0.1)",
                    },
                    "&:hover": {
                      color: "#C9A84C",
                      background: "rgba(201,168,76,0.07)",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/contact"
                sx={{
                  ml: 1.5,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  px: 2.5,
                  py: 1,
                  whiteSpace: "nowrap",
                }}
              >
                Get Consultation
              </Button>
            </Stack>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: "white",
                ml: 1,
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: 1,
                p: 0.8,
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { background: "transparent" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
