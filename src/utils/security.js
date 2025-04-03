// Security utility functions
export const setupSecurityHeaders = () => {
    // Remove any existing CSP meta tag
    const existingMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (existingMeta) {
        existingMeta.remove();
    }

    // Create new CSP meta tag
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://*.googleapis.com https://*.gstatic.com https://accounts.google.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' data: https://*.googleapis.com https://*.gstatic.com https://accounts.google.com;
        font-src 'self' https://fonts.gstatic.com;
        frame-src 'self' https://www.youtube.com https://accounts.google.com;
        connect-src 'self' https://*.googleapis.com https://*.gstatic.com https://accounts.google.com http://localhost:* ws://localhost:*;
        worker-src 'self' blob:;
        media-src 'self' https://*.googleapis.com;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        script-src-elem 'self' 'unsafe-inline' https://apis.google.com https://*.googleapis.com https://*.gstatic.com https://accounts.google.com;
    `.replace(/\s+/g, ' ').trim();

    document.head.appendChild(meta);
};

// Initialize security settings
export const initializeSecurity = () => {
    setupSecurityHeaders();
}; 