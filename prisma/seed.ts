import "dotenv/config"; 
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// 1. Ambil URL dari environment
const connectionString = process.env.DATABASE_URL;

// 2. Buat koneksi pool menggunakan 'pg' murni
const pool = new Pool({ connectionString });

// 3. Masukkan ke dalam PrismaPg Adapter
const adapter = new PrismaPg(pool);

// 4. Inisialisasi Prisma Client dengan adapter tersebut
const prisma = new PrismaClient({ adapter });

const marketplaces = [
  {
    name: "Amazon",
    slug: "amazon",
    baseCountry: "USA",
    baseCurrency: "USD",
  },
  {
    name: "eBay",
    slug: "ebay",
    baseCountry: "USA",
    baseCurrency: "USD",
  },
  {
    name: "AliExpress",
    slug: "aliexpress",
    baseCountry: "China",
    baseCurrency: "USD",
  },
  {
    name: "Rakuten",
    slug: "rakuten",
    baseCountry: "Japan",
    baseCurrency: "JPY",
  },
  {
    name: "DHGate",
    slug: "dhgate",
    baseCountry: "China",
    baseCurrency: "USD",
  },
  {
    name: "Taobao",
    slug: "taobao",
    baseCountry: "China",
    baseCurrency: "CNY",
  },
  {
    name: "1688",
    slug: "1688",
    baseCountry: "China",
    baseCurrency: "CNY",
  },
  {
    name: "Mercari",
    slug: "mercari",
    baseCountry: "Japan",
    baseCurrency: "JPY",
  },
];

async function main() {
  for (const marketplace of marketplaces) {
    await prisma.marketplace.upsert({
      where: { slug: marketplace.slug },
      update: {
        name: marketplace.name,
        baseCountry: marketplace.baseCountry,
        baseCurrency: marketplace.baseCurrency,
        isActive: true,
      },
      create: {
        ...marketplace,
        isActive: true,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    // Tambahkan ini agar pool koneksi PostgreSQL juga tertutup
    await pool.end(); 
  });