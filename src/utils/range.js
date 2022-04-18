export const range = (start = 0, end, step, isRight = false) => {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    step = step === undefined ? start <= end ? 1 : -1 : step;

    const result = [];
    let length = Math.max(0, Math.ceil((end - start) / (step  || 1)));

    while (length--) {
        result.push(start);
        start += step;
    }

    return isRight ? result.reverse() : result;
}
