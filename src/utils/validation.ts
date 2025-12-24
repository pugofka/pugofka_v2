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

    // Contact validation - accept any string
    if (!data.contact || data.contact.trim().length < 2) {
        errors.contact = 'Укажите контакт для связи';
    }


    // Description validation
    if (data.description && data.description.length > 2000) {
        errors.description = 'Описание не должно превышать 2000 символов';
    }

    // Block code in description
    if (data.description) {
        const codePatterns = [
            /<script[\s>]/i,                    // script tags
            /<style[\s>]/i,                     // style tags
            /<\?php/i,                          // PHP
            /\bfunction\s*\(/,                  // function declarations
            /\bconst\s+\w+\s*=/,                // const declarations
            /\blet\s+\w+\s*=/,                  // let declarations
            /\bvar\s+\w+\s*=/,                  // var declarations
            /\bimport\s+.*\bfrom\b/,            // import statements
            /\bexport\s+(default|const|function)/, // export statements
            /\{\s*\n.*\n\s*\}/,                   // multi-line braces (code blocks)
        ];

        const hasCode = codePatterns.some(pattern => pattern.test(data.description!));
        if (hasCode) {
            errors.description = 'Описание не должно содержать программный код';
        }
    }

    return Object.keys(errors).length > 0 ? errors : null;
};

export const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
};
