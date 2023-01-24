const INCOME_CATEGORIES = {
  salary: "Зарплата",
  cashback: "Кэшбек",
  accii: "Облигации"
};

const EXPENSE_CATEGORIES = {
  products: "Продукты",
  services: "К.У.",
  car: "Автомобиль",
  health: "Здоровье и красота"
};

const CATEGORIES = { ...INCOME_CATEGORIES, ...EXPENSE_CATEGORIES };

export { INCOME_CATEGORIES, EXPENSE_CATEGORIES, CATEGORIES };
