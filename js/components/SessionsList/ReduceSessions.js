export const reduceSession = (accu, curr) => {
    console.log(accu);

    console.log(curr);
    const doesExist = accu.find(section => section.title === curr.startTime);
    console.log(doesExist);
    if (doesExist) {
        doesExist.data.push(curr)
    } else {
        accu.push({
            title: curr.startTime,
            data: [curr]
        });
    }
    return accu;
};

