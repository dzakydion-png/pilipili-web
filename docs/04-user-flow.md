# User Flow

## Flow Utama: Request Jasa Titip

1. Pelanggan membuka halaman utama.
2. Pelanggan membaca cara kerja, marketplace yang didukung, dan komponen biaya.
3. Pelanggan menekan CTA request barang.
4. Pelanggan mengisi form request:
   - Marketplace
   - Link produk
   - Nama produk jika diperlukan
   - Varian
   - Jumlah
   - Catatan tambahan
   - Nama
   - Email
   - Nomor WhatsApp
   - Alamat pengiriman Indonesia
5. Sistem memvalidasi input.
6. Sistem membuat purchase request dengan status Submitted.
7. Pelanggan menerima halaman konfirmasi dan nomor request.
8. Admin melakukan review.
9. Pelanggan menerima quotation.
10. Pelanggan menerima atau menolak quotation.

## Flow Quotation Diterima

1. Pelanggan membuka detail request.
2. Pelanggan melihat breakdown biaya:
   - Harga barang
   - Ongkir marketplace
   - Ongkir internasional
   - Estimasi bea masuk dan pajak
   - Service fee
   - Ongkir domestik
   - Total estimasi
3. Pelanggan membaca masa berlaku quotation.
4. Pelanggan menekan Accept Quote.
5. Sistem membuat order dengan status Awaiting Payment.
6. Sistem menampilkan instruksi pembayaran.
7. Pelanggan melakukan pembayaran.
8. Pelanggan upload bukti pembayaran.
9. Order berubah menjadi Payment Submitted.
10. Admin memverifikasi pembayaran.

## Flow Order Setelah Pembayaran Terverifikasi

1. Order berubah menjadi Payment Verified.
2. Admin membeli barang di marketplace.
3. Status berubah menjadi Purchasing.
4. Setelah pembelian berhasil, status berubah menjadi Purchased.
5. Jika seller memproses barang, status berubah menjadi Seller Processing.
6. Saat barang dikirim internasional, status berubah menjadi International Shipping.
7. Saat barang tiba di warehouse atau titik penerimaan, status berubah menjadi Arrived at Warehouse.
8. Jika masuk proses kepabeanan, status berubah menjadi Customs Processing.
9. Setelah siap dikirim ke pelanggan, status berubah menjadi Domestic Shipping.
10. Saat pelanggan menerima barang, status berubah menjadi Delivered.
11. Setelah tidak ada komplain dalam periode yang ditentukan, status berubah menjadi Completed.

## Flow Quotation Ditolak

1. Pelanggan membuka detail request.
2. Pelanggan menekan Reject Quote.
3. Sistem meminta alasan opsional.
4. Request berubah menjadi Rejected.
5. Admin dapat melihat alasan penolakan untuk evaluasi harga atau layanan.

## Flow Revisi Quotation

1. Pelanggan meminta revisi karena jumlah, varian, alamat, atau opsi pengiriman berubah.
2. Request berubah menjadi Customer Revision Requested.
3. Admin membuat quotation baru.
4. Quotation lama menjadi Superseded.
5. Pelanggan menerima quotation baru.

## Flow Pembayaran Ditolak

1. Pelanggan upload bukti pembayaran.
2. Admin mengecek mutasi atau bukti transfer.
3. Jika tidak valid, payment berubah menjadi Rejected.
4. Sistem menampilkan alasan penolakan.
5. Order kembali ke Awaiting Payment.
6. Pelanggan dapat upload bukti baru.

## Flow Barang Tidak Tersedia

1. Admin mencoba membeli barang setelah pembayaran terverifikasi.
2. Barang habis, harga berubah terlalu jauh, atau seller tidak dapat memenuhi order.
3. Order ditandai Problem.
4. Admin memberi opsi:
   - Refund
   - Quotation ulang
   - Produk alternatif
5. Pelanggan memilih opsi.
6. Admin menindaklanjuti sesuai keputusan pelanggan.

## Flow Pelanggan Login

1. Pelanggan membuka login.
2. Pelanggan memasukkan email dan password.
3. Sistem memvalidasi kredensial.
4. Pelanggan diarahkan ke `/account`.
5. Pelanggan melihat request aktif, order aktif, dan status pembayaran.

## Flow Pelanggan Tanpa Akun

Untuk MVP, pelanggan bisa mengirim request tanpa login agar conversion rendah friksi. Setelah request dibuat, sistem dapat:

1. Membuat akun otomatis dengan email.
2. Mengirim link untuk set password.
3. Mengaitkan request ke akun tersebut.

Alternatif lebih sederhana: wajib login sebelum request. Pilihan ini lebih rapi secara data, tetapi friksi request lebih tinggi.

## Flow Komunikasi

1. Sistem menyimpan status utama di dashboard.
2. Pelanggan dapat melihat status di detail order.
3. Untuk WhatsApp, MVP dapat memakai link manual ke chat admin.
4. Setelah stabil, notifikasi otomatis dapat ditambahkan untuk status penting.

