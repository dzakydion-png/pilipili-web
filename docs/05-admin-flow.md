# Admin Flow

## Login Admin

1. Admin membuka `/admin`.
2. Jika belum login, admin diarahkan ke halaman login.
3. Sistem memvalidasi role.
4. Admin diarahkan ke dashboard sesuai role.

## Dashboard Operasional

Dashboard menampilkan antrian kerja:

1. Request baru.
2. Request dalam review.
3. Quotation menunggu respons pelanggan.
4. Order menunggu pembayaran.
5. Pembayaran menunggu verifikasi.
6. Order perlu dibeli.
7. Order dalam pengiriman.
8. Order bermasalah.

## Review Request

1. Admin membuka daftar request.
2. Admin memilih request Submitted.
3. Admin memeriksa link produk.
4. Admin memvalidasi marketplace, varian, jumlah, seller, ketersediaan, dan batasan barang.
5. Admin dapat menambahkan catatan internal.
6. Jika request valid, admin membuat quotation.
7. Jika request tidak valid, admin menolak request atau meminta revisi pelanggan.

## Membuat Quotation

1. Admin membuka request detail.
2. Admin mengisi komponen biaya:
   - Harga barang dalam mata uang asal
   - Ongkir lokal marketplace
   - Kurs ke rupiah
   - Ongkir internasional
   - Estimasi bea masuk dan pajak
   - Ongkir domestik
   - Service fee
   - Biaya tambahan
   - Diskon jika ada
3. Sistem menghitung total estimasi.
4. Admin menetapkan masa berlaku quotation.
5. Admin menyimpan draft atau mengirim ke pelanggan.
6. Request berubah menjadi Quoted.

## Verifikasi Pembayaran

1. Finance membuka daftar pembayaran Submitted.
2. Finance melihat detail order dan bukti pembayaran.
3. Finance mencocokkan nominal, waktu transfer, rekening tujuan, dan identitas pengirim.
4. Jika valid, payment berubah menjadi Verified.
5. Order berubah menjadi Payment Verified.
6. Jika tidak valid, payment berubah menjadi Rejected dan alasan wajib diisi.

## Proses Pembelian

1. Admin membuka order Payment Verified.
2. Admin menandai order sebagai Purchasing.
3. Admin membeli barang di marketplace sumber.
4. Admin menyimpan informasi pembelian:
   - Nomor order marketplace
   - Harga aktual
   - Seller
   - Estimasi tiba
   - Invoice atau bukti pembelian
5. Admin mengubah status menjadi Purchased.
6. Jika ada perbedaan harga, admin mencatat cost adjustment.

## Proses Shipment

1. Admin membuat shipment internasional.
2. Admin mengisi carrier dan tracking number jika tersedia.
3. Saat barang bergerak, admin memperbarui status shipment.
4. Saat barang tiba di warehouse atau titik penerimaan, order berubah menjadi Arrived at Warehouse.
5. Jika ada proses bea cukai, admin mengubah status menjadi Customs Processing.
6. Admin mencatat biaya aktual bea cukai jika berbeda dari estimasi.
7. Admin membuat shipment domestik.
8. Admin mengisi kurir domestik dan nomor resi.
9. Saat barang diterima pelanggan, order berubah menjadi Delivered.

## Menangani Order Bermasalah

Order dapat ditandai Problem jika:

1. Barang habis.
2. Seller membatalkan pembelian.
3. Harga berubah signifikan.
4. Paket hilang atau rusak.
5. Bea masuk jauh lebih tinggi dari estimasi.
6. Pelanggan meminta pembatalan.

Flow:

1. Admin menandai Problem.
2. Admin menulis catatan internal dan catatan pelanggan.
3. Admin memilih resolusi:
   - Refund
   - Tambahan pembayaran
   - Produk alternatif
   - Tunggu seller/courier
   - Cancelled
4. Semua keputusan dicatat di timeline.

## Manajemen Customer

1. Admin mencari pelanggan berdasarkan nama, email, nomor WhatsApp, atau nomor order.
2. Admin melihat riwayat request dan order.
3. Admin dapat memperbarui data kontak jika pelanggan meminta.
4. Admin dapat menambahkan catatan layanan internal.

## Manajemen Marketplace dan Fee

Super Admin mengelola:

1. Marketplace aktif.
2. Mata uang default.
3. Service fee.
4. Markup kurs.
5. Biaya handling.
6. Aturan estimasi ongkir atau bea masuk.

Perubahan konfigurasi fee harus tercatat di audit log karena berdampak langsung pada quotation.

## Role dan Hak Akses

### Admin Operasional

1. Review request.
2. Buat dan edit quotation.
3. Update order dan shipment.
4. Tambah catatan internal.

### Finance

1. Lihat payment.
2. Verifikasi atau tolak payment.
3. Lihat ringkasan biaya dan refund.

### Super Admin

1. Semua akses admin.
2. Manajemen user admin.
3. Manajemen fee dan marketplace.
4. Akses audit log.

