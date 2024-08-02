import { Card } from "../components/Card/Card";

const usePercentagePerMonth = () => {
  return (nbUser: Card[]) => {
    const date = new Date();
    const lastMonth = date.getMonth();
    const thisMonth = lastMonth + 1;
    const findThisMonth = nbUser.find((nb) => nb.month == thisMonth.toString());
    const findLastMonth = nbUser.find((nb) => nb.month == lastMonth.toString());
    if (!findLastMonth?.count || !findThisMonth?.count) {
      return 0;
    }
    const percentageUser = Math.floor(
      ((findThisMonth?.count - findLastMonth?.count) / findLastMonth?.count) *
        100
    );
    return percentageUser;
  };
};

export default usePercentagePerMonth;
