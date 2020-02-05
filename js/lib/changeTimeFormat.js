const changeTimeFormat = (t) => {
    let date = new Date(t);
    let hours = date.getHours();
    if (hours == 12) {
        hours = hours + ":00 PM"
    } else if (hours < 10) {
        hours = '0' + hours + ":00 AM";
    } else if (hours > 12) {
        hours = hours - 12;
        if (hours < 10) {
            hours = '0' + hours + ":00 PM"
        } else {
            hours = hours + ":00 PM"
        }
    } else {
        hours = hours + ":00 AM"
    }
    return hours;
}

export default changeTimeFormat;