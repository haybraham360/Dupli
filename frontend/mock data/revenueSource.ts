export interface Revenue{
    year: number;
    series1: number;
    series2: number;
    series3: number;
    series4: number;
    series5: number;
    series6: number;
}

const revenueSource: Revenue[] = [
    {
      year: 2023,
      series1: 15,
      series2: 26,
      series3: 55,
      series4: 70,
      series5: 80,
      series6: 90,
    },
    {
      year: 2024,
      series1: 79,
      series2: 28,
      series3: 19,
      series4: 92,
      series5: 47,
      series6: 45,
    },
    {
      year: 2025,
      series1: 44,
      series2: 77,
      series3: 53,
      series4: 79,
      series5: 60,
      series6: 50,
    },
    {
      year: 2026,
      series1: 59,
      series2: 94,
      series3: 62,
      series4: 59,
      series5: 50,
      series6: 44,
    },
    {
      year: 2027,
      series1: 16,
      series2: 81,
      series3: 23,
      series4: 22,
      series5: 38,
      series6: 70,
    },
  ];

  export default revenueSource;