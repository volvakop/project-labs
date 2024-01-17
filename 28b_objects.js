

let rambulalulintas = {
    hijau: 'jalan',
    kuning: 'hati-hati',
    merah: 'berhenti'
}

console.log("hijau          :"+rambulalulintas.hijau);
console.log("kuning         :"+rambulalulintas.kuning);
console.log("merah          :"+rambulalulintas.merah);

warna  = "kuning";
if(warna  == "hijau"){
    keterangan =rambulalulintas.hijau;
 } else if(warna  == "kuning"){
    keterangan =rambulalulintas.kuning
 }else{
    keterangan =rambulalulintas.merah
 }

 console.log(`warna rambu lalulintas adalah ${warna}`,`anda harus ${keterangan}`);