import { Box, Container, Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import type { FC } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
    image: 'https://preview.brand.page/preview/template/9ad66d76-eef5-4407-9d0c-02018d1bfb5b/logo-template/2e50649b-5c6a-46bd-874c-210b1f69383e?deviceType=brandsite-desktop&logoTemplateVersion=1',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/Laxmikhawase/EchoBeats_MusicApp',
    liveUrl: 'https://laxmikhawase.github.io/EchoBeats_MusicApp/',
  },
  {
    title: 'EchoBeats',
    description: 'Echobeats is the music streaming web app featuring sleek UI, song previews, and playlist management. Built with React and modern libraries to deliver a smooth and interactive user experience.',
    image: 'https://www.shutterstock.com/shutterstock/videos/1107113887/thumb/1.jpg?ip=x480',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    githubUrl: 'https://github.com/Laxmikhawase/EchoBeats_MusicApp',
    liveUrl: 'https://laxmikhawase.github.io/EchoBeats_MusicApp/',
  },
];

const Projects: FC = () => {
  return (
    <Box
      component="section"
      id="projects"
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
          Featured Projects
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={project.title}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 'var(--shadow-md)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 2,
                  }}
                >
                  {project.technologies.map((tech) => (
                    <Typography
                      key={tech}
                      variant="body2"
                      sx={{
                        color: 'var(--primary-color)',
                        backgroundColor: 'rgba(124, 58, 237, 0.1)',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '4px',
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'var(--primary-color)',
                      '&:hover': {
                        backgroundColor: 'rgba(124, 58, 237, 0.1)',
                        color:"grey"
                      },
                    }}
                  >
                    GitHub
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={{
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'var(--secondary-color)',
                        color:"grey"
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                </motion.div>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 