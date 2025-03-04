const selectCategory = (select = "main") =>{
    let html = "";
    let data = [];

    console.log(select);
    
    if( select == "snack"){
        data = [
            {nama: 'Klepon', foto: 'assets/images/klepon.jpeg', keterangan: 'Klepon adalah makanan tradisional. Bentuknya bulat, berukuran kecil. Warna umumnya hijau, dengan taburan kelapa parut yang gurih menambah cita rasa. Di dalamnya ada gula merah. Saat digigit, gula merah itu meleleh memenuhi mulut, memberikan sensasi manis khas yang tidak berlebihan. Kue klepon juga termasuk dalam kelompok jajanan pasar yang masih populer hingga saat ini karena harganya yang murah dan mudah didapat di pasar. Tak hanya memperkaya kuliner nusan  tara, klepon juga dihargai sebagai salah satu warisan budaya yang menjadi simbol atas identitas.'},
            {nama: 'Pisang Goreng', foto: 'assets/images/pisang_goreng.jpeg', keterangan: 'Pisang goreng masuk camilan paling enak versi Taste Atlas yang berada di peringkat 41, dengan total bintang 4,6.'},        
        ];
    }else{
        data = [
            {nama: 'Nasi Uduk', foto: 'assets/images/nasi_uduk.jpeg', keterangan: 'Hidangan yang dibuat dari nasi putih yang diaron dan dikukus dengan santan, serta dibumbui dengan pala, kayu manis, jahe, daun serai, dan merica, yang populer di hidangan Betawi.[1] Nasi uduk tergolong sebagai makanan sepinggan dengan cita rasa gurih, yakni makanan yang disajikan dalam satu piring, dengan kandungan energi di atas 300 kalori, dan terdiri dari serealia atau umbi sebagai makanan pokok, didampingi oleh sayuran, produk hewani, dan kacang-kacangan.'},
            {nama: 'Rawon', foto: 'assets/images/rawon.jpg', keterangan: 'Masakan khas Indonesia yang berasal dari Ponorogo, Jawa Timur, yang berupa sup daging berkuah hitam dengan campuran bumbu khas yang menggunakan kluwek. Makanan ini telah berusia lebih dari 1.000 tahun.[1] Rawon dari Ponorogo menyebar ke penjuru Jawa Timur dan dikenal sebagai masakan khas Jawa Timur.'},        
        ];  
    }

    // templating
    data.forEach(item => {        
        html += '<article>';
        html += '<img src="'+ item.foto +'"><h1>'+ item.nama + '</h1><p>'+ item.keterangan +'</p>';  
        html += '</article>';
    });
    
    document.getElementById("content").innerHTML = html;
}

selectCategory();

const classMain = document.getElementsByClassName('a_main');

for (let i = 0; i < classMain.length; i++) {
    classMain[i].onclick = function() {
    selectCategory();
  };
}

const classSnack = document.getElementsByClassName('a_snack');

for (let i = 0; i < classSnack.length; i++) {
    classSnack[i].onclick = function() {
    selectCategory('snack');
  };
}

// document.getElementsByClassName('a_main').onclick = () => {
//     console.log('main');
    
//     // selectCategory();
// }

// document.getElementsByClassName('a_snack').onclick = () => {
//     console.log('snack');
    
//     // selectCategory('snack');
// }