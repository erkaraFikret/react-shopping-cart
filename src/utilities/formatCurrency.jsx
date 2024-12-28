const CURRENCEY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency'
})


export function formatCurrency(number){
    return CURRENCEY_FORMATTER.format(number)
}