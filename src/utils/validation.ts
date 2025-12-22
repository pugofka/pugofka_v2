// Validation utilities for forms

export interface ValidationError {
    [key: string]: string;
}

export const validateContactForm = (data: {
    name: string;
    contact: string;
    description?: string;
}): ValidationError | null => {
    const errors: ValidationError = {};

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.name = 'Имя должно содержать минимум 2 символа';
    }
    if (data.name && data.name.length > 100) {
        errors.name = 'Имя не должно превышать 100 символов';
    }

    // Contact validation (email, phone, or telegram)
    if (!data.contact || data.contact.trim().length < 5) {
        errors.contact = 'Укажите контакт для связи';
    }
    if (data.contact && data.contact.length > 255) {
        errors.contact = 'Контакт слишком длинный';
    }

    // Basic format check for contact (email or phone-like)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /[\d\s\-\+\(\)]{7,}/;
    const telegramRegex = /@\w+|t\.me/;

    if (data.contact &&
        !emailRegex.test(data.contact) &&
        !phoneRegex.test(data.contact) &&
        !telegramRegex.test(data.contact)) {
        errors.contact = 'Укажите email, телефон или Telegram';
    }

    // Description validation
    if (data.description && data.description.length > 2000) {
        errors.description = 'Описание не должно превышать 2000 символов';
    }

    return Object.keys(errors).length > 0 ? errors : null;
};

export const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
};
