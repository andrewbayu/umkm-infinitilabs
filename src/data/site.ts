export const site = {
  name: 'InfinitiLabs', base: 'https://umkm.weareinfiniti.id', phone: '6285212924950', email: 'hi@adityabayu.com',
  title: 'Paket Konten & Iklan untuk Kuliner dan Penginapan — InfinitiLabs',
  description: 'Paket khusus InfinitiLabs untuk café, restoran, bakery, hotel, dan villa. Lihat harga dan isi paket konten media sosial, promosi menu, serta iklan mulai Rp3,5 juta/bulan.',
};
export const money = (n: number) => 'Rp' + new Intl.NumberFormat('id-ID').format(n);
export const shortMoney = (n: number) => 'Rp' + new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(n / 1000000) + ' juta';
export function whatsapp(service?: string, tier?: { name: string; price: number }) {
  const message = service && tier
    ? `Halo InfinitiLabs, saya tertarik dengan ${service} — ${tier.name} (${money(tier.price)}/bulan). Nama bisnis: ... Jenis bisnis: ... Lokasi: ... Produk/paket yang ingin dipromosikan: ...`
    : 'Halo InfinitiLabs, saya ingin tanya paket untuk bisnis kuliner/penginapan. Nama bisnis: ... Jenis bisnis: ... Lokasi: ...';
  return `https://wa.me/${site.phone}?${new URLSearchParams({ text: message })}`;
}
export const workflow = [
 ['Bahas kebutuhan bisnis', 'Ceritakan produk, pelanggan, dan apa yang ingin Anda promosikan.'],
 ['Tim Anda ambil foto dan video', 'Kami beri panduan rekaman yang bisa dilakukan dengan HP.'],
 ['Kami buat kontennya', 'Kami edit dan desain konten. Anda cek hasilnya dan beri masukan.'],
 ['Konten tayang, hasilnya dicek', 'Kami jadwalkan posting atau jalankan iklan sesuai paket, lalu laporkan hasilnya.'],
];
export const sharedFaq = [
 ['Bisa untuk bisnis di luar Jabodetabek?', 'Bisa. Kami bekerja secara online. Tim Anda mengambil foto dan video dari lokasi dengan panduan kami.'],
 ['Apakah tim InfinitiLabs datang untuk foto atau syuting?', 'Tidak termasuk dalam paket ini. Kami memberi panduan rekaman dan mengolah hasilnya. Jika perlu tim produksi di lokasi, pekerjaan dan biayanya dibahas terpisah.'],
 ['Kalau belum punya foto dan video, bagaimana?', 'Tim Anda bisa mengambil foto dan video dengan HP. Saat konsultasi, kami cek apa yang sudah tersedia dan siapa yang bisa merekam. Jika butuh produksi khusus, biayanya dibahas terpisah.'],
 ['Bantuan AI dipakai untuk apa?', 'Untuk membuat desain, gambar pendukung, atau animasi sesuai kebutuhan konten. Foto produk dan fasilitas asli menjadi acuan. Konten yang memakai AI sudah masuk jumlah konten paket, bukan tambahan, dan perlu persetujuan Anda sebelum tayang.'],
 ['Apakah termasuk membalas DM dan mengurus pesanan?', 'UGC AI Social Package termasuk auto-reply FAQ dasar pada Essential dan auto-reply berbasis AI pada Signature untuk respons awal sesuai informasi yang disetujui. Pertanyaan khusus, pesanan, reservasi, dan layanan pelanggan tetap ditangani tim Anda. Paket lain tidak termasuk pengelolaan DM.'],
 ['Berapa lama kerja samanya?', 'Minimal 3 bulan. Pembayaran dilakukan di awal setiap bulan. Kami mengecek pekerjaan dan hasilnya selama kerja sama.'],
 ['Apakah penjualan dijamin meningkat?', 'Tidak ada jaminan penjualan. Kami mengerjakan layanan dan evaluasi sesuai paket. Hasil juga bergantung pada produk, harga, pelayanan, dan cara tim Anda menindaklanjuti calon pelanggan.'],
 ['Bisa untuk beberapa cabang?', 'Harga berlaku untuk satu brand di satu lokasi atau properti. Jika ada beberapa cabang, cakupan pekerjaan dan biayanya dibahas terpisah.'],
];
export const aiCopy = 'Kami bisa memakai AI untuk membantu membuat desain, gambar, atau animasi dari foto dan video asli bisnis Anda. Hasilnya tetap diperiksa oleh tim kami dan disetujui oleh Anda.';
export const operatingTerms = [
 'Harga berlaku untuk satu brand di satu lokasi atau properti. Pembayaran di awal setiap bulan, dengan kerja sama minimal 3 bulan. Harga belum termasuk pajak yang berlaku. Tidak ada biaya persiapan awal yang tersembunyi. Pekerjaan tambahan dibuatkan penawaran harga tertulis.',
 'Tunjuk satu orang dari tim Anda untuk menyiapkan informasi, akses akun, persetujuan, serta foto dan video yang boleh digunakan. Untuk paket berbasis rekaman, tim Anda merekam 1–2 kali per bulan sesuai panduan kami. UGC AI Social Package menggunakan AI dan Virtual KOL dengan foto asli produk/fasilitas sebagai acuan. Paket tidak termasuk produksi di lokasi.',
 'Essential/Local Start mendapat 1 putaran revisi untuk setiap kelompok konten yang dikirim. Signature/Local Complete mendapat 2 putaran. Kesalahan informasi dari kami diperbaiki tanpa mengurangi jatah revisi. Perubahan konsep setelah disetujui dibuatkan penawaran harga terpisah.',
 'Anda mengecek dan menyetujui konten dalam maksimal 2 hari kerja. Konten tidak tayang tanpa persetujuan Anda. Jika foto/video atau persetujuan terlambat, jadwal ikut bergeser. Penggantian konten dan pemindahan jatah ke bulan berikutnya disepakati tertulis.',
 'Story dihitung per tampilan; carousel atau posting geser maksimal 5 slide. Konten yang sama diunggah ke beberapa platform tetap dihitung satu. Batas konten yang dibantu AI sudah masuk jumlah konten paket, bukan tambahan. Pemakaiannya disesuaikan dengan kebutuhan dan kualitas foto/video.',
 'Tim Anda menangani DM, layanan pelanggan, pesanan, stok, harga, dan reservasi. Paket tidak termasuk fotografer, model atau pembuat konten dari luar, penata makanan, influencer, hadiah, acara, pengelolaan komentar/DM oleh admin manusia, pengelolaan situs pemesanan penginapan atau website di luar storefront landing page pada Local Complete dan bio-storefront thundr.id pada UGC AI Social Package. Instagram auto-reply termasuk pada kedua tier UGC AI Social Package, dengan cakupan sesuai paket. Pengelolaan iklan hanya termasuk dalam paket Local Awareness Ads.',
];
