getMonth = (callback) => {
    setTimeout(() => {
        let month = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ]
        let error = false
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000);
}
output = (nol, bulan) => {
    if (nol == null) {
        // console.log(bulan.map(e => e)) // nyetak month
        bulan.map(e => console.log(e)) //nyetak element
    } else {
        console.log(nol.message)
    }
}
getMonth(output)