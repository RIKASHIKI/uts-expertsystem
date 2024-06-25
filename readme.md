<h2 align=center>FORWARD CHAINING</h2>
aplikasi pemilihan musik berdasarkan genre, skill dan uang yang dimiliki pengguna

#### module yang digunakan
- mysql
- express
- prompt-sync

### konten
1. [`configuration`](#configuration)
2. [`function`](#function)
3. [`index`](#index)
4. [`mysql`](#mysql)
##

<h2 align=center>INSTALASI</h2>
pastikan anda sudah menginstall node.js dan npm di sistem anda

1. **install dependensi**
```bash
npm i
```
2. **jalankan server**
```bash
node ./index/main.js
```
3. **akses aplikasi di browser**
```
buka http://localhost:3000
```







<h2 align=center>STRUKTUR PROYEK</h2>

### configuration
File config.js berisi konfigurasi dan pengaturan yang digunakan dalam aplikasi pemilihan alat musik berbasis web. Konfigurasi untuk pengaturan warna konsol, informasi koneksi basis data, objek database untuk menyimpan fakta yang diterima, teks yang digunakan untuk menampilkan fakta, serta CSS untuk memperindah tampilan web.

[`config`](./config/readme.md)


### function
file function.js berisi dua fungsi utama yang digunakan untuk mereset ulang fakta dan mengimplementasikan forward chaining berdasarkan aturan yang ditentukan

[`function.js`](./function/readme.md)


### index
file main.js menjadi file utama untuk aplikasi web, menggunakan express untuk menjalankan web

[`main.js`](./index/readme.md)


### mysql
file sql.js berisi fungsi untuk berinteraksi dengan database mysql yang digunakan untuk membuat database, simpan database, dan hapus database

[`sql.js`](./mysql/readme.md)