function counter(a,b) {
    let count = 0
    for (let i = 0;i < a.length;i++){
        if (a[i] == b){
            count += 1
        }
    }
    console.log(count)
    return count
}

counter('clarusway','a')