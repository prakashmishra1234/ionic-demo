import moment from "moment/moment";

const DateFormat = (date: string | null) => {
  if (date) {
    return moment(date).format("DD/MM/YYYY");
  }
  return "N/A";
};

export { DateFormat };
