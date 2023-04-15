import { TYPES } from "../types/operations";

const FILTER_TYPES = {
  all: "Все операции",
  income: "Все доходы",
  expense: "Все расходы",
};

const Filter = ({ items, setFilteredItems }) => {
  const onClickFilterHandle = (type) => {
    switch (type) {
      case TYPES.INCOME:
        setFilteredItems((prevState) =>
          prevState.filter((item) => item.type === TYPES.INCOME)
        );
        break;

      case TYPES.EXPENSE:
        setFilteredItems((prevState) =>
          prevState.filter((item) => item.type === TYPES.EXPENSE)
        );
        break;

      default:
        setFilteredItems(items);
    }
  };

  const Buttons = Object.keys(FILTER_TYPES).map((type) => {
    return (
      <button key={type} onClick={() => onClickFilterHandle(type)} className="filter__btn">
        {FILTER_TYPES[type]}
      </button>
    );
  });

  return <div className="filter">{Buttons}</div>;
};

export default Filter;
