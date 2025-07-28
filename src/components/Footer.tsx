import { Box, Container, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid #e0e0e0',
        py: 4,
        mt: 10,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: 3,
        }}
      >
        {/* Email */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Box sx={{ minWidth: 200 }}>
            <Typography variant="h6" color="#8b5cf6" fontWeight={600}>Email</Typography>
            <Link href="mailto:laxmikhawase01@gmail.com" underline="hover" color="inherit">
              laxmikhawase01@gmail.com
            </Link>
          </Box>
        </motion.div>

        {/* GitHub */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Box sx={{ minWidth: 200 }}>
            <Typography variant="h6" color="#8b5cf6" fontWeight={600}>GitHub</Typography>
            <Link
              href="https://github.com/Laxmikhawase"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              https://github.com/Laxmikhawase
            </Link>
          </Box>
        </motion.div>

        {/* Resume */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Box sx={{ minWidth: 200 }}>
            <Typography variant="h6" color="#8b5cf6" fontWeight={600}>Resume</Typography>
            <Link
              href="https://drive.google.com/file/d/1HxuB7NyoEJxfBqS2XT25aquqEU-vCSvx/view?usp=drive_link"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              https://LaxmiKhawase
            </Link>
          </Box>
        </motion.div>

        {/* LinkedIn */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Box sx={{ minWidth: 200 }}>
            <Typography variant="h6" color="#8b5cf6" fontWeight={600}>LinkedIn</Typography>
            <Link
              href="https://www.linkedin.com/in/laxmi-khawase-367563233/"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              Click here
            </Link>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
