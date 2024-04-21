let  promise = new Promise((resolve, reject) =>{
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=90b5566f6c314946a71f7e0be8d307c4";

    let result = fetch(url);
    console.log(result)
    result   
        .then((res)=>{
            console.log(res)
            if(res.status == 200){
                let resultObject = res.json()
                resolve(resultObject);
            }
            else{
                reject(new Error(res));
            }
        })
        // .then((res) => {
        //     // console.log(res);
        //     let resultObject = res.json();
        //     return resultObject
        // })
        .then((res) => {
            console.log(res)
        })

})

promise 
    .then((res)=>{
        console.log(res.articles)
    })
    .catch((err) =>{
        console.log(err)
    })

