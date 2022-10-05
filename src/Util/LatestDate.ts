interface DateType {
  year:number;
  month:number;
  date:number;
}

const LatestDate = ({ year, month, date } : DateType) => {
  const inputDate = new Date(year, month - 1, date);
  const nowDate = new Date();

  const calc = (nowDate.getTime() - inputDate.getTime());
  const day = Math.floor(calc / (1000 * 60 * 60 * 24));

  return {
    date: `${year}.${month}.${date}`,
    day: `${day}`,
  };
};

export default LatestDate;
