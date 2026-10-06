export interface ContentExample { image: string; alt: string; niche: string; format: string; hook: string; feature: string; purpose: string; poster?: boolean }
const cafe = { image: 'creator-cafe', alt: 'Ilustrasi AI pemilik café selfie sambil menunjukkan iced latte', niche: 'Café' };
const bakery = { image: 'campaign-bakery', alt: 'Ilustrasi AI pembuat konten bakery menunjukkan kotak croissant', niche: 'Bakery' };
const stay = { image: 'hospitality-host', alt: 'Ilustrasi AI staf penginapan selfie sambil menunjukkan kamar', niche: 'Hotel & guesthouse' };
export const contentExamples: Record<string, ContentExample[]> = {
 'creator-style-social-content': [
  {...cafe, format:'Rekomendasi pemilik café', hook:'Suka kopi susu atau kopi hitam? ☕', feature:'Rekomendasi kopi sesuai selera', purpose:'Pemilik café menjelaskan pilihan minuman dan rasanya agar pelanggan lebih mudah memilih.'},
  {...bakery, format:'Isi paket produk', hook:'Ini isi paket croissant kami 🥐', feature:'Tunjukkan isi paket pastry', purpose:'Tunjukkan isi kotak dan jelaskan pilihan produknya dengan rekaman sederhana dari HP.'},
  {...stay, format:'Tur kamar', hook:'Kamar ini cocok buat siapa? 🛏️', feature:'Jelaskan tipe kamar dan fasilitas', purpose:'Staf menunjukkan kamar dan menjelaskan fasilitasnya agar calon tamu tahu apa yang didapat.'}
 ],
 'signature-product-campaign': [
  {...bakery, format:'Pengenalan paket', hook:'Beli paket ini, dapat apa saja? 🥐', feature:'Jelaskan isi paket dan cara pesan', purpose:'Tunjukkan produk dalam paket, jelaskan kapan cocok dipesan, dan cantumkan cara pemesanannya.'},
  {...cafe, format:'Menu andalan', hook:'Sudah coba menu kopi ini? ☕', feature:'Perkenalkan satu menu andalan', purpose:'Jelaskan bahan, rasa, dan pilihan menu yang sedang dipromosikan.'},
  {...stay, format:'Paket menginap', hook:'Lihat kamar dan fasilitasnya dulu 🌿', feature:'Jelaskan fasilitas yang termasuk', purpose:'Tampilkan kamar, lalu jelaskan fasilitas yang termasuk dan syarat pemesanan paket.'}
 ],
 'local-awareness-ads': [
  {...cafe, format:'Iklan pengenalan café', hook:'Lagi cari kopi buat jeda sore? ☕', feature:'Kenalkan café dan menunya', purpose:'Contoh iklan singkat untuk mengenalkan café kepada orang di wilayah yang dipilih.'},
  {...bakery, format:'Iklan ke WhatsApp', hook:'Mau pesan paket pastry ini? 🥐', feature:'Ajak pelanggan bertanya lewat WhatsApp', purpose:'Tunjukkan isi paket dan arahkan pertanyaan atau pemesanan ke WhatsApp bisnis.'},
  {...stay, format:'Iklan penginapan', hook:'Cari penginapan untuk akhir pekan? 🧳', feature:'Tampilkan kamar dan cara menghubungi', purpose:'Contoh iklan kamar dan fasilitas untuk calon tamu dari kota yang dipilih.'}
 ]
};
export const featuredExamples = [contentExamples['creator-style-social-content'][0], contentExamples['signature-product-campaign'][0], contentExamples['local-awareness-ads'][2]];
export const campaignExamples: ContentExample[] = [
 {image:'campaign-hero',alt:'Poster Konten dan Iklan untuk Bisnis Anda, pembuat konten café dengan latte di bagian depan dan panel konten melayang',niche:'Café & penginapan',format:'Poster layanan',hook:'Konten dan iklan untuk bisnis Anda.',feature:'Poster dengan model, produk, dan informasi layanan',purpose:'Contoh desain poster yang menggabungkan foto orang, produk, dan teks untuk menjelaskan layanan.',poster:true},
 {image:'campaign-food',alt:'Poster Menu Andalan, model menyajikan ayam dan nasi dengan anotasi grafis',niche:'Restoran',format:'Poster menu andalan',hook:'Tunjukkan menu andalan Anda.',feature:'Poster promosi menu andalan',purpose:'Foto makanan, judul besar, dan keterangan menu membantu pelanggan melihat produk yang ditawarkan.',poster:true},
 {image:'campaign-stay',alt:'Poster Tunjukkan Kamar dan Fasilitas Anda, staf dengan foto kamar, sarapan dan balkon',niche:'Hotel & guesthouse',format:'Promosi penginapan',hook:'Tunjukkan kamar dan fasilitas Anda.',feature:'Poster promosi fasilitas penginapan',purpose:'Tampilkan kamar, sarapan, dan area penginapan agar calon tamu tahu fasilitas yang tersedia.',poster:true}
];
for (const examples of Object.values(contentExamples)) examples.unshift(campaignExamples[1], campaignExamples[2]);
