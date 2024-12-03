import { useState } from 'react';
import { Container, Box, TextField, Typography, Button, Alert } from '@mui/material';
import './Register.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://your-api-endpoint.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to register');
            }

            const data = await response.json();
            console.log('Response:', data);

            setMessage('Registration Successful!');
            setError('');
        } catch (error) {
            setError('Error Registering For An Account');
            setMessage('');
            console.error('Error Registering:', error);
        }
    };

    return (
        <Container maxWidth="sm" className="body">
            <Box textAlign="center" mb={3} className="header">
                <Typography variant="h4" component="h1" gutterBottom>
                    Historical Sports Analytics Hub
                </Typography>
                {message && <Alert severity="success">{message}</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
            </Box>
            <Box
                component="form"
                onSubmit={handleFormSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '100%',
                }}
            >
                <TextField
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleFormChange}
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    required
                />
                <Button variant="contained" color="primary" type="submit">
                    Register
                </Button>
            </Box>
            <Box className="footer">
                <Typography sx={{ textAlign: 'center' }}>&copy; 2024 Historical Sports Analytics Hub</Typography>
            </Box>
        </Container>
    );
}

export default Register;
