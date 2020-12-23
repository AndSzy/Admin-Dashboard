
  // function generateData(n) {
  //   let currentDate = new Date();
  //   const arr = [];
  //   for(let i = n; i--; i>0) {
  //     let newObj = {};
  //     newObj.x = currentDate.setDate(-i);
  //     newObj.y = Math.floor(Math.random() * 25);
  //     arr.push(newObj);
  //   }
  //   return arr;
  // }

  function generateData(n) {
    let currentDate = new Date();
    const obj = {
      categoriesArray: [],
      dataArray: []
    };
    // let categoriesArray = [];
    // let dataArray = [];
    for(let i = n; i--; i>0) {
      
      obj.categoriesArray.push(currentDate.setDate(-i));
      obj.dataArray.push(Math.floor(Math.random() * 25));
      // newObj.y = Math.floor(Math.random() * 25);
      // arr.push(newObj);
    }
    return obj;
  }

  // categories as date stamp
  // data as data

  const dataset1 = generateData(1000);
  const dataset2 = generateData(1000);
 


  export { dataset1, dataset2 };


// chartType: "Line"
// color: "red"
// dataset: {categoriesArray: [], dataArray: []}
// datasetName: "data2"
// id: "8846b4d1-d682-4070-b8cf-014ce1e0e9ba"