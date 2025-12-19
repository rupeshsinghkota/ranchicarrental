// Google Analytics 4 Event Tracking Helper

declare global {
    interface Window {
        gtag?: (command: string, ...args: any[]) => void;
    }
}

// Track page views
export const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-0EKXZN63DQ', {
            page_path: url,
        });
    }
};

// Track custom events
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }
};

// Predefined event tracking functions
export const gaEvents = {
    // Track form submission
    formSubmit: (formName: string, carType: string, price: number) => {
        trackEvent('generate_lead', {
            event_category: 'Form',
            event_label: formName,
            car_type: carType,
            value: price,
            currency: 'INR',
        });
    },

    // Track WhatsApp button clicks
    whatsappClick: (carName?: string, source?: string) => {
        trackEvent('contact', {
            event_category: 'WhatsApp',
            event_label: carName || 'General',
            contact_method: 'whatsapp',
            source: source || 'website',
        });
    },

    // Track phone call clicks
    phoneClick: () => {
        trackEvent('contact', {
            event_category: 'Phone',
            event_label: 'Call Button',
            contact_method: 'phone',
        });
    },

    // Track car view
    viewCar: (carName: string, price: string) => {
        trackEvent('view_item', {
            event_category: 'Car',
            event_label: carName,
            items: [{
                item_name: carName,
                price: parseInt(price.replace(/[^\d]/g, ''), 10) || 0,
                currency: 'INR',
            }],
        });
    },

    // Track booking initiation
    beginCheckout: (carName: string, price: number) => {
        trackEvent('begin_checkout', {
            event_category: 'Booking',
            event_label: carName,
            value: price,
            currency: 'INR',
        });
    },

    // Track search
    search: (searchTerm: string) => {
        trackEvent('search', {
            search_term: searchTerm,
        });
    },

    // Track outbound links
    outboundLink: (url: string, label: string) => {
        trackEvent('click', {
            event_category: 'Outbound Link',
            event_label: label,
            link_url: url,
        });
    },

    // Track scroll depth
    scrollDepth: (percentage: number) => {
        trackEvent('scroll', {
            event_category: 'Engagement',
            event_label: `${percentage}%`,
            value: percentage,
        });
    },
};

// Track scroll depth automatically
if (typeof window !== 'undefined') {
    let scrollTracked = {
        25: false,
        50: false,
        75: false,
        100: false,
    };

    window.addEventListener('scroll', () => {
        const scrollPercentage = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );

        Object.keys(scrollTracked).forEach((threshold) => {
            const num = parseInt(threshold);
            if (scrollPercentage >= num && !scrollTracked[num as keyof typeof scrollTracked]) {
                scrollTracked[num as keyof typeof scrollTracked] = true;
                gaEvents.scrollDepth(num);
            }
        });
    });
}
