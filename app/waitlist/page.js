"use client";
import React, { useState } from 'react';
import { Container, TextField, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup, Button, Typography, Box, Paper } from '@mui/material';
import { firestore } from '/firebase'; // Ensure you import the firestore instance
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function WaitlistForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        excitedFeatures: {
            cloudStorage: false,
            customization: false,
            collaboration: false,
            offlineAccess: false,
        },
        usageReason: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                excitedFeatures: {
                    ...prevState.excitedFeatures,
                    [name]: checked,
                },
            }));
        } else if (type === 'radio') {
            setFormData({ ...formData, usageReason: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(firestore, "waitlist"), formData);
            console.log("Document successfully written!", formData);
            router.push('/');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        
        <Box 
            id="waitlist" 
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                bgcolor: '#5F9EA0',
                color: 'text.primary',
                py: 10,
                px: 2,
            }}
        >
        <Container 
            maxWidth="sm" 
            sx={{ 
                mt: 6, 
                backgroundColor: '#121212', 
                color: '#e0e0e0', 
                padding: '2rem', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                backgroundImage: 'linear-gradient(to right, #141e30, #243b55)',
            }}
        >
            <Typography variant="h4" gutterBottom align="center" sx={{ color: '#ffffff', mb: 3 }}>
                Join the Pro Plan Waitlist
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{ 
                        mb: 3, 
                        backgroundColor: '#1c1c1c', 
                        color: '#e0e0e0', 
                        borderRadius: '4px', 
                        input: { color: '#fff' }, 
                        label: { color: '#e0e0e0' } 
                    }}
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{ 
                        mb: 3, 
                        backgroundColor: '#1c1c1c', 
                        color: '#e0e0e0', 
                        borderRadius: '4px', 
                        input: { color: '#fff' }, 
                        label: { color: '#e0e0e0' } 
                    }}
                />
                <Typography variant="h6" sx={{ mt: 3, mb: 1, color: '#ffffff' }}>
                    What features are you excited about? (Select all that apply)
                </Typography>
                <FormGroup sx={{ mb: 3 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="cloudStorage"
                                checked={formData.excitedFeatures.cloudStorage}
                                onChange={handleChange}
                                sx={{ color: '#e0e0e0' }}
                            />
                        }
                        label="Cloud Storage for Flashcards"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="customization"
                                checked={formData.excitedFeatures.customization}
                                onChange={handleChange}
                                sx={{ color: '#e0e0e0' }}
                            />
                        }
                        label="Customization Options"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="collaboration"
                                checked={formData.excitedFeatures.collaboration}
                                onChange={handleChange}
                                sx={{ color: '#e0e0e0' }}
                            />
                        }
                        label="Collaboration Tools"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="offlineAccess"
                                checked={formData.excitedFeatures.offlineAccess}
                                onChange={handleChange}
                                sx={{ color: '#e0e0e0' }}
                            />
                        }
                        label="Offline Access"
                    />
                </FormGroup>

                <Typography variant="h6" sx={{ mt: 3, mb: 1, color: '#ffffff' }}>
                    Why do you want to use this app?
                </Typography>
                <RadioGroup
                    name="usageReason"
                    value={formData.usageReason}
                    onChange={handleChange}
                    sx={{ mb: 3 }}
                >
                    <FormControlLabel
                        value="monitorChild"
                        control={<Radio sx={{ color: '#e0e0e0' }} />}
                        label="I want to monitor a child"
                    />
                    <FormControlLabel
                        value="monitorFriend"
                        control={<Radio sx={{ color: '#e0e0e0' }} />}
                        label="I want to monitor a friend"
                    />
                    <FormControlLabel
                        value="selfAccountability"
                        control={<Radio sx={{ color: '#e0e0e0' }} />}
                        label="I want to improve my own screen time accountability"
                    />
                </RadioGroup>

                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ 
                        backgroundColor: '#1c1c1c', 
                        color: '#ffffff', 
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#333',
                        },
                    }}
                >
                    Join Waitlist
                </Button>
            </Box>
        </Container>
        </Box>
    );
}
