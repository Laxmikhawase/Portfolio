import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const About: FC = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        backgroundColor: 'var(--background-light)',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            background: 'var(--gradient-primary)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                color: 'var(--text-primary)',
                fontWeight: 600,
              }}
            >
              Frontend Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              I'm a passionate frontend developer with expertise in modern JavaScript frameworks
              and a keen eye for creating beautiful, user-friendly interfaces. My focus is on
              building responsive and performant web applications that provide exceptional
              user experiences.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              With a strong foundation in HTML, CSS, and JavaScript, I specialize in React
              and its ecosystem. I'm constantly learning and exploring new technologies to
              stay at the forefront of web development.
            </Typography>
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src="https://parkyddigital.com/img/service%20digital%20marketing%20agency%20toronto.gif"
              alt="Profile"
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-lg)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 