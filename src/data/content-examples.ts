export interface ContentExample { image: string; alt: string; niche: string; format: string; hook: string; feature: string; purpose: string; poster?: boolean }
const cafe = { image: 'creator-cafe', alt: 'Ilustrasi AI owner café selfie sambil menunjukkan iced latte', niche: 'Café' };
const bakery = { image: 'campaign-bakery', alt: 'Ilustrasi AI creator bakery menunjukkan box croissant', niche: 'Bakery' };
const stay = { image: 'hospitality-host', alt: 'Ilustrasi AI host guesthouse selfie sambil menunjukkan kamar', niche: 'Hotel & guesthouse' };
export const contentExamples: Record<string, ContentExample[]> = {
 'creator-style-social-content': [
  {...cafe, format:'Rekomendasi owner', hook:'Tim creamy atau strong? ☕', feature:'Satu selera, satu rekomendasi', purpose:'Membantu pelanggan mengenali pilihan menu lewat penjelasan langsung dari owner.'},
  {...bakery, format:'Cerita produk', hook:'Kenalan sama trio favorit kami 🥐', feature:'Cerita ringan, produk jadi fokus', purpose:'Memperlihatkan isi dan karakter produk dalam format percakapan yang mudah direkam.'},
  {...stay, format:'Room walkthrough', hook:'Kamar ini cocok buat siapa? 🛏️', feature:'Host menjelaskan, tamu membayangkan', purpose:'Menghubungkan fasilitas kamar dengan kebutuhan tamu sebelum mereka bertanya.'}
 ],
 'signature-product-campaign': [
  {...bakery, format:'Pengenalan paket', hook:'Satu box, tiga alasan buat berbagi 🥐', feature:'Isi paket terlihat. Benefit terbaca.', purpose:'Mengangkat satu penawaran dengan detail produk dan momen konsumsi yang jelas.'},
  {...cafe, format:'Signature menu', hook:'Mulai dari kopi yang kamu suka ☕', feature:'Produk unggulan, pesan yang terarah', purpose:'Menyusun pengenalan menu sebagai pembuka rangkaian campaign.'},
  {...stay, format:'Stay package', hook:'Jeda sejenak, lihat kamar ini 🌿', feature:'Tunjukkan fasilitas. Perjelas paket.', purpose:'Memperlihatkan ruang yang ditawarkan sebelum menjelaskan benefit dan syarat paket.'}
 ],
 'local-awareness-ads': [
  {...cafe, format:'Awareness creative', hook:'Lagi cari kopi buat jeda sore? ☕', feature:'Kenalkan menu, buka percakapan', purpose:'Contoh pesan singkat untuk memperkenalkan bisnis kepada audiens wilayah prioritas.'},
  {...bakery, format:'Messaging creative', hook:'Mau tahu isi box-nya? 🥐', feature:'Satu penawaran, satu ajakan bertanya', purpose:'Menghubungkan visual produk dan pertanyaan yang bisa dilanjutkan lewat WhatsApp.'},
  {...stay, format:'Destination creative', hook:'Rencana short escape minggu ini? 🧳', feature:'Perlihatkan tempat. Arahkan inquiry.', purpose:'Contoh pengenalan penginapan untuk calon tamu dari kota asal yang diprioritaskan.'}
 ]
};
export const featuredExamples = [contentExamples['creator-style-social-content'][0], contentExamples['signature-product-campaign'][0], contentExamples['local-awareness-ads'][2]];
export const campaignExamples: ContentExample[] = [
 {image:'campaign-hero',alt:'Poster Rasa Jadi Cerita, creator café dengan latte di foreground dan panel konten melayang',niche:'Café & hospitality',format:'Campaign key visual',hook:'Rasa jadi cerita.',feature:'Manusia, produk, dan pesan dalam satu visual',purpose:'Komposisi foto, tipografi besar, dan elemen grafis mengubah ide konten menjadi materi campaign.',poster:true},
 {image:'campaign-food',alt:'Poster Satu Piring Banyak Cerita, model menyajikan ayam dan nasi dengan anotasi grafis',niche:'Restoran',format:'Signature menu poster',hook:'Satu piring. Banyak cerita.',feature:'Menu andalan jadi pusat perhatian',purpose:'Perspektif produk di foreground, anotasi rasa, dan headline memperjelas fokus penawaran.',poster:true},
 {image:'campaign-stay',alt:'Poster Tempat Nyaman Cerita yang Terbayang, host dengan panel kamar, sarapan dan balkon',niche:'Hotel & guesthouse',format:'Hospitality campaign',hook:'Tempat nyaman. Cerita yang terbayang.',feature:'Fasilitas terlihat, pengalaman terbayang',purpose:'Host dan panel fasilitas membawa calon tamu dari pengenalan tempat menuju pertanyaan lebih lanjut.',poster:true}
];
for (const examples of Object.values(contentExamples)) examples.unshift(campaignExamples[1], campaignExamples[2]);
