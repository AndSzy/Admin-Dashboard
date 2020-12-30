function generateData(n, max) {
    let arr = [];
    const startDate = new Date('2012.08.10');
    
    for (let i = 0; i < n; i++) {
        const innerArray = [];
        const randomDate = [];

        let currentDate = new Date('2012.08.10');
        currentDate.setDate(startDate.getDate() + i);

        randomDate.push(currentDate.getTime())


        const randomValue = Math.floor(Math.random() * max);

        innerArray.push(randomDate);
        innerArray.push(randomValue);
        arr.push(innerArray);
      }

    return arr;
}





const dataset1 = generateData(1000, 300);
const dataset2 = generateData(1000, 300);



export { dataset1, dataset2 };