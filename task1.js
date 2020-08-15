cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
            let cek = dataDay.find(e => e === day)
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari Ini Bukan Hari Kerja'))
            }
        }, 3000);
    })
}
//then
// cekHariKerja('Selas')
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })

// try
output = async (day) => {
    try {
        const c = await cekHariKerja(day)
        console.log(c)
    } catch (err) {
        console.log(err.message)
    }
}
output('Selasa')