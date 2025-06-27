A. Judul Proyek : Petanih

B. Deskripsi : Petanih adalah sebuah website yang dibuat oleh KrazyBros dengan tujuan agar segala kalangan masyarakat bisa mendapatkan ilmu mengenai segala hal tentang penanaman.

C. Daftar Anggota Kelompok :
  1. Patrick Sanusi - 221110348
  2. Alexander Cangnaka - 221110796
  3.Michael Khosasi - 221111338
  4.Muhammad Luthfi Ananda Lubis - 221113040 
  5.Artolito Chandra - 221110767

D. URL Web Live : Petanih.netlify.app

E. Arsitektur cloud yang digunakan :
Aplikasi ini menggunakan arsitektur cloud yang terdiri dari beberapa komponen:
  1. Frontend dibangun menggunakan HTML, CSS, dan JavaScript, dan dideploy di Netlify sebagai layanan hosting statis.
  2. Backend dan database dikelola menggunakan Firebase, di mana:
     2.1. Firebase Functions (jika digunakan) menangani logika backend atau API (misalnya proses form).
     2.2. Cloud Firestore digunakan sebagai database NoSQL untuk menyimpan dan mengambil data aplikasi.
     2.3. Seluruh aplikasi dijalankan sepenuhnya di atas layanan cloud (tanpa server fisik), sehingga termasuk arsitektur serverless.
     2.4. Komunikasi antara frontend dan backend dilakukan melalui Firebase SDK dan/atau REST API yang disediakan Firebase.

F. Petunjuk Penggunaan Aplikasi :
  1. Pada halaman awal ini merupakan page login, jika belum memilik akun, maka perlu memasukkan username dan password (Notes : Username yang mau Signup harus username yang belum pernah terdaftar sebelumnya).
  2. Jika sudah Signup dan muncul notif alert kalau sudah berhasil melakukan SingUp maka langkah selanjutnya adalah login deengan menggunakan username dan password yang baru saja dibuat.
  3. Kalau sudah login maka page beralih ke beranda , didalam beranda terdapat Navigation Bar yang bisa diklik kemudian akan mengalihkan page beranda ke page lain.
  4. Untuk menu Jenis Tanah, Pencahayaan dan Kursus merupakan tampilan web statis yang tidak ada hubungannya dengan BackEnd, pada menu-menu ini terdapat beberapa informasi dasar saja.
  5. Pada NavBar Forum, user bisa membuat sebuah forum diskusi baru ataupun membalas pesan di forum yang sudah pernah dibuat oleh user lain.
  6. Jika ingin membuat forum baru, maka klik tambah diskusi baru yang berada di pojok kanan bawah, jika ingin membalas forum yang sudah ada maka klik Lihat dan balas pada forum yang sudah ada.
  7. Untuk artikel juga kita bisa menambah artikel dengan mengklik tombol tambah artikel pada pojok kanan bawah, kemudian masukkan judul dan isi artikel (Notes : Semua Forum ataupun artikel yang sudah diupload akan tercatat di backend dan tidak ada cara menghapusnya melalui FrontEnd).
  8. Terakhir ada menu Logout, dimana kita bisa LogOut dari page dan kembali ke page Login.

G. Petunjuk instalasi dan cara menjalankan proyek di lingkungan lokal :
  1. FrontEnd :
     1.1. Frontend dibuat menggunakan HTML, CSS, dan JavaScript.
     1.2. Untuk menjalankan secara lokal, cukup clone repository dari GitHub.
     1.3. Buka folder proyek di VSCode.
     1.4. Jalankan file index.html menggunakan Live Server atau buka langsung di browser (Notes : Tidak diperlukan proses build atau instalasi tambahan untuk frontend).
2. Backend :
   2.1. Install Firebase CLI.
   2.2. Login ke Firebase (sekali saja).
   2.3. Inisialisasi Emulator dengan Firebase init :
      2.3.1. Pilih: Emulators
      2.3.2. Centang: Firestore
      2.3.3. Pilih port default atau sesuaikan
   2.4 Jalankan Emulator (Notes : Jika kamu tidak menggunakan Firebase Functions, maka backend kamu bersifat langsung dari frontend ke Firestore via Firebase SDK, artinya tidak perlu server backend sendiri).




