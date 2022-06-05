const formatter = new Intl.DateTimeFormat('ru');

export default (date: Date): string => {
    return formatter.format(date);
};
