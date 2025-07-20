export interface ExpenseBYCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: String;
  revenue: number;
  expenses: number;
  nonOperationalExpense: number;
  operationalExpense: number;
}

export interface Day {
  id: string;
  date: String;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevense: number;
  totalExpense: number;
  expenseByCategory: ExpenseBYCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}
