import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import type { FC } from 'react';

interface Skill {
  name: string;
  level: string;
  icon?: string;
}

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 'Advanced' },
  { name: 'MaterialUI', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'Cypress', level: 'Advanced' },
];

const Skills: FC = () => {
  return (
    <Box
      component="section"
      id="skills"
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
          Skills & Technologies
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {skills.map((skill, index) => (
            <Paper
              key={skill.name}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 'var(--shadow-md)',
                  borderColor: 'var(--primary-color)',
                },
                border: '1px solid transparent',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                }}
              >
                {skill.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'var(--primary-color)',
                  fontWeight: 500,
                }}
              >
                {skill.level}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 