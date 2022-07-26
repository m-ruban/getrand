const formatter = new Intl.DateTimeFormat('ru');

export default (date: Date): string => {
    let result = '';
    try {
        result = formatter.format(date);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(`WARN: date formatter error ${e}`);
    }
    return result;
};
