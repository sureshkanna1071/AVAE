import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add logic to send the form data (formData) to your server or perform any other action.
    // For this example, we'll just show a success message.
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        variant="outlined"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        variant="outlined"
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Message sent successfully!"
      />
    </form>
  );
};

export default ContactForm;
