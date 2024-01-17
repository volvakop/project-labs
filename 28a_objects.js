let siswa = {
    absen: 'hadir',
    nama: 'Irfan',
    kelas: '12 IPA 2'
}

// console.log("Nip       :"+siswa.absen);
console.log("Nama      :"+siswa.nama);
console.log("Kelas    :"+siswa.kelas);

siswa.absen  = "hadir";
if(siswa.absen  == "hadir"){
    keterangan ="masuk"
 } else if(siswa.absen == "tidak hadir"){
    keterangan ="tidak masuk"
 }

 console.log(`absen siswa ${siswa.absen}`,`dengan keterangan ${keterangan}`);

