# Development Roadmap

## Kondisi Awal Repo

Project saat ini masih berupa starter Next.js dengan:

1. App Router dasar.
2. TypeScript.
3. Tailwind CSS.
4. Prisma terpasang.
5. PostgreSQL sebagai datasource.
6. NextAuth dependency tersedia.
7. Schema Prisma belum memiliki model bisnis.

Catatan: brief menyebut Next.js 15, tetapi dependency project saat ini memakai Next `16.2.9`. Sebelum implementasi besar, tim perlu memutuskan apakah tetap menggunakan versi terpasang atau menyesuaikan dependency ke Next.js 15.

## Phase 0: Product and Technical Foundation

Tujuan: memastikan arah produk, stack, dan struktur dasar siap.

Deliverables:

1. Finalisasi PRD dan scope MVP.
2. Finalisasi sitemap.
3. Finalisasi database schema.
4. Keputusan versi Next.js.
5. Keputusan authentication strategy.
6. Keputusan apakah guest request diizinkan.
7. Keputusan penyimpanan file untuk bukti pembayaran dan attachment.
8. Setup environment development dan database.

Risiko yang diselesaikan:

1. Perbedaan versi Next.js dari brief.
2. Role dan authentication belum diputuskan.
3. Payment flow belum detail.

## Phase 1: Core Data and Authentication

Tujuan: membangun fondasi akun, role, dan data bisnis utama.

Deliverables:

1. Model database untuk user, address, marketplace, request, quote, order, payment, shipment, timeline, attachment, dan audit log.
2. Migration database.
3. Seed marketplace awal.
4. Authentication pelanggan.
5. Authentication admin.
6. Role-based access untuk customer, admin, finance, dan super admin.
7. Layout dasar public, account, dan admin.

Acceptance criteria:

1. Pelanggan dapat register dan login.
2. Admin dapat login dan mengakses dashboard admin.
3. User non-admin tidak bisa mengakses halaman admin.
4. Data marketplace awal tersedia.

## Phase 2: Public Site and Request Flow

Tujuan: pelanggan bisa memahami layanan dan mengirim request.

Deliverables:

1. Landing page.
2. Halaman cara kerja.
3. Halaman marketplace yang didukung.
4. Halaman FAQ.
5. Form request jasa titip.
6. Validasi form.
7. Halaman konfirmasi request.
8. Account dashboard sederhana.
9. Daftar dan detail request pelanggan.

Acceptance criteria:

1. Pelanggan dapat membuat request valid.
2. Request tersimpan dengan status Submitted.
3. Pelanggan dapat melihat detail request.
4. Admin dapat melihat request baru.

## Phase 3: Admin Request Review and Quotation

Tujuan: admin dapat memproses request dan mengirim quotation.

Deliverables:

1. Admin dashboard.
2. Daftar request dengan filter.
3. Detail request admin.
4. Catatan internal.
5. Form quotation.
6. Breakdown biaya.
7. Masa berlaku quotation.
8. Revisi quotation.
9. Customer accept/reject quote.

Acceptance criteria:

1. Admin dapat membuat quotation dari request.
2. Pelanggan dapat melihat breakdown quotation.
3. Pelanggan dapat menerima atau menolak quotation.
4. Quote yang diterima membuat order.

## Phase 4: Payment and Order Processing

Tujuan: order dapat dibayar, diverifikasi, dan diproses pembeliannya.

Deliverables:

1. Instruksi pembayaran.
2. Upload bukti pembayaran.
3. Daftar payment admin/finance.
4. Verifikasi atau penolakan payment.
5. Order detail admin.
6. Status pembelian.
7. Pencatatan informasi pembelian marketplace.
8. Cost adjustment dasar.
9. Timeline order.

Acceptance criteria:

1. Pelanggan dapat upload bukti pembayaran.
2. Finance dapat verifikasi pembayaran.
3. Order hanya bisa masuk pembelian setelah payment verified.
4. Pelanggan dapat melihat timeline order.

## Phase 5: Shipment, Completion, and Problem Handling

Tujuan: lifecycle order selesai dari pengiriman internasional sampai delivered.

Deliverables:

1. Shipment internasional.
2. Shipment domestik.
3. Tracking number dan carrier.
4. Status pengiriman.
5. Pencatatan biaya aktual.
6. Flow problem order.
7. Flow refund atau additional payment.
8. Completion flow.

Acceptance criteria:

1. Admin dapat memperbarui shipment.
2. Pelanggan dapat melihat status pengiriman dan tracking.
3. Order dapat ditandai delivered dan completed.
4. Order bermasalah memiliki catatan resolusi.

## Phase 6: Operational Hardening

Tujuan: meningkatkan kualitas operasional, keamanan, dan monitoring.

Deliverables:

1. Audit log untuk tindakan penting.
2. Search dan filter lebih kuat.
3. Export data order/payment.
4. Notification email dasar.
5. Template pesan WhatsApp.
6. Error handling dan empty state.
7. Loading state.
8. Permission review.
9. Backup dan data retention policy.

Acceptance criteria:

1. Admin bisa melacak perubahan status penting.
2. Finance bisa mengambil data pembayaran untuk rekonsiliasi.
3. Pelanggan mendapat notifikasi status penting.

## Phase 7: Growth and Automation

Tujuan: mengurangi kerja manual setelah MVP stabil.

Deliverables:

1. Integrasi payment gateway.
2. Integrasi tracking kurir domestik.
3. Integrasi kurs otomatis.
4. Kalkulator estimasi biaya publik.
5. Template quotation otomatis per marketplace.
6. Customer loyalty atau repeat order flow.
7. Referral tracking.
8. Content SEO untuk tiap marketplace dan kategori produk.

## Prioritas MVP

Urutan paling praktis:

1. Authentication dan role.
2. Model data inti.
3. Request form.
4. Admin request review.
5. Quotation.
6. Accept quote menjadi order.
7. Payment proof upload.
8. Payment verification.
9. Order status timeline.
10. Shipment tracking manual.

## Testing Strategy

1. Unit test untuk kalkulasi quotation.
2. Integration test untuk request to quote to order.
3. Integration test untuk payment verification.
4. Access control test untuk admin routes.
5. Form validation test untuk request dan quotation.
6. Manual QA untuk mobile viewport.

## Release Milestones

### Internal Alpha

Target: admin dapat memasukkan request dan quotation secara manual.

### Private Beta

Target: pelanggan terbatas dapat mengirim request dan upload bukti pembayaran.

### Public MVP

Target: landing page publik, request flow, admin operations, payment verification, dan status order siap digunakan.

### Post-MVP

Target: notifikasi, otomasi biaya, integrasi payment, dan konten SEO.

