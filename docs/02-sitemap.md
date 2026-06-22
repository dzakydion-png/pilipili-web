# Sitemap

## Public

1. `/`
   Halaman utama berisi value proposition, marketplace yang didukung, cara kerja, CTA request, estimasi komponen biaya, testimoni jika tersedia, dan FAQ.

2. `/request`
   Form request jasa titip untuk pelanggan baru atau pelanggan yang belum login.

3. `/cara-kerja`
   Penjelasan tahapan: kirim link, terima estimasi, bayar, barang dibeli, pengiriman, diterima.

4. `/marketplace`
   Ringkasan marketplace yang didukung.

5. `/marketplace/amazon`
   Landing detail untuk jasa titip Amazon.

6. `/marketplace/ebay`
   Landing detail untuk jasa titip eBay.

7. `/marketplace/aliexpress`
   Landing detail untuk jasa titip AliExpress.

8. `/marketplace/rakuten`
   Landing detail untuk jasa titip Rakuten.

9. `/marketplace/dhgate`
   Landing detail untuk jasa titip DHGate.

10. `/estimasi-biaya`
    Penjelasan komponen biaya dan disclaimer estimasi.

11. `/faq`
    Pertanyaan umum tentang pembayaran, pajak, durasi, retur, barang dilarang, dan pengiriman.

12. `/kontak`
    Informasi kontak, WhatsApp, email, dan jam operasional.

13. `/terms`
    Syarat dan ketentuan layanan.

14. `/privacy`
    Kebijakan privasi.

## Authentication

1. `/login`
   Login pelanggan dan admin jika role-based routing dipakai.

2. `/register`
   Registrasi pelanggan.

3. `/forgot-password`
   Permintaan reset password.

4. `/reset-password`
   Reset password menggunakan token.

## Customer Area

1. `/account`
   Ringkasan akun pelanggan: request aktif, order aktif, dan notifikasi.

2. `/account/requests`
   Daftar request pelanggan.

3. `/account/requests/[requestId]`
   Detail request, quotation, status review, catatan publik, dan CTA menerima quotation.

4. `/account/orders`
   Daftar order pelanggan.

5. `/account/orders/[orderId]`
   Detail order, timeline status, pembayaran, invoice, tracking, dan dokumen terkait.

6. `/account/payments/[paymentId]`
   Detail pembayaran dan upload bukti pembayaran.

7. `/account/addresses`
   Manajemen alamat pengiriman Indonesia.

8. `/account/profile`
   Profil, email, nomor WhatsApp, dan preferensi komunikasi.

## Admin Area

1. `/admin`
   Dashboard operasional.

2. `/admin/requests`
   Daftar request dengan filter status, marketplace, pelanggan, tanggal, dan prioritas.

3. `/admin/requests/[requestId]`
   Review request, validasi produk, catatan internal, pembuatan quotation, dan riwayat aktivitas.

4. `/admin/quotes`
   Daftar quotation.

5. `/admin/quotes/[quoteId]`
   Detail quotation dan revisi.

6. `/admin/orders`
   Daftar order.

7. `/admin/orders/[orderId]`
   Detail order, status pembelian, shipment, biaya aktual, timeline, dan catatan internal.

8. `/admin/payments`
   Antrian pembayaran untuk diverifikasi.

9. `/admin/payments/[paymentId]`
   Detail pembayaran, bukti transfer, dan keputusan verifikasi.

10. `/admin/customers`
    Daftar pelanggan.

11. `/admin/customers/[customerId]`
    Profil pelanggan, alamat, request, order, dan catatan layanan.

12. `/admin/shipments`
    Daftar pengiriman internasional dan domestik.

13. `/admin/shipments/[shipmentId]`
    Detail shipment, tracking number, carrier, status, dan biaya.

14. `/admin/settings/marketplaces`
    Konfigurasi marketplace yang didukung.

15. `/admin/settings/fees`
    Konfigurasi service fee, markup kurs, biaya handling, dan aturan estimasi.

16. `/admin/settings/users`
    Manajemen user admin dan role.

## SEO Pages Prioritas

1. `/marketplace/amazon`
2. `/marketplace/ebay`
3. `/marketplace/aliexpress`
4. `/marketplace/rakuten`
5. `/marketplace/dhgate`
6. `/estimasi-biaya`
7. `/cara-kerja`

