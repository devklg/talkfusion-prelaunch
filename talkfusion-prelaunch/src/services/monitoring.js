import { checkHealth } from '../api/axios';

class MonitoringService {
    constructor() {
        this.healthCheckInterval = 30000; // 30 seconds
        this.performanceMetrics = {
            apiLatency: [],
            errorCount: 0,
            lastError: null,
            lastCheck: null
        };
        this.startHealthCheck();
    }

    startHealthCheck() {
        setInterval(async () => {
            try {
                const startTime = performance.now();
                const isHealthy = await checkHealth();
                const endTime = performance.now();
                const latency = endTime - startTime;

                this.performanceMetrics.apiLatency.push(latency);
                this.performanceMetrics.lastCheck = new Date().toISOString();

                // Keep only last 100 latency measurements
                if (this.performanceMetrics.apiLatency.length > 100) {
                    this.performanceMetrics.apiLatency.shift();
                }

                // Log health status
                console.log('Health check:', {
                    status: isHealthy ? 'healthy' : 'unhealthy',
                    latency: `${latency.toFixed(2)}ms`,
                    timestamp: new Date().toISOString()
                });

                // If unhealthy, log warning
                if (!isHealthy) {
                    this.performanceMetrics.errorCount++;
                    this.performanceMetrics.lastError = {
                        timestamp: new Date().toISOString(),
                        type: 'health_check_failed'
                    };
                    console.warn('Application health check failed');
                }
            } catch (error) {
                this.performanceMetrics.errorCount++;
                this.performanceMetrics.lastError = {
                    timestamp: new Date().toISOString(),
                    type: 'health_check_error',
                    error: error.message
                };
                console.error('Health check error:', error);
            }
        }, this.healthCheckInterval);
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

// Create singleton instance
const monitoringService = new MonitoringService();
export default monitoringService; 