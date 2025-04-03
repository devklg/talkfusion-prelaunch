import api from '../utils/api';

class MonitoringService {
    constructor() {
        this.healthCheckInterval = null;
        this.isHealthy = true;
        this.errorCount = 0;
        this.lastError = null;
        this.performanceMetrics = {
            apiLatency: [],
            errorCount: 0,
            lastError: null,
            lastCheck: null
        };
        this.startHealthCheck();
    }

    async checkHealth() {
        try {
            const startTime = Date.now();
            const response = await api.get('/api/auth/health');
            const endTime = Date.now();
            
            this.performanceMetrics.apiLatency.push(endTime - startTime);
            this.performanceMetrics.lastCheck = new Date().toISOString();
            
            if (response.status === 200) {
                this.isHealthy = true;
                this.errorCount = 0;
                this.lastError = null;
                return true;
            }
        } catch (error) {
            console.error('Health check failed:', error);
            this.isHealthy = false;
            this.errorCount++;
            this.lastError = error.message;
            return false;
        }
    }

    startHealthCheck(interval = 30000) {
        this.stopHealthCheck();
        this.healthCheckInterval = setInterval(() => this.checkHealth(), interval);
    }

    stopHealthCheck() {
        if (this.healthCheckInterval) {
            clearInterval(this.healthCheckInterval);
            this.healthCheckInterval = null;
        }
    }

    getHealthStatus() {
        return {
            isHealthy: this.isHealthy,
            errorCount: this.errorCount,
            lastError: this.lastError
        };
    }

    getMetrics() {
        const avgLatency = this.performanceMetrics.apiLatency.length > 0
            ? this.performanceMetrics.apiLatency.reduce((a, b) => a + b, 0) / this.performanceMetrics.apiLatency.length
            : 0;

        return {
            ...this.performanceMetrics,
            averageLatency: avgLatency,
            uptime: this.getUptime()
        };
    }

    getUptime() {
        if (!this.performanceMetrics.lastCheck) return '0s';
        const uptime = Date.now() - new Date(this.performanceMetrics.lastCheck).getTime();
        return `${Math.floor(uptime / 1000)}s`;
    }

    logError(error, context = {}) {
        this.performanceMetrics.errorCount++;
        this.performanceMetrics.lastError = {
            timestamp: new Date().toISOString(),
            type: 'application_error',
            error: error.message,
            context
        };
        console.error('Application error:', { error, context });
    }
}

export default new MonitoringService(); 