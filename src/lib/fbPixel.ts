// Facebook Pixel tracking helper functions

declare global {
    interface Window {
        fbq?: (action: string, event: string, params?: Record<string, any>) => void;
    }
}

export const trackFBEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, params);
    }
};

export const trackFBCustomEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', eventName, params);
    }
};

// Standard Facebook Events
export const fbEvents = {
    // Track when user views a car
    viewContent: (carName: string, price: string) => {
        trackFBEvent('ViewContent', {
            content_name: carName,
            content_type: 'product',
            value: parseInt(price.replace(/[^\d]/g, ''), 10) || 0,
            currency: 'INR'
        });
    },

    // Track when user initiates checkout/booking
    initiateCheckout: (carName: string, price: string) => {
        trackFBEvent('InitiateCheckout', {
            content_name: carName,
            value: parseInt(price.replace(/[^\d]/g, ''), 10) || 0,
            currency: 'INR'
        });
    },

    // Track WhatsApp clicks
    contact: (method: string, carName?: string) => {
        trackFBEvent('Contact', {
            contact_method: method,
            content_name: carName || 'General Inquiry'
        });
    },

    // Track search
    search: (searchTerm: string) => {
        trackFBEvent('Search', {
            search_string: searchTerm
        });
    },

    // Track phone calls
    phoneCall: () => {
        trackFBCustomEvent('PhoneCall', {
            contact_method: 'phone'
        });
    }
};
