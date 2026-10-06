export const site = {
  name: 'InfinitiLabs', base: 'https://umkm.weareinfiniti.id', phone: '6285212924950', email: 'hi@adityabayu.com',
  title: 'Paket Marketing F&B & Hospitality — InfinitiLabs',
  description: 'Paket khusus InfinitiLabs untuk café, restoran, bakery, hotel, dan villa. Bandingkan harga serta cakupan konten, campaign, dan iklan mulai Rp3,5 juta/bulan.',
};
export const money = (n: number) => 'Rp' + new Intl.NumberFormat('id-ID').format(n);
export const shortMoney = (n: number) => 'Rp' + new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(n / 1000000) + ' juta';
export function whatsapp(service?: string, tier?: { name: string; price: number }) {
  const message = service && tier
    ? `Halo InfinitiLabs, saya tertarik dengan ${service} — ${tier.name} (${money(tier.price)}/bulan). Nama bisnis: ... Jenis bisnis: ... Lokasi: ... Produk/paket yang ingin diprioritaskan: ...`
    : 'Halo InfinitiLabs, saya ingin konsultasi paket untuk bisnis F&B/hospitality. Nama bisnis: ... Jenis bisnis: ... Lokasi: ...';
  return `https://wa.me/${site.phone}?${new URLSearchParams({ text: message })}`;
}
export const workflow = [
  ['Kenali bisnis Anda', 'Bahas produk, pelanggan, aset, dan tujuan yang ingin diprioritaskan.'],
  ['Siapkan bahan dari lokasi Anda', 'Kami kirim arahan rekaman. Tim Anda mengambil foto dan video dengan HP.'],
  ['Kami olah dan Anda review', 'Tim InfinitiLabs menyusun konten atau iklan untuk persetujuan Anda.'],
  ['Tayang, pelajari, perbaiki', 'Materi dipublikasikan sesuai paket, lalu dievaluasi untuk langkah berikutnya.'],
];
export const sharedFaq = [
  ['Apakah bisa untuk bisnis di luar Jabodetabek?', 'Ya. Pengelolaan dilakukan remote. Tim Anda menyediakan foto/video dari lokasi mengikuti brief kami.'],
  ['Apakah termasuk sesi foto atau video di lokasi?', 'Tidak. Paket mencakup pengarahan dan pengolahan konten. Produksi lokal dapat dibahas sebagai pekerjaan terpisah.'],
  ['Bagaimana kalau belum punya stok konten?', 'Kami periksa kesiapan aset saat konsultasi. Jika ada PIC yang dapat merekam dengan HP, kami arahkan pengambilannya. Kebutuhan produksi khusus dibahas terpisah.'],
  ['Apa yang dimaksud AI Content Creation?', 'Pengembangan artwork, visual pendukung, dan animasi berbantuan AI sesuai konsep. Output masuk kuota paket dan tetap melalui review. Produk serta fasilitas memakai aset asli sebagai acuan.'],
  ['Apakah termasuk membalas DM dan reservasi?', 'Tidak. Tim Anda menangani inquiry, pesanan, dan booking. Template respons tersedia sesuai paket.'],
  ['Berapa lama kerja samanya?', 'Minimum tiga bulan, dengan pembayaran setiap bulan di awal. Rencana dan hasil dievaluasi selama kerja sama.'],
  ['Apakah ada jaminan ramai atau sales?', 'Tidak ada jaminan penjualan. Kami bertanggung jawab pada scope dan evaluasi sesuai paket; hasil bisnis juga bergantung pada produk, penawaran, layanan, serta follow-up.'],
  ['Bisa untuk beberapa cabang?', 'Harga berlaku untuk satu brand dan satu lokasi/properti. Kebutuhan beberapa cabang memerlukan scope terpisah.'],
];
export const aiCopy = 'Pengembangan visual dan animasi berbantuan AI, dipadukan dengan aset asli bisnis Anda untuk menghasilkan konten yang khas dan sesuai campaign.';
export const operatingTerms = [
 'Satu brand dan satu lokasi/properti. Pembayaran bulanan di awal, minimum kerja sama tiga bulan. Harga sebelum pajak yang berlaku. Tidak ada biaya onboarding tersembunyi; pekerjaan tambahan melalui quotation tertulis.',
 'Satu PIC klien menyiapkan fakta, akses, persetujuan, serta foto/video asli yang legal digunakan. Rekaman dilakukan tim Anda dalam 1–2 batch sederhana per bulan sesuai brief. Produksi di lokasi tidak termasuk.',
 'Essential/Local: 1 putaran revisi per batch. Signature/Local Plus: 2 putaran. Koreksi kesalahan fakta dari kami tidak mengurangi kuota revisi. Konsep baru setelah persetujuan memerlukan quotation terpisah.',
 'Review klien maksimal 2 hari kerja. Konten tidak ditayangkan tanpa persetujuan. Keterlambatan aset atau persetujuan menggeser jadwal; penggantian dan rollover disepakati tertulis.',
 'Story dihitung per frame; carousel maksimal 5 slide. Satu aset unik yang dipublikasikan ulang ke beberapa platform tetap dihitung satu. Kuota AI adalah batas maksimum di dalam output, bukan tambahan; penggunaannya mengikuti kesesuaian konsep dan kualitas aset.',
 'Tim Anda menangani DM, layanan pelanggan, pesanan, inventori, harga, serta reservasi. Tidak termasuk fotografer, talent/creator eksternal, food stylist, influencer, hadiah, event, community management, OTA, website, atau iklan di luar paket Local Awareness Ads.',
];
