// Data Protection Utilities for Southern Lodge

export interface UserConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
  version: string;
}

export interface GuestData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  preferences?: Record<string, any>;
  consentData: UserConsent;
  createdAt: string;
  lastUpdated: string;
}

// Cookie consent management
export const CookieConsent = {
  // Get current consent preferences
  getConsent(): UserConsent | null {
    try {
      const consent = localStorage.getItem('cookie-consent');
      return consent ? JSON.parse(consent) : null;
    } catch {
      return null;
    }
  },

  // Set consent preferences
  setConsent(preferences: Omit<UserConsent, 'timestamp' | 'version'>): void {
    const consent: UserConsent = {
      ...preferences,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    localStorage.setItem('consent-date', consent.timestamp);
  },

  // Check if specific consent is given
  hasConsent(type: keyof Omit<UserConsent, 'timestamp' | 'version'>): boolean {
    const consent = this.getConsent();
    return consent ? consent[type] : false;
  },

  // Clear all consent data
  clearConsent(): void {
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('consent-date');
  }
};

// Data anonymization utilities
export const DataProtection = {
  // Anonymize email for display
  anonymizeEmail(email: string): string {
    const [name, domain] = email.split('@');
    const maskedName = name.length > 2 
      ? name.substring(0, 2) + '*'.repeat(name.length - 2)
      : name;
    return `${maskedName}@${domain}`;
  },

  // Anonymize phone number
  anonymizePhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length >= 4) {
      return '*'.repeat(cleaned.length - 4) + cleaned.slice(-4);
    }
    return '*'.repeat(cleaned.length);
  },

  // Generate secure guest ID
  generateGuestId(): string {
    return 'guest_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  },

  // Validate data retention period
  shouldRetainData(createdAt: string, retentionYears: number = 7): boolean {
    const created = new Date(createdAt);
    const retentionEnd = new Date(created);
    retentionEnd.setFullYear(retentionEnd.getFullYear() + retentionYears);
    return new Date() < retentionEnd;
  },

  // Data export for GDPR requests
  exportGuestData(guestId: string): Promise<GuestData | null> {
    // In a real implementation, this would fetch from your database
    return new Promise((resolve) => {
      // Simulate database lookup
      setTimeout(() => {
        // Return null if no data found, or guest data object
        resolve(null);
      }, 100);
    });
  },

  // Data deletion for GDPR requests
  deleteGuestData(guestId: string): Promise<boolean> {
    // In a real implementation, this would delete from your database
    return new Promise((resolve) => {
      // Simulate data deletion
      setTimeout(() => {
        console.log(`Guest data deleted for ID: ${guestId}`);
        resolve(true);
      }, 100);
    });
  }
};

// Language preferences
export const LanguageManager = {
  // Get preferred language
  getLanguage(): string {
    return localStorage.getItem('preferred-language') || 'en';
  },

  // Set preferred language
  setLanguage(language: string): void {
    localStorage.setItem('preferred-language', language);
  },

  // Get browser language
  getBrowserLanguage(): string {
    return navigator.language.split('-')[0];
  },

  // Supported languages
  getSupportedLanguages(): Array<{code: string, name: string}> {
    return [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
      { code: 'fr', name: 'Français' },
      { code: 'de', name: 'Deutsch' },
      { code: 'zh', name: '中文' }
    ];
  }
};

// Security utilities
export const SecurityUtils = {
  // Sanitize user input
  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: URLs
      .trim();
  },

  // Validate email format
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate phone format (US format)
  isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+?1?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  },

  // Generate secure token
  generateSecureToken(length: number = 32): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  }
};

// Audit logging for GDPR compliance
export const AuditLog = {
  // Log data access
  logDataAccess(guestId: string, action: string, details?: any): void {
    const logEntry = {
      timestamp: new Date().toISOString(),
      guestId,
      action,
      details: details || {},
      userAgent: navigator.userAgent,
      ip: 'masked' // In production, you'd capture and mask IP
    };
    
    // In production, send to audit log service
    console.log('Audit Log:', logEntry);
  },

  // Log consent changes
  logConsentChange(previousConsent: UserConsent | null, newConsent: UserConsent): void {
    this.logDataAccess('anonymous', 'consent_change', {
      previous: previousConsent,
      new: newConsent
    });
  }
};

export default {
  CookieConsent,
  DataProtection,
  LanguageManager,
  SecurityUtils,
  AuditLog
};
