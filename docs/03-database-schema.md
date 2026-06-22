# Database Schema

Dokumen ini adalah rancangan konseptual database, bukan kode Prisma. Implementasi final sebaiknya dibuat setelah role, payment flow, dan kebijakan quotation disetujui.

## Prinsip Desain

1. Simpan harga estimasi dan harga aktual secara terpisah.
2. Setiap quotation memiliki masa berlaku dan snapshot kurs.
3. Status penting dicatat di timeline agar dapat diaudit.
4. Data pelanggan, alamat, request, order, payment, shipment, dan admin activity dipisahkan.
5. Gunakan enum untuk status operasional agar dashboard dan filter konsisten.

## Tabel Inti

### User

Menyimpan akun pelanggan dan admin.

Field utama:

1. `id`
2. `name`
3. `email`
4. `emailVerifiedAt`
5. `phone`
6. `whatsappNumber`
7. `passwordHash`
8. `role`
9. `status`
10. `createdAt`
11. `updatedAt`

Relasi:

1. Satu user dapat memiliki banyak address.
2. Satu customer dapat memiliki banyak purchase request.
3. Satu admin dapat membuat banyak activity log.

### Address

Menyimpan alamat pengiriman domestik pelanggan.

Field utama:

1. `id`
2. `userId`
3. `label`
4. `recipientName`
5. `phone`
6. `province`
7. `city`
8. `district`
9. `postalCode`
10. `addressLine`
11. `notes`
12. `isDefault`
13. `createdAt`
14. `updatedAt`

### Marketplace

Menyimpan marketplace sumber yang didukung.

Field utama:

1. `id`
2. `name`
3. `slug`
4. `baseCountry`
5. `baseCurrency`
6. `isActive`
7. `notes`
8. `createdAt`
9. `updatedAt`

Data awal:

1. Amazon
2. eBay
3. AliExpress
4. Rakuten
5. DHGate

### PurchaseRequest

Request awal dari pelanggan sebelum menjadi order.

Field utama:

1. `id`
2. `requestNumber`
3. `customerId`
4. `marketplaceId`
5. `status`
6. `productUrl`
7. `productName`
8. `productImageUrl`
9. `variant`
10. `quantity`
11. `customerNotes`
12. `adminNotes`
13. `destinationAddressId`
14. `submittedAt`
15. `expiresAt`
16. `createdAt`
17. `updatedAt`

Relasi:

1. Satu request dapat memiliki beberapa quotation revision.
2. Satu request dapat dikonversi menjadi satu order.
3. Satu request memiliki banyak timeline event.

### Quote

Quotation yang diberikan admin kepada pelanggan.

Field utama:

1. `id`
2. `quoteNumber`
3. `purchaseRequestId`
4. `status`
5. `sourceCurrency`
6. `exchangeRateToIdr`
7. `itemSubtotalSource`
8. `marketplaceShippingSource`
9. `internationalShippingIdr`
10. `customsEstimateIdr`
11. `domesticShippingIdr`
12. `serviceFeeIdr`
13. `insuranceFeeIdr`
14. `otherFeeIdr`
15. `discountIdr`
16. `totalEstimateIdr`
17. `validUntil`
18. `customerAcceptedAt`
19. `createdByAdminId`
20. `createdAt`
21. `updatedAt`

Relasi:

1. Satu request dapat memiliki banyak quote.
2. Satu quote yang diterima menjadi dasar order.

### Order

Order yang diproses setelah pelanggan menerima quotation.

Field utama:

1. `id`
2. `orderNumber`
3. `purchaseRequestId`
4. `acceptedQuoteId`
5. `customerId`
6. `status`
7. `totalEstimateIdr`
8. `totalActualIdr`
9. `amountPaidIdr`
10. `outstandingAmountIdr`
11. `purchasedAt`
12. `completedAt`
13. `cancelledAt`
14. `createdAt`
15. `updatedAt`

Relasi:

1. Satu order memiliki banyak payment.
2. Satu order memiliki banyak shipment.
3. Satu order memiliki banyak cost adjustment.
4. Satu order memiliki banyak timeline event.

### Payment

Pembayaran pelanggan.

Field utama:

1. `id`
2. `paymentNumber`
3. `orderId`
4. `customerId`
5. `status`
6. `method`
7. `amountIdr`
8. `paymentProofUrl`
9. `paidAt`
10. `submittedAt`
11. `verifiedAt`
12. `verifiedByAdminId`
13. `rejectionReason`
14. `createdAt`
15. `updatedAt`

### Shipment

Pengiriman internasional atau domestik.

Field utama:

1. `id`
2. `orderId`
3. `type`
4. `status`
5. `carrierName`
6. `trackingNumber`
7. `trackingUrl`
8. `origin`
9. `destination`
10. `estimatedCostIdr`
11. `actualCostIdr`
12. `shippedAt`
13. `deliveredAt`
14. `createdAt`
15. `updatedAt`

### CostAdjustment

Mencatat selisih biaya estimasi dan aktual.

Field utama:

1. `id`
2. `orderId`
3. `type`
4. `description`
5. `amountIdr`
6. `direction`
7. `createdByAdminId`
8. `createdAt`

Contoh type:

1. Customs difference
2. Shipping difference
3. Price change
4. Refund
5. Additional handling

### TimelineEvent

Riwayat perubahan status dan aktivitas penting yang terlihat pelanggan atau internal.

Field utama:

1. `id`
2. `entityType`
3. `entityId`
4. `actorUserId`
5. `eventType`
6. `title`
7. `description`
8. `visibility`
9. `metadata`
10. `createdAt`

Visibility:

1. Customer visible
2. Internal only

### AdminNote

Catatan internal untuk request, quote, order, payment, atau shipment.

Field utama:

1. `id`
2. `entityType`
3. `entityId`
4. `adminId`
5. `note`
6. `createdAt`
7. `updatedAt`

### Attachment

File pendukung seperti bukti pembayaran, invoice marketplace, foto barang, atau dokumen bea cukai.

Field utama:

1. `id`
2. `entityType`
3. `entityId`
4. `uploadedByUserId`
5. `type`
6. `fileName`
7. `fileUrl`
8. `mimeType`
9. `fileSize`
10. `createdAt`

### AuditLog

Catatan tindakan admin untuk kebutuhan audit.

Field utama:

1. `id`
2. `actorUserId`
3. `action`
4. `entityType`
5. `entityId`
6. `beforeData`
7. `afterData`
8. `ipAddress`
9. `userAgent`
10. `createdAt`

## Enum yang Dibutuhkan

### UserRole

1. Customer
2. Admin
3. Finance
4. Super Admin

### UserStatus

1. Active
2. Suspended
3. Deleted

### RequestStatus

1. Draft
2. Submitted
3. Under Review
4. Quoted
5. Customer Revision Requested
6. Accepted
7. Rejected
8. Expired
9. Cancelled

### QuoteStatus

1. Draft
2. Sent
3. Accepted
4. Rejected
5. Expired
6. Superseded

### OrderStatus

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

### PaymentStatus

1. Pending
2. Submitted
3. Verified
4. Rejected
5. Refunded

### ShipmentType

1. International
2. Domestic

### ShipmentStatus

1. Pending
2. In Transit
3. Arrived
4. Customs
5. Delivered
6. Failed
7. Returned

## Index dan Constraint Penting

1. Unique `User.email`.
2. Unique `PurchaseRequest.requestNumber`.
3. Unique `Quote.quoteNumber`.
4. Unique `Order.orderNumber`.
5. Unique `Payment.paymentNumber`.
6. Index `PurchaseRequest.customerId`.
7. Index `PurchaseRequest.status`.
8. Index `Order.customerId`.
9. Index `Order.status`.
10. Index `Payment.status`.
11. Index `Shipment.trackingNumber`.
12. Index `TimelineEvent.entityType` dan `TimelineEvent.entityId`.

## Pertimbangan NextAuth

Project sudah memiliki dependency NextAuth. Jika NextAuth digunakan, schema perlu menambahkan tabel kompatibel untuk account, session, verification token, dan integrasi provider. Jika hanya email/password internal, tabel tambahan tersebut dapat ditunda.

