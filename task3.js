// 1
const candidateName = ['Ana', 'Bimo', 'Claudia', 'Dika'];
showCandidate = (candidate) => {
    const pilihan = new Promise((resolve, reject) => {
        let cek = candidateName.find(e => e.toLowerCase() === candidate.toLowerCase());
        if (cek) {
            resolve(`Anda Memilih "${cek}" Sebagai Ketua Kelas`)
        } else {
            reject(new Error('Nama Kandidat Tidak Tersedia'))
        }
    })
    return pilihan;
}

showCandidate('ana')
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err.message)
    })

// 2
pros = (kepastian) => {
    return new Promise((resolve, reject) => {
        const metode = ['Online', 'Offline']
        //includes mempresentasikan inputan
        //find
        const deal = metode.find(e => e.toLowerCase() == kepastian.toLowerCase());
        if (deal) {
            resolve('Siap Dijalankan')
        } else {
            reject('Batal Dijalankan')
        }
    })
}

output = async (kepastian) => {
    try {
        const mama = await pros(kepastian)
        console.log(mama)
    } catch (error) {
        console.log(error.message)
    }
}
output('offline')