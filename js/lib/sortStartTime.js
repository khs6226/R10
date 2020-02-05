import changeTimeFormat from './changeTimeFormat';

const sortStartTime = (accu, curr) => {
    let currentTime = changeTimeFormat(curr.startTime);
    const doesExist = accu.find(section => section.title === currentTime);

    if (doesExist) {
        doesExist.data.push(curr)
    } else {
        accu.push({
            title: currentTime,
            data: [curr]
        });
    }
    return accu;
};

export default sortStartTime;