
const getRandom = (min, max) => {
    let getRandom = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(getRandom);
}

const  tossUp = () =>  [getRandom(1,6), getRandom(1,6)];
