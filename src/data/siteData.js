// ============================================================================
// PUSAT KONFIGURASI WEBSITE
// ----------------------------------------------------------------------------
// SEMUA data bisnis yang dapat diedit berada di file ini: informasi website,
// data tiga toko, kontak, media sosial, jam operasional, layanan, FAQ,
// navigasi, dan metadata SEO.
//
// Cara mengedit:
//   1. Ubah nilai di dalam tanda kutip sesuai data resmi toko.
//   2. Kolom yang masih kosong ("") akan tampil sebagai placeholder di website.
//   3. Setelah selesai, jalankan `npm run build` untuk memperbarui website.
//
// Nomor WhatsApp: gunakan format internasional tanpa tanda + atau spasi.
//   Contoh: "6281234567890"  (bukan "0812-3456-7890")
// ============================================================================

export const site = {
  name: "Almira Gadget & DRSTORE",
  tagline: "Pusat Jual Beli dan Tukar Tambah Smartphone",
  description:
    "Informasi layanan jual beli dan tukar tambah smartphone melalui Almira Gadget, DRSTORE Sidoarjo, dan DRSTORE Tropodo.",
  // Domain resmi website (tanpa garis miring di akhir).
  url: "https://drgroup.com",
  logo: "/assets/logo-resmi.png",
  ogImage: "/assets/og-image.svg",
  // Toko yang menjadi tujuan tombol WhatsApp umum (misal di header).
  defaultStoreId: "almira-gadget",
};

// ----------------------------------------------------------------------------
// NAVIGASI
// ----------------------------------------------------------------------------
export const navigation = [
  { label: "Beranda", path: "/" },
  { label: "Layanan", path: "/layanan" },
  { label: "Lokasi Toko", path: "/lokasi-toko" },
  { label: "Cara Kerja", path: "/cara-kerja" },
  { label: "Artikel", path: "/artikel" },
  { label: "FAQ", path: "/faq" },
  { label: "Kontak", path: "/kontak" },
];

// ----------------------------------------------------------------------------
// DATA TOKO
// Isi setiap kolom dengan data resmi. Kolom kosong tampil sebagai placeholder.
// Untuk menambah toko baru: salin satu objek di bawah, ganti id dan isinya.
// ----------------------------------------------------------------------------
export const stores = [
  {
    id: "almira-gadget",
    name: "Almira Gadget",
    area: "Sukodono, Sidoarjo",
    description:
      "Melayani kebutuhan jual beli smartphone baru dan second, penjualan perangkat milik pelanggan, serta tukar tambah smartphone.",
    address:
      "Jl. Raya Saimbang, Kebonagung, Kec. Sukodono, Kabupaten Sidoarjo, Jawa Timur 61258",
    whatsapp: "6281331112011",
    instagram: "almiragadget_sidoarjo",
    tiktok: "almira_gadget",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jl.+Raya+Saimbang,+Kebonagung,+Kec.+Sukodono,+Kabupaten+Sidoarjo,+Jawa+Timur+61258",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Jl.%20Raya%20Saimbang%2C%20Kebonagung%2C%20Kec.%20Sukodono%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061258&output=embed",
    operatingDays: "Senin - Minggu",
    operatingHours: "10.00 - 23.00 WIB (Jumat 14.00 - 23.00 WIB)",
    photo: "/assets/foto-almira-gadget.jpg",
    logo: "/assets/logo-almira-resmi.png",
    services: ["beli", "jual", "tukar-tambah", "konsultasi"],
    status: "Buka setiap hari",
  },
  {
    id: "drstore-sidoarjo",
    name: "DRSTORE Sidoarjo",
    area: "Candi, Sidoarjo",
    description:
      "Cabang DRSTORE yang melayani jual beli smartphone baru dan second serta tukar tambah perangkat di area Sidoarjo.",
    address:
      "Jalan Sumotuwo, Ngampelsari, Kec. Candi, Kabupaten Sidoarjo, Jawa Timur 61271",
    whatsapp: "628113388567",
    instagram: "drstore_sidoarjo",
    tiktok: "drstore.sidoarjo",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jalan+Sumotuwo,+Ngampelsari,+Kec.+Candi,+Kabupaten+Sidoarjo,+Jawa+Timur+61271",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Jalan%20Sumotuwo%2C%20Ngampelsari%2C%20Kec.%20Candi%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061271&output=embed",
    operatingDays: "Senin - Minggu",
    operatingHours: "10.00 - 23.00 WIB (Jumat 14.00 - 23.00 WIB)",
    photo: "/assets/foto-drstore-sidoarjo.jpg",
    logo: "/assets/logo-drstore-sidoarjo-resmi.png",
    services: ["beli", "jual", "tukar-tambah", "konsultasi"],
    status: "Buka setiap hari",
  },
  {
    id: "drstore-tropodo",
    name: "DRSTORE Tropodo",
    area: "Waru, Sidoarjo",
    description:
      "Cabang DRSTORE yang melayani jual beli smartphone baru dan second serta tukar tambah perangkat di area Tropodo.",
    address:
      "Jl. Raya Tropodo No.03, Tropodo Wetan, Tropodo, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256",
    whatsapp: "628113341134",
    instagram: "drstore_tropodo",
    tiktok: "dr.store.tropodo",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jl.+Raya+Tropodo+No.03,+Tropodo+Wetan,+Kec.+Waru,+Kabupaten+Sidoarjo,+Jawa+Timur+61256",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Jl.%20Raya%20Tropodo%20No.03%2C%20Tropodo%20Wetan%2C%20Kec.%20Waru%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061256&output=embed",
    operatingDays: "Senin - Minggu",
    operatingHours: "10.00 - 23.00 WIB (Jumat 14.00 - 23.00 WIB)",
    photo: "/assets/foto-drstore-tropodo.jpg",
    logo: "/assets/logo-drstore-tropodo-resmi.png",
    services: ["beli", "jual", "tukar-tambah", "konsultasi"],
    status: "Buka setiap hari",
  },
];

// ----------------------------------------------------------------------------
// LAYANAN (kartu ringkas di beranda dan navigasi layanan)
// ----------------------------------------------------------------------------
export const services = [
  {
    id: "beli",
    icon: "smartphone",
    title: "Beli Smartphone",
    summary:
      "Smartphone baru dan second, Android maupun iPhone, dengan konsultasi terlebih dahulu sebelum membeli.",
  },
  {
    id: "jual",
    icon: "banknote",
    title: "Jual Smartphone",
    summary:
      "Jual perangkat Anda dengan proses pemeriksaan yang jelas dan penawaran setelah pengecekan langsung.",
  },
  {
    id: "tukar-tambah",
    icon: "repeat",
    title: "Tukar Tambah",
    summary:
      "Tukar smartphone lama Anda dengan perangkat lain yang tersedia di toko dengan selisih harga yang transparan.",
  },
  {
    id: "konsultasi",
    icon: "messages-square",
    title: "Konsultasi Smartphone",
    summary:
      "Diskusikan kebutuhan Anda — budget, kamera, gaming, atau baterai — sebelum memutuskan perangkat yang tepat.",
  },
];

// ----------------------------------------------------------------------------
// DETAIL LAYANAN (halaman Layanan)
// ----------------------------------------------------------------------------
export const serviceDetails = {
  beli: {
    title: "Beli Smartphone",
    intro:
      "Anda dapat berkonsultasi terlebih dahulu dengan tim toko sebelum memilih perangkat. Sampaikan kebutuhan dan anggaran Anda, lalu tim toko akan membantu menjelaskan pilihan yang tersedia sebelum Anda datang untuk melihat dan memeriksa perangkat secara langsung.",
    categories: [
      "Smartphone baru",
      "Smartphone second",
      "Android",
      "iPhone",
      "Smartphone sesuai anggaran",
    ],
    note: "Ketersediaan perangkat dapat berubah sewaktu-waktu. Silakan hubungi toko untuk menanyakan pilihan perangkat yang sedang tersedia.",
  },
  jual: {
    title: "Jual Smartphone",
    intro:
      "Anda dapat menjual smartphone Anda ke toko dengan proses yang jelas dan transparan, dari konsultasi awal hingga pembayaran setelah kesepakatan.",
    steps: [
      "Hubungi toko melalui WhatsApp.",
      "Sampaikan detail perangkat: tipe, kondisi, dan kelengkapan.",
      "Toko melakukan penilaian awal berdasarkan informasi yang diberikan.",
      "Perangkat diperiksa secara langsung di toko.",
      "Penawaran final diberikan setelah pemeriksaan selesai.",
      "Pembayaran diselesaikan setelah kedua pihak sepakat.",
    ],
    note: "Nilai pembelian perangkat bergantung pada tipe, kondisi fisik, fungsi, kelengkapan, status perangkat, dan hasil pemeriksaan toko.",
  },
  "tukar-tambah": {
    title: "Tukar Tambah Smartphone",
    intro:
      "Anda dapat menukar smartphone yang sedang digunakan dengan perangkat lain yang tersedia di toko. Perangkat lama akan diperiksa terlebih dahulu, kemudian dihitung selisihnya terhadap harga perangkat pengganti.",
    note: "Selisih harga ditentukan berdasarkan hasil pemeriksaan perangkat lama dan harga perangkat pengganti.",
  },
  konsultasi: {
    title: "Konsultasi Smartphone",
    intro:
      "Belum yakin memilih perangkat yang tepat? Anda dapat meminta rekomendasi kepada tim toko berdasarkan kebutuhan Anda, tanpa kewajiban untuk bertransaksi.",
    topics: [
      { icon: "wallet", label: "Budget" },
      { icon: "camera", label: "Kamera" },
      { icon: "gamepad", label: "Gaming" },
      { icon: "battery", label: "Baterai" },
      { icon: "storage", label: "Penyimpanan" },
      { icon: "briefcase", label: "Kebutuhan kerja" },
      { icon: "coffee", label: "Penggunaan harian" },
    ],
  },
};

// ----------------------------------------------------------------------------
// ALASAN MEMILIH (poin kepercayaan di beranda)
// ----------------------------------------------------------------------------
export const trustPoints = [
  "Pilihan smartphone baru dan second",
  "Proses transaksi yang jelas",
  "Bisa jual dan tukar tambah perangkat",
  "Konsultasi sebelum membeli",
  "Tersedia beberapa lokasi toko",
];

// ----------------------------------------------------------------------------
// ALUR TRANSAKSI RINGKAS (beranda)
// ----------------------------------------------------------------------------
export const homeSteps = [
  { title: "Pilih kebutuhan", description: "Beli, jual, atau tukar tambah smartphone." },
  { title: "Hubungi toko", description: "Pilih cabang terdekat dan hubungi melalui WhatsApp." },
  { title: "Konsultasikan perangkat", description: "Sampaikan kebutuhan atau detail perangkat Anda." },
  { title: "Datang ke toko", description: "Lihat dan periksa perangkat secara langsung." },
  { title: "Selesaikan transaksi", description: "Transaksi selesai setelah kedua pihak sepakat." },
];

// ----------------------------------------------------------------------------
// PANDUAN PROSES (halaman Cara Kerja)
// ----------------------------------------------------------------------------
export const processGuides = [
  {
    id: "membeli",
    title: "Cara Membeli Smartphone",
    steps: [
      "Pilih toko.",
      "Hubungi toko melalui WhatsApp.",
      "Sampaikan kebutuhan dan anggaran.",
      "Tanyakan pilihan perangkat yang tersedia.",
      "Datang ke toko untuk melihat dan memeriksa perangkat.",
      "Selesaikan transaksi setelah cocok.",
    ],
  },
  {
    id: "menjual",
    title: "Cara Menjual Smartphone",
    steps: [
      "Pilih toko.",
      "Kirim informasi perangkat.",
      "Kirim foto kondisi perangkat.",
      "Terima estimasi awal.",
      "Bawa perangkat ke toko.",
      "Perangkat diperiksa.",
      "Terima penawaran final.",
      "Selesaikan transaksi setelah setuju.",
    ],
  },
  {
    id: "tukar-tambah",
    title: "Cara Tukar Tambah Smartphone",
    steps: [
      "Sampaikan perangkat lama.",
      "Sampaikan perangkat yang ingin dibeli.",
      "Terima estimasi awal.",
      "Bawa perangkat ke toko.",
      "Perangkat diperiksa.",
      "Selisih harga dihitung.",
      "Transaksi diselesaikan setelah kesepakatan.",
    ],
  },
];

export const transactionNotice =
  "Estimasi melalui chat bukan merupakan harga final. Harga final diberikan setelah perangkat diperiksa langsung oleh pihak toko.";

// ----------------------------------------------------------------------------
// FAQ
// ----------------------------------------------------------------------------
export const faqItems = [
  {
    question: "Apakah tersedia smartphone baru dan second?",
    answer:
      "Ya. Almira Gadget, DRSTORE Sidoarjo, dan DRSTORE Tropodo melayani pembelian smartphone baru maupun second, baik Android maupun iPhone. Ketersediaan perangkat dapat berubah setiap saat, jadi silakan hubungi toko melalui WhatsApp untuk menanyakan pilihan yang tersedia.",
  },
  {
    question: "Apakah saya bisa menjual smartphone ke toko?",
    answer:
      "Ya, Anda dapat menjual smartphone Anda. Hubungi toko melalui WhatsApp, sampaikan tipe dan kondisi perangkat, lalu kirimkan foto perangkat. Toko akan memberikan estimasi awal dan melakukan pemeriksaan langsung sebelum memberikan penawaran final.",
  },
  {
    question: "Apakah tersedia layanan tukar tambah?",
    answer:
      "Ya. Anda dapat menukar smartphone lama dengan perangkat lain yang tersedia di toko. Selisih harga ditentukan berdasarkan hasil pemeriksaan perangkat lama dan harga perangkat pengganti.",
  },
  {
    question: "Bagaimana cara mengetahui estimasi harga smartphone saya?",
    answer:
      "Hubungi toko melalui WhatsApp dan sampaikan tipe perangkat, kondisi fisik, fungsi, serta kelengkapannya. Melampirkan foto perangkat akan membantu toko memberikan estimasi awal yang lebih akurat.",
  },
  {
    question: "Apakah estimasi melalui WhatsApp merupakan harga final?",
    answer:
      "Bukan. Estimasi melalui chat bukan merupakan harga final. Harga final diberikan setelah perangkat diperiksa langsung oleh pihak toko.",
  },
  {
    question: "Apa saja yang memengaruhi nilai smartphone?",
    answer:
      "Nilai perangkat bergantung pada tipe, kondisi fisik, fungsi, kelengkapan, status perangkat, dan hasil pemeriksaan toko.",
  },
  {
    question: "Apakah saya harus datang langsung ke toko?",
    answer:
      "Ya. Untuk transaksi jual, beli, maupun tukar tambah, perangkat perlu diperiksa langsung di toko agar kedua pihak mendapatkan kesepakatan yang jelas dan transparan.",
  },
  {
    question: "Apakah bisa berkonsultasi sebelum membeli?",
    answer:
      "Ya. Anda dapat berkonsultasi terlebih dahulu melalui WhatsApp, misalnya mengenai pilihan perangkat sesuai anggaran, kamera, gaming, baterai, atau kebutuhan lainnya, tanpa kewajiban untuk bertransaksi.",
  },
  {
    question: "Bagaimana cara memilih cabang?",
    answer:
      "Pilih toko yang paling dekat atau paling nyaman untuk Anda: Almira Gadget, DRSTORE Sidoarjo, atau DRSTORE Tropodo. Informasi alamat, jam operasional, dan kontak setiap toko tersedia di halaman Lokasi Toko.",
  },
  {
    question: "Bagaimana cara menghubungi toko?",
    answer:
      "Setiap toko dapat dihubungi melalui tombol WhatsApp yang tersedia di website ini. Anda juga dapat mengunjungi halaman Kontak dan mengisi formulir singkat — pesan Anda akan diteruskan ke WhatsApp toko yang dipilih.",
  },
];

// ----------------------------------------------------------------------------
// FAQ KEBIJAKAN TOKO (tampil sebagai kelompok terpisah di halaman FAQ)
// ----------------------------------------------------------------------------
export const policyFaqItems = [
  {
    question: "Apakah smartphone yang dibeli mendapatkan garansi?",
    answer:
      "Ya. Garansi diberikan sesuai jenis dan kondisi perangkat yang dibeli. Untuk smartphone baru, garansi mengikuti ketentuan garansi resmi distributor atau produsen apabila tersedia. Untuk smartphone second, garansi toko berlaku selama 14 hari sejak tanggal pembelian, sesuai syarat dan ketentuan yang tercantum pada nota atau bukti transaksi. Garansi toko umumnya mencakup kerusakan fungsi perangkat yang bukan disebabkan oleh kesalahan penggunaan. Garansi tidak berlaku untuk kerusakan yang disebabkan oleh perangkat jatuh atau terbentur; terkena air atau cairan; kerusakan fisik setelah transaksi; penggunaan charger atau aksesori yang tidak sesuai; pembongkaran atau perbaikan oleh pihak lain; modifikasi software yang menyebabkan kerusakan; serta kelalaian atau kesalahan penggunaan lainnya. Ketentuan lengkap garansi akan dijelaskan oleh pihak toko sebelum transaksi selesai.",
  },
  {
    question: "Apakah smartphone second sudah diperiksa sebelum dijual?",
    answer:
      "Setiap smartphone second melalui pemeriksaan kondisi dan fungsi sebelum ditawarkan kepada pelanggan. Pemeriksaan dapat meliputi layar dan touchscreen; kamera; speaker dan mikrofon; tombol; konektivitas; port pengisian daya; sensor; kondisi baterai; kondisi fisik; dan fungsi penting lainnya. Kami tetap menyarankan pelanggan melakukan pemeriksaan kembali saat berada di toko sebelum menyelesaikan transaksi.",
  },
  {
    question: "Apakah barang yang sudah dibeli bisa dikembalikan?",
    answer:
      "Pengembalian atau penukaran perangkat mengikuti kondisi perangkat dan kebijakan yang berlaku pada saat transaksi. Apabila ditemukan kendala fungsi yang termasuk dalam cakupan garansi toko, pelanggan dapat menghubungi atau membawa perangkat ke toko untuk dilakukan pemeriksaan terlebih dahulu. Setelah pemeriksaan, penyelesaian dapat berupa perbaikan, penggantian unit, penukaran dengan unit lain, atau penyelesaian lain yang disepakati, sesuai kondisi perangkat, ketersediaan unit, dan ketentuan garansi yang berlaku. Perubahan pikiran, ketidaksesuaian selera, warna, atau alasan lain yang tidak berkaitan dengan kerusakan perangkat tidak otomatis menjadi dasar pengembalian.",
  },
  {
    question: "Bagaimana jika saya menemukan masalah setelah membeli smartphone?",
    answer:
      "Segera hubungi toko tempat Anda melakukan transaksi dan sampaikan nama pembeli, tanggal transaksi, tipe perangkat, kendala yang dialami, dan bukti transaksi apabila diperlukan. Jangan membongkar atau memperbaiki perangkat di tempat lain sebelum menghubungi toko karena dapat memengaruhi status garansi. Pihak toko akan melakukan pemeriksaan untuk menentukan penyebab kendala dan penyelesaian yang sesuai.",
  },
  {
    question: "Apakah garansi berlaku di semua cabang?",
    answer:
      "Garansi pada dasarnya mengikuti toko tempat transaksi dilakukan. Jika transaksi dilakukan di Almira Gadget, DRSTORE Sidoarjo, atau DRSTORE Tropodo, hubungi terlebih dahulu cabang tempat pembelian untuk mendapatkan arahan mengenai proses klaim garansi.",
  },
  {
    question: "Apa saja metode pembayaran yang tersedia?",
    answer:
      "Metode pembayaran dapat berbeda pada setiap cabang. Metode pembayaran yang tersedia dapat meliputi tunai, transfer bank, dan QRIS. Untuk transaksi dengan nominal besar, pelanggan disarankan melakukan konfirmasi metode pembayaran kepada toko sebelum datang.",
  },
  {
    question: "Apakah bisa melakukan pembayaran secara transfer?",
    answer:
      "Bisa, apabila metode transfer tersedia di cabang yang dipilih. Pastikan pembayaran hanya dilakukan ke rekening atau metode pembayaran resmi yang diberikan langsung oleh pihak toko. Jangan melakukan pembayaran ke rekening yang mengatasnamakan pihak lain tanpa konfirmasi dari toko.",
  },
  {
    // Jika QRIS tidak tersedia di cabang mana pun, hapus item ini.
    question: "Apakah tersedia pembayaran dengan QRIS?",
    answer:
      "Ya. Pembayaran menggunakan QRIS tersedia di toko tertentu. Silakan konfirmasi kepada cabang yang dipilih sebelum melakukan transaksi.",
  },
  {
    question: "Apakah bisa melakukan cicilan?",
    answer:
      "Ya. Jika tersedia layanan cicilan, syarat, tenor, biaya, dan proses persetujuan mengikuti ketentuan penyedia pembiayaan yang bekerja sama dengan toko. Persetujuan cicilan tidak ditentukan oleh website.",
  },
  {
    question: "Apakah harga yang diberikan melalui WhatsApp sudah final?",
    answer:
      "Belum tentu. Untuk pembelian smartphone, harga dan ketersediaan unit perlu dikonfirmasi kembali kepada toko. Untuk penjualan atau tukar tambah smartphone milik pelanggan, harga melalui WhatsApp merupakan estimasi awal. Harga final diberikan setelah perangkat diperiksa secara langsung, termasuk kondisi fisik, fungsi, kelengkapan, dan status perangkat.",
  },
  {
    question: "Apakah saya akan mendapatkan bukti transaksi?",
    answer:
      "Ya. Setiap transaksi yang selesai sebaiknya disertai bukti transaksi atau nota dari toko. Simpan bukti transaksi tersebut selama masa garansi karena dapat diperlukan ketika mengajukan klaim.",
  },
  {
    question: "Identitas apa yang diperlukan saat transaksi?",
    blocks: [
      { type: "p", text: "Persyaratan identitas bergantung pada jenis transaksi." },
      { type: "h4", text: "Pembelian Smartphone" },
      { type: "p", text: "Untuk pembelian smartphone secara normal, pelanggan pada umumnya tidak diwajibkan menyerahkan identitas pribadi, kecuali diperlukan untuk:" },
      {
        type: "ul",
        items: [
          "pembuatan dokumen transaksi tertentu;",
          "pengajuan cicilan atau pembiayaan;",
          "kebutuhan administrasi yang diwajibkan oleh penyedia layanan pihak ketiga; atau",
          "kondisi lain yang membutuhkan verifikasi identitas.",
        ],
      },
      { type: "h4", text: "Menjual Smartphone ke Toko" },
      { type: "p", text: "Untuk transaksi penjualan smartphone kepada toko, pelanggan dapat diminta menunjukkan identitas resmi yang masih berlaku, seperti:" },
      {
        type: "ul",
        items: ["KTP;", "SIM; atau", "identitas resmi lain yang dapat diverifikasi."],
      },
      { type: "p", text: "Identitas digunakan untuk membantu memastikan kejelasan pihak yang melakukan transaksi dan mengurangi risiko transaksi terhadap perangkat yang bermasalah." },
      { type: "p", text: "Toko dapat mencatat informasi transaksi yang diperlukan sesuai kebutuhan administrasi dan kebijakan privasi yang berlaku." },
      { type: "h4", text: "Tukar Tambah Smartphone" },
      { type: "p", text: "Untuk transaksi tukar tambah, pelanggan juga dapat diminta menunjukkan identitas resmi karena terdapat perangkat milik pelanggan yang diserahkan kepada toko sebagai bagian dari transaksi." },
      { type: "h4", text: "Verifikasi Perangkat" },
      { type: "p", text: "Sebelum menerima smartphone dari pelanggan, toko dapat melakukan pemeriksaan terhadap:" },
      {
        type: "ul",
        items: [
          "nomor IMEI;",
          "nomor seri perangkat;",
          "status akun perangkat;",
          "status Find My iPhone atau fitur keamanan sejenis;",
          "status pembiayaan atau device lock apabila terdeteksi;",
          "kondisi perangkat; dan",
          "informasi lain yang relevan untuk memastikan perangkat dapat diperjualbelikan secara wajar.",
        ],
      },
      { type: "p", text: "Pelanggan wajib memastikan perangkat yang dijual atau ditukar tambah merupakan perangkat yang secara sah berada dalam penguasaannya." },
      { type: "p", text: "Toko berhak menolak transaksi apabila terdapat indikasi perangkat:" },
      {
        type: "ul",
        items: [
          "dilaporkan hilang;",
          "diduga berasal dari tindak pidana;",
          "masih terikat pembiayaan;",
          "memiliki device lock atau finance lock;",
          "masih terkunci akun pemilik sebelumnya;",
          "memiliki IMEI atau identitas perangkat yang bermasalah; atau",
          "memiliki kondisi lain yang menimbulkan keraguan mengenai status perangkat.",
        ],
      },
    ],
  },
  {
    question: "Bagaimana standar kondisi smartphone second yang dijual?",
    blocks: [
      { type: "p", text: "Smartphone second yang ditawarkan melalui Almira Gadget, DRSTORE Sidoarjo, dan DRSTORE Tropodo harus melalui pemeriksaan dasar sebelum ditawarkan kepada pelanggan." },
      { type: "p", text: "Pemeriksaan bertujuan mengetahui kondisi perangkat secara transparan, bukan untuk menyatakan bahwa smartphone second memiliki kondisi yang sama dengan perangkat baru." },
      { type: "h4", text: "Pemeriksaan Fungsi" },
      { type: "p", text: "Pemeriksaan dapat mencakup:" },
      {
        type: "ul",
        items: [
          "layar;",
          "touchscreen;",
          "kamera depan dan belakang;",
          "speaker;",
          "mikrofon;",
          "earpiece;",
          "tombol fisik;",
          "port pengisian daya;",
          "Wi-Fi;",
          "Bluetooth;",
          "jaringan seluler;",
          "sensor;",
          "biometrik seperti fingerprint atau Face ID apabila tersedia;",
          "kondisi baterai;",
          "pengisian daya; dan",
          "fungsi penting lainnya sesuai tipe perangkat.",
        ],
      },
      { type: "h4", text: "Pemeriksaan Fisik" },
      { type: "p", text: "Kondisi fisik perangkat juga diperiksa dan dapat memiliki bekas penggunaan seperti:" },
      {
        type: "ul",
        items: [
          "goresan ringan;",
          "lecet;",
          "bekas pemakaian pada frame;",
          "perubahan kondisi kosmetik; atau",
          "tanda pemakaian wajar lainnya.",
        ],
      },
      { type: "p", text: "Kondisi fisik setiap unit second dapat berbeda." },
      { type: "p", text: "Pelanggan disarankan melihat dan memeriksa kondisi unit secara langsung sebelum menyelesaikan transaksi." },
      { type: "h4", text: "Riwayat Komponen" },
      { type: "p", text: "Apabila diketahui, toko dapat memberikan informasi mengenai kondisi atau riwayat komponen perangkat." },
      { type: "p", text: "Smartphone second tidak selalu berarti seluruh komponennya masih merupakan komponen bawaan sejak pertama kali perangkat diproduksi." },
      { type: "p", text: "Apabila terdapat penggantian atau perbaikan komponen yang diketahui oleh toko, informasi tersebut sebaiknya disampaikan kepada calon pembeli." },
      { type: "h4", text: "Kondisi Baterai" },
      { type: "p", text: "Baterai merupakan komponen yang mengalami penurunan performa seiring penggunaan." },
      { type: "p", text: "Kapasitas dan daya tahan baterai smartphone second dapat berbeda dengan perangkat baru." },
      { type: "p", text: "Untuk perangkat yang menyediakan informasi battery health, pelanggan dapat memeriksanya sebelum transaksi." },
      { type: "h4", text: "Akun dan Keamanan" },
      { type: "p", text: "Sebelum dijual kepada pelanggan, perangkat harus dapat digunakan tanpa terkunci akun pemilik sebelumnya." },
      { type: "p", text: "Perangkat tidak boleh dalam kondisi terkunci oleh:" },
      {
        type: "ul",
        items: [
          "Apple ID atau Activation Lock;",
          "Google Account/FRP yang belum dilepas;",
          "Samsung Account;",
          "Xiaomi Account;",
          "OPPO/realme/vivo account lock;",
          "finance lock;",
          "device management yang tidak dapat dilepas; atau",
          "sistem keamanan lain yang menghalangi penggunaan normal perangkat.",
        ],
      },
      { type: "h4", text: "IMEI dan Jaringan" },
      { type: "p", text: "Nomor IMEI dan kemampuan perangkat terhubung ke jaringan seluler dapat diperiksa sebelum transaksi." },
      { type: "p", text: "Pelanggan tetap disarankan melakukan pengecekan kembali pada saat transaksi." },
      { type: "h4", text: "Klasifikasi Kondisi" },
      { type: "p", text: "Untuk mempermudah pelanggan memahami kondisi unit, toko dapat menggunakan klasifikasi berikut:" },
      {
        type: "ul",
        items: [
          "Sangat Baik: fungsi perangkat normal dengan kondisi fisik sangat baik dan hanya memiliki sedikit tanda pemakaian.",
          "Baik: fungsi perangkat normal dengan tanda penggunaan wajar seperti goresan atau lecet ringan.",
          "Cukup: fungsi utama perangkat masih dapat digunakan, tetapi terdapat tanda pemakaian yang lebih terlihat atau kondisi tertentu yang telah dijelaskan kepada pelanggan.",
        ],
      },
      { type: "p", text: "Klasifikasi kondisi bersifat panduan. Kondisi aktual setiap perangkat tetap harus dilihat secara langsung sebelum transaksi." },
      { type: "h4", text: "Prinsip Penjualan Smartphone Second" },
      { type: "p", text: "Kami berupaya memberikan informasi kondisi unit secara terbuka agar pelanggan dapat mengambil keputusan berdasarkan kondisi perangkat sebenarnya." },
      { type: "p", text: "Karena setiap smartphone second memiliki riwayat penggunaan yang berbeda, pelanggan disarankan:" },
      {
        type: "ul",
        items: [
          "memeriksa perangkat secara langsung;",
          "mencoba fungsi penting;",
          "menanyakan kondisi atau kekurangan unit;",
          "membaca ketentuan garansi; dan",
          "memastikan perangkat sesuai sebelum menyelesaikan transaksi.",
        ],
      },
    ],
  },
];

// ----------------------------------------------------------------------------
// FORMULIR KONTAK
// ----------------------------------------------------------------------------
export const kebutuhanOptions = [
  "Beli smartphone",
  "Jual smartphone",
  "Tukar tambah",
  "Konsultasi",
  "Pertanyaan lainnya",
];

// ----------------------------------------------------------------------------
// SEO PER HALAMAN
// Judul, deskripsi, canonical, dan Open Graph dapat diedit di sini.
// ----------------------------------------------------------------------------
export const seo = {
  home: {
    path: "/",
    title: "Jual Beli dan Tukar Tambah Smartphone | Almira Gadget & DRSTORE",
    description:
      "Informasi layanan jual beli dan tukar tambah smartphone melalui Almira Gadget, DRSTORE Sidoarjo, dan DRSTORE Tropodo.",
  },
  layanan: {
    path: "/layanan",
    title: "Layanan Jual Beli & Tukar Tambah Smartphone | Almira Gadget & DRSTORE",
    description:
      "Layanan pembelian smartphone baru dan second, penjualan perangkat, tukar tambah, serta konsultasi smartphone di Almira Gadget dan DRSTORE.",
  },
  lokasi: {
    path: "/lokasi-toko",
    title: "Lokasi Toko | Almira Gadget & DRSTORE",
    description:
      "Daftar lokasi Almira Gadget, DRSTORE Sidoarjo, dan DRSTORE Tropodo beserta alamat, jam operasional, dan kontak WhatsApp setiap cabang.",
  },
  caraKerja: {
    path: "/cara-kerja",
    title: "Cara Kerja | Almira Gadget & DRSTORE",
    description:
      "Panduan langkah demi langkah untuk membeli, menjual, dan tukar tambah smartphone di Almira Gadget, DRSTORE Sidoarjo, dan DRSTORE Tropodo.",
  },
  faq: {
    path: "/faq",
    title: "Pertanyaan Umum (FAQ) | Almira Gadget & DRSTORE",
    description:
      "Jawaban atas pertanyaan umum seputar jual beli smartphone, tukar tambah, estimasi harga, dan cara menghubungi toko.",
  },
  artikel: {
    path: "/artikel",
    title: "Panduan & Tips Smartphone | Almira Gadget & DRSTORE",
    description:
      "Informasi seputar membeli, menjual, mengecek, dan merawat smartphone baru maupun second dari Almira Gadget dan DRSTORE.",
  },
  kontak: {
    path: "/kontak",
    title: "Kontak | Almira Gadget & DRSTORE",
    description:
      "Hubungi Almira Gadget, DRSTORE Sidoarjo, atau DRSTORE Tropodo melalui WhatsApp, Instagram, atau formulir pertanyaan.",
  },
  syaratKetentuan: {
    path: "/syarat-ketentuan",
    title: "Syarat & Ketentuan | Almira Gadget & DRSTORE",
    description:
      "Syarat dan ketentuan penggunaan website informasi Almira Gadget & DRSTORE, termasuk ketentuan jual beli dan tukar tambah smartphone.",
  },
  kebijakanPrivasi: {
    path: "/kebijakan-privasi",
    title: "Kebijakan Privasi | Almira Gadget & DRSTORE",
    description:
      "Kebijakan privasi website informasi Almira Gadget & DRSTORE mengenai penanganan informasi pengguna.",
  },
};
