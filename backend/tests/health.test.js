const axios = require('axios');
const config = require('./config');

describe('Health Check Endpoint', () => {
    test('should return 200 and status ok', async () => {
        const response = await axios.get(`${config.apiUrl}/api/auth/health`);
        
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('status', 'ok');
        expect(response.data).toHaveProperty('timestamp');
        expect(response.data).toHaveProperty('uptime');
    });

    test('should return correct response format', async () => {
        const response = await axios.get(`${config.apiUrl}/api/auth/health`);
        
        expect(typeof response.data.timestamp).toBe('string');
        expect(typeof response.data.uptime).toBe('number');
        expect(response.data.uptime).toBeGreaterThan(0);
    });
}); 