import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const TeamSection = ({ members }) => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #ffffff 0%, #F8F6F1 100%)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <SectionTitle
          title="Our Legal Team"
          subtitle="A team of dedicated legal professionals with deep expertise across all areas of intellectual property law."
          overline="The Team"
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {members.map(
            (member, index) => (
              console.log(member),
              (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      border: "1px solid rgba(11,31,75,0.07)",
                      background: "white",
                      pt: 3,
                      height: "100%",
                      "&:hover": {
                        boxShadow: "0 16px 40px rgba(11,31,75,0.12)",
                        transform: "translateY(-6px)",
                      },
                      transition: "all 0.35s ease",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 0 }}
                    >
                      <Avatar
                        src={member.avatar || undefined}
                        sx={{
                          width: 80,
                          height: 80,
                          background:
                            "linear-gradient(135deg, #0B1F4B, #1a3a7a)",
                          fontSize: "1.2rem",
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          border: "3px solid white",
                          boxShadow: "0 4px 16px rgba(11,31,75,0.2)",
                        }}
                      >
                        {!member.avatar && member.initials}
                      </Avatar>
                    </Box>
                    <CardContent sx={{ pt: 2, pb: 2.5, px: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: "#0B1F4B",
                          mb: 0.5,
                          lineHeight: 1.3,
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#C9A84C",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          mb: 0.8,
                        }}
                      >
                        {member.role}
                      </Typography>
                      {/* <Typography
                        variant="caption"
                        sx={{
                          color: "#6a6a8a",
                          display: "block",
                          lineHeight: 1.5,
                          fontSize: "0.72rem",
                          mb: 1.5,
                        }}
                      >
                        {member.specialization}
                      </Typography> */}
                      <Chip
                        label={member.experience}
                        size="small"
                        sx={{
                          background: "rgba(11,31,75,0.06)",
                          color: "#0B1F4B",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          height: 20,
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              )
            ),
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
