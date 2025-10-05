import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import type { FC, FormEvent, ChangeEvent } from "react";
import { useState } from "react";


interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // ✅ In Vite, env vars must start with VITE_
      const base = import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

      const res = await fetch(`${base}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to send message");
      }

      const json = await res.json();
      console.log("Form submitted:", json);

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      // alert(err.message || "Something went wrong"); // optional
    } finally {
      // reset status after few seconds
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: "var(--background-light)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: 700,
            background: "var(--gradient-primary)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get In Touch
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Left Info Section */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                color: "var(--text-primary)",
                fontWeight: 600,
              }}
            >
              Let's Work Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
              }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              using the contact form or through my social media profiles.
            </Typography>
          </Box>

          {/* Right Contact Form */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              flex: 1,
              width: "100%",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                required
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={status === "sending"}
                  sx={{
                    mt: 2,
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "var(--secondary-color)",
                    },
                  }}
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "Message Sent!"
                    : status === "error"
                    ? "Error, Try Again"
                    : "Send Message"}
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
