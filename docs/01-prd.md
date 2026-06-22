# Product Requirement Document: PiliPili&Co

## Ringkasan

PiliPili&Co adalah platform jasa titip pembelian barang luar negeri untuk pelanggan Indonesia. Platform membantu pelanggan membeli barang dari marketplace internasional seperti Amazon, eBay, AliExpress, Rakuten, dan DHGate, lalu mengelola estimasi biaya, pembayaran, proses pembelian, pengiriman internasional, bea masuk, dan pengiriman domestik sampai barang diterima pelanggan.

## Tujuan Produk

1. Membuat proses request jasa titip lebih terstruktur dibanding chat manual.
2. Memberikan estimasi biaya transparan sebelum pelanggan membayar.
3. Memudahkan admin mengelola request, quotation, order, shipment, dan status pembayaran.
4. Menyediakan tracking status yang jelas untuk pelanggan.
5. Membangun basis data pelanggan, toko sumber, pesanan, dan riwayat transaksi untuk operasional jangka panjang.

## Target Pengguna

### Pelanggan

Pelanggan Indonesia yang ingin membeli barang dari luar negeri tetapi mengalami kendala kartu pembayaran, alamat luar negeri, bahasa, pengiriman internasional, pajak, atau proses retur.

### Admin Operasional

Tim internal PiliPili&Co yang memvalidasi link produk, menghitung biaya, melakukan pembelian, mengurus pengiriman, memperbarui status, dan menangani komunikasi pelanggan.

### Admin Finance

Tim yang memverifikasi pembayaran pelanggan, mencatat biaya aktual, margin, refund, dan settlement.

## Marketplace Sumber

1. Amazon
2. eBay
3. AliExpress
4. Rakuten
5. DHGate

Marketplace lain dapat ditambahkan setelah proses inti stabil.

## Proposisi Nilai

1. Pembelian luar negeri lebih mudah untuk pelanggan Indonesia.
2. Estimasi biaya jelas sebelum transaksi diproses.
3. Status pesanan dapat dipantau tanpa bertanya berulang melalui chat.
4. Admin memiliki alur kerja terpusat untuk mengurangi salah hitung, salah status, dan kehilangan data.

## Ruang Lingkup MVP

### Fitur Pelanggan

1. Landing page yang menjelaskan layanan, marketplace yang didukung, cara kerja, estimasi komponen biaya, FAQ, dan CTA request barang.
2. Form request jasa titip berisi link produk, marketplace, varian, jumlah, catatan, data kontak, dan alamat pengiriman Indonesia.
3. Akun pelanggan untuk melihat request dan status order.
4. Halaman detail request/order dengan status, quotation, instruksi pembayaran, invoice, dan timeline.
5. Upload bukti pembayaran.
6. Notifikasi dasar melalui email atau WhatsApp link/manual handoff.

### Fitur Admin

1. Login admin.
2. Dashboard ringkas: request baru, menunggu pembayaran, perlu dibeli, dalam pengiriman, masalah.
3. Manajemen request masuk.
4. Pembuatan quotation dengan breakdown biaya.
5. Verifikasi pembayaran.
6. Konversi request menjadi order.
7. Update status pembelian dan pengiriman.
8. Catatan internal per request/order.
9. Manajemen pelanggan.

## Di Luar Ruang Lingkup MVP

1. Auto checkout langsung ke marketplace luar negeri.
2. Integrasi real-time semua marketplace.
3. Kalkulasi bea masuk otomatis penuh.
4. Integrasi payment gateway produksi.
5. Integrasi courier tracking otomatis multi-kurir.
6. Sistem warehouse kompleks.
7. Mobile app native.

## Status Produk Saat Ini

Repo masih berupa scaffold awal Next.js dengan Tailwind CSS dan Prisma. Schema Prisma belum memiliki model bisnis. Metadata dan halaman utama masih bawaan starter.

Catatan stack: brief menyebut Next.js 15, tetapi `package.json` saat ini menggunakan Next `16.2.9`. Roadmap perlu memutuskan apakah project mengikuti versi terpasang atau dikunci ulang ke Next.js 15.

## Persona

### Rina, Pembeli Personal

Rina ingin membeli skincare dari Jepang atau aksesori dari Amazon. Ia butuh estimasi total biaya dalam rupiah dan kepastian barang dikirim ke alamat rumahnya.

### Dimas, Collector

Dimas membeli barang collectible dari eBay atau Rakuten. Ia butuh bantuan validasi seller, pengiriman aman, dan update status yang jelas.

### Sari, Admin Operasional

Sari memproses puluhan request per hari. Ia membutuhkan daftar prioritas, status yang konsisten, kalkulator biaya, dan riwayat komunikasi.

## Alur Status Utama

### Request

1. Draft
2. Submitted
3. Under Review
4. Quoted
5. Customer Revision Requested
6. Accepted
7. Rejected
8. Expired
9. Cancelled

### Order

1. Awaiting Payment
2. Payment Submitted
3. Payment Verified
4. Purchasing
5. Purchased
6. Seller Processing
7. International Shipping
8. Arrived at Warehouse
9. Customs Processing
10. Domestic Shipping
11. Delivered
12. Completed
13. Problem
14. Cancelled
15. Refunded

## Komponen Biaya

1. Harga barang dalam mata uang asal.
2. Ongkir lokal marketplace jika ada.
3. Ongkir internasional.
4. Estimasi bea masuk, PPN, dan biaya kepabeanan.
5. Kurs konversi ke rupiah.
6. Service fee PiliPili&Co.
7. Biaya pengiriman domestik.
8. Biaya tambahan opsional seperti asuransi, packing tambahan, atau handling khusus.

## Kebutuhan Bisnis

1. Admin dapat menghitung quotation dengan komponen biaya yang dapat diaudit.
2. Pelanggan harus menyetujui quotation sebelum order diproses.
3. Pembayaran harus diverifikasi sebelum pembelian dilakukan.
4. Semua perubahan status penting harus tercatat di timeline.
5. Admin dapat menandai request bermasalah dan mencatat alasan.
6. Sistem menyimpan kurs yang digunakan saat quotation dibuat.
7. Harga aktual dan biaya aktual dapat berbeda dari estimasi, tetapi selisih harus tercatat.

## Kebutuhan Non-Fungsional

1. Responsif untuk mobile karena target pelanggan Indonesia banyak menggunakan ponsel.
2. Aman untuk data pribadi, alamat, bukti pembayaran, dan transaksi.
3. Audit trail untuk tindakan admin yang mengubah status, pembayaran, dan quotation.
4. Validasi input kuat untuk link produk, jumlah, email, nomor WhatsApp, alamat, dan bukti pembayaran.
5. Struktur data siap untuk multi-admin dan multi-role.
6. Performa cukup untuk dashboard operasional dengan filter status dan pencarian.

## Metrik Sukses

1. Conversion rate dari landing page ke request submitted.
2. Persentase request yang mendapatkan quotation.
3. Persentase quotation yang diterima pelanggan.
4. Waktu rata-rata dari request submitted ke quoted.
5. Waktu rata-rata dari payment verified ke purchased.
6. Jumlah order completed per bulan.
7. Persentase order problem/cancelled/refunded.
8. Nilai gross merchandise value dan margin layanan.

## Risiko dan Mitigasi

1. Perubahan harga marketplace sebelum pembelian.
   Mitigasi: quotation memiliki masa berlaku.
2. Kurs berubah.
   Mitigasi: simpan kurs quotation dan gunakan masa berlaku singkat.
3. Barang tidak tersedia setelah pelanggan membayar.
   Mitigasi: proses refund atau quotation ulang.
4. Bea masuk berbeda dari estimasi.
   Mitigasi: jelaskan status estimasi dan simpan biaya aktual.
5. Seller marketplace bermasalah.
   Mitigasi: admin review seller dan catat risiko sebelum quotation.
6. Pelanggan salah memasukkan link/varian.
   Mitigasi: form detail, catatan, dan tahap review admin.

