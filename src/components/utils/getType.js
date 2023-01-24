import { TYPES } from '../types/operations';
import { INCOME_CATEGORIES } from '../../data/category';

const getType = (category) => {
    if(Object.keys(INCOME_CATEGORIES).includes(category)) {
        return TYPES.INCOME;
    }

    return TYPES.EXPENSE;
}

export default getType;