import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from '../utils/axios';
import Profile from '../components/Profile';
import { AuthProvider } from '../context/AuthContext';

// Mock axios
jest.mock('../utils/axios');

// Mock user data
const mockUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '1234567890',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'US',
    enroller: 'Jane Smith'
};

describe('Profile Component', () => {
    beforeEach(() => {
        // Reset all mocks before each test
        jest.clearAllMocks();
        
        // Mock successful API responses
        axios.get.mockResolvedValue({ data: mockUser });
        axios.put.mockResolvedValue({ data: { message: 'Profile updated successfully' } });
        axios.post.mockResolvedValue({ data: { message: 'Success' } });
    });

    const renderProfile = () => {
        return render(
            <BrowserRouter>
                <AuthProvider>
                    <Profile />
                </AuthProvider>
            </BrowserRouter>
        );
    };

    test('loads and displays user data correctly', async () => {
        renderProfile();

        // Check if loading spinner is shown initially
        expect(screen.getByRole('status')).toBeInTheDocument();

        // Wait for data to load
        await waitFor(() => {
            expect(screen.getByDisplayValue('John')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Doe')).toBeInTheDocument();
            expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument();
            expect(screen.getByDisplayValue('1234567890')).toBeInTheDocument();
            expect(screen.getByDisplayValue('123 Main St')).toBeInTheDocument();
            expect(screen.getByDisplayValue('New York')).toBeInTheDocument();
            expect(screen.getByDisplayValue('NY')).toBeInTheDocument();
            expect(screen.getByDisplayValue('10001')).toBeInTheDocument();
            expect(screen.getByDisplayValue('US')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Jane Smith')).toBeInTheDocument();
        });
    });

    test('updates profile information successfully', async () => {
        renderProfile();

        // Wait for initial data load
        await waitFor(() => {
            expect(screen.getByDisplayValue('John')).toBeInTheDocument();
        });

        // Update some fields
        fireEvent.change(screen.getByLabelText(/first name/i), {
            target: { value: 'Johnny' }
        });
        fireEvent.change(screen.getByLabelText(/last name/i), {
            target: { value: 'Smith' }
        });

        // Submit the form
        fireEvent.click(screen.getByText(/update profile/i));

        // Check if success message appears
        await waitFor(() => {
            expect(screen.getByText(/profile updated successfully/i)).toBeInTheDocument();
        });

        // Verify API call
        expect(axios.put).toHaveBeenCalledWith('/users/me', expect.objectContaining({
            firstName: 'Johnny',
            lastName: 'Smith'
        }));
    });

    test('changes password successfully', async () => {
        renderProfile();

        // Wait for initial data load
        await waitFor(() => {
            expect(screen.getByDisplayValue('John')).toBeInTheDocument();
        });

        // Fill in password fields
        fireEvent.change(screen.getByLabelText(/current password/i), {
            target: { value: 'oldPassword123' }
        });
        fireEvent.change(screen.getByLabelText(/new password/i), {
            target: { value: 'newPassword123' }
        });
        fireEvent.change(screen.getByLabelText(/confirm new password/i), {
            target: { value: 'newPassword123' }
        });

        // Submit password change
        fireEvent.click(screen.getByText(/change password/i));

        // Check if success message appears
        await waitFor(() => {
            expect(screen.getByText(/password changed successfully/i)).toBeInTheDocument();
        });

        // Verify API call
        expect(axios.post).toHaveBeenCalledWith('/auth/change-password', {
            currentPassword: 'oldPassword123',
            newPassword: 'newPassword123'
        });
    });

    test('handles password mismatch error', async () => {
        renderProfile();

        // Wait for initial data load
        await waitFor(() => {
            expect(screen.getByDisplayValue('John')).toBeInTheDocument();
        });

        // Fill in password fields with mismatch
        fireEvent.change(screen.getByLabelText(/current password/i), {
            target: { value: 'oldPassword123' }
        });
        fireEvent.change(screen.getByLabelText(/new password/i), {
            target: { value: 'newPassword123' }
        });
        fireEvent.change(screen.getByLabelText(/confirm new password/i), {
            target: { value: 'differentPassword123' }
        });

        // Submit password change
        fireEvent.click(screen.getByText(/change password/i));

        // Check if error message appears
        expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    });

    test('handles payment information update', async () => {
        renderProfile();

        // Wait for initial data load
        await waitFor(() => {
            expect(screen.getByDisplayValue('John')).toBeInTheDocument();
        });

        // Open payment modal
        fireEvent.click(screen.getByText(/payment info/i));

        // Fill in payment information
        fireEvent.change(screen.getByLabelText(/card number/i), {
            target: { value: '4111111111111111' }
        });
        fireEvent.change(screen.getByLabelText(/expiry date/i), {
            target: { value: '12/25' }
        });
        fireEvent.change(screen.getByLabelText(/cvv/i), {
            target: { value: '123' }
        });
        fireEvent.change(screen.getByLabelText(/cardholder name/i), {
            target: { value: 'John Doe' }
        });

        // Submit payment information
        fireEvent.click(screen.getByText(/save payment info/i));

        // Check if success message appears
        await waitFor(() => {
            expect(screen.getByText(/payment information updated successfully/i)).toBeInTheDocument();
        });

        // Verify API call
        expect(axios.post).toHaveBeenCalledWith('/users/payment', {
            cardNumber: '4111111111111111',
            expiryDate: '12/25',
            cvv: '123',
            cardholderName: 'John Doe'
        });
    });

    test('handles API errors gracefully', async () => {
        // Mock API error
        axios.get.mockRejectedValueOnce({
            response: { data: { message: 'Failed to load user data' } }
        });

        renderProfile();

        // Check if error message appears
        await waitFor(() => {
            expect(screen.getByText(/failed to load user data/i)).toBeInTheDocument();
        });
    });
}); 