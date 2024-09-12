const siswa = {
    nama : 'hendri',
    kelas : 2
}

siswa.jurusan = 'IPS';

const mahasiswa = [
     'hendri',
     2
]

mahasiswa.push('dewi','sandra');

console.log('mutable with object :' + JSON.stringify(siswa));
console.log('mutable with array :' + mahasiswa);