import React from "react";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SectionTitle from "../common/SectionTitle";

const highlights = [
  "Strategic IP Protection and Enforcement",
  "Representation before Indian Courts & Registries",
  "Ethical and Transparent Legal Practice",
  "Tailored Advisory for Startups & Enterprises",
  "15+ Years of Intellectual Property Expertise",
  "Pan-India Legal Coverage",
];

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #F8F6F1 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(11,31,75,0.03)",
          border: "60px solid rgba(201,168,76,0.05)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              title="Our Motivation"
              subtitle="IP Mudra is a trusted name in intellectual property law, combining decades of expertise with a relentless commitment to protecting your creative and commercial innovations."
              align="left"
              overline="About Us"
            />
            <Typography
              variant="body1"
              sx={{ color: "#4a4a6a", lineHeight: 1.85, mb: 3 }}
            >
              Our focus is excellence, our philosophy is constant vigilance, and
              our belief is the ethical exercise of the laws we are entrusted to
              oversee. We combine our collective experience to give robust legal
              protection to your creativity — advising individuals and corporate
              bodies in all matters of intellectual property.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#4a4a6a", lineHeight: 1.85, mb: 4 }}
            >
              The world is building in many sociological and infrastructural
              ways. We are here to push its legal growth — ensuring that
              innovation is rewarded, not stolen.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 1.5,
                mb: 4,
              }}
            >
              {highlights.map((h, i) => (
                <Stack
                  key={i}
                  direction="row"
                  spacing={1}
                  alignItems="flex-start"
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#C9A84C",
                      fontSize: 18,
                      mt: 0.3,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "#4a4a6a", fontSize: "0.88rem" }}
                  >
                    {h}
                  </Typography>
                </Stack>
              ))}
            </Box>

            <Button
              component={Link}
              to="/about"
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.6, fontWeight: 700 }}
            >
              Learn More About Us
            </Button>
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Box sx={{ position: "relative", pb: { xs: 0, md: 3 } }}>
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, #0B1F4B 0%, #1a3a7a 100%)",
                  borderRadius: 4,
                  p: { xs: 4, md: 5 },
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 24px 64px rgba(11,31,75,0.2)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: "rgba(201,168,76,0.08)",
                    pointerEvents: "none",
                  }}
                />

                <Typography
                  variant="overline"
                  sx={{
                    color: "#C9A84C",
                    letterSpacing: "0.15em",
                    display: "block",
                    mb: 2,
                  }}
                >
                  Our Expertise
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    fontWeight: 700,
                    color: "white",
                    mb: 3,
                    lineHeight: 1.3,
                  }}
                >
                  Comprehensive IP Protection Across All Domains
                </Typography>

                <Stack spacing={2.5}>
                  {[
                    { domain: "Trademark & Brand Protection", pct: 95 },
                    { domain: "Patent Prosecution & Litigation", pct: 88 },
                    { domain: "Copyright & Digital Rights", pct: 92 },
                    { domain: "Corporate & Transactional IP", pct: 85 },
                  ].map((item) => (
                    <Box key={item.domain}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        mb={0.8}
                      >
                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.8)",
                            fontSize: "0.85rem",
                          }}
                        >
                          {item.domain}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#C9A84C",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            flexShrink: 0,
                            ml: 1,
                          }}
                        >
                          {item.pct}%
                        </Typography>
                      </Stack>
                      <Box
                        sx={{
                          height: 5,
                          borderRadius: 3,
                          background: "rgba(255,255,255,0.1)",
                        }}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            width: `${item.pct}%`,
                            borderRadius: 3,
                            background:
                              "linear-gradient(90deg, #C9A84C, #e0c070)",
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Stack>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 2,
                    mt: 3,
                    pt: 3,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    textAlign: "center",
                  }}
                >
                  {[
                    { v: "15+", l: "Years" },
                    { v: "500+", l: "Cases" },
                    { v: "98%", l: "Success" },
                  ].map((s) => (
                    <Box key={s.l}>
                      <Typography
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontSize: "1.8rem",
                          fontWeight: 700,
                          color: "#C9A84C",
                          lineHeight: 1,
                        }}
                      >
                        {s.v}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.5)",
                          fontSize: "0.75rem",
                          mt: 0.5,
                        }}
                      >
                        {s.l}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Floating badge */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: -50, md: -20 },
                  left: { xs: 20, md: -10 },
                  background: "linear-gradient(135deg, #C9A84C, #e0c070)",
                  borderRadius: 3,
                  px: 3,
                  py: 2,
                  boxShadow: "0 8px 24px rgba(201,168,76,0.4)",
                }}
              >
                <Typography
                  sx={{
                    color: "#0B1F4B",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    fontFamily: '"Playfair Display", serif',
                  }}
                >
                  Trusted by 200+ Clients
                </Typography>
                <Typography
                  sx={{ color: "rgba(11,31,75,0.7)", fontSize: "0.75rem" }}
                >
                  Across India & Internationally
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
