const CURRENT_FORMATTER = new Intl.NumberFormat(undefined, {currency: "INR", style: "currency"})

export function formatCurrency (number: number) {
    return CURRENT_FORMATTER.format(number)
}