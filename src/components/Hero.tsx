import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--background-dark) 0%, #4c1d95 100%)',
        color: 'var(--text-light)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              background: 'var(--gradient-primary)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Frontend Developer
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 4,
              color: 'var(--text-light)',
              opacity: 0.9,
            }}
          >
            Crafting beautiful and functional web experiences
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              href="#projects"
              sx={{
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'var(--secondary-color)',
                },
              }}
            >
              View My Work
            </Button>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="outlined"
              href="#contact"
              sx={{
                borderColor: 'var(--primary-color)',
                color: 'var(--primary-color)',
                '&:hover': {
                  borderColor: 'var(--secondary-color)',
                  color: 'var(--secondary-color)',
                },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 