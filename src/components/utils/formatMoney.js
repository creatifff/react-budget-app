import formatNumber from "./formatNumber";

const formatMoney = (value, valute = 'rub.') => {
    return `${formatNumber(value)} ${valute}`;
}

export default formatMoney;