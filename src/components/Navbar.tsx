import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import type { FC } from "react";

const MotionButton = motion(Button); // Wrap MUI Button with framer-motion

const Navbar: FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <Toolbar>
        {/* Animated Title */}
        <Typography
          variant="h6"
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            background: "var(--gradient-primary)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <img src="https://img.freepik.com/premium-vector/creative-logo-design-vector-template_443688-71.jpg" alt="Logo" 
          style={{
              height: "50px",
              marginTop: "2px",
              borderRadius: "50px", 
            }}/>
        </Typography>

        {/* Animated Nav Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <MotionButton
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                sx={{
                  color: "var(--text-primary)",
                  textTransform: "none",
                  "&:hover": {
                    color: "var(--primary-color)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item}
              </MotionButton>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
