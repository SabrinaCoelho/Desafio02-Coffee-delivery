export const utils = {
    formatCurrency: (value: number | null | undefined): string => {
        const numericValue = value ?? 0;
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(numericValue);
    }
}