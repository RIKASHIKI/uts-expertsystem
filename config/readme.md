<h2 align=center>CONFIG</h2>

kembali ke index [`back`](../readme.md)
## Konten 

1. [Port](#port)
2. [Reset Warna](#reset-warna)
3. [Warna Biru](#warna-biru)
4. [Warna Merah](#warna-merah)
5. [Warna Abu-abu](#warna-abu-abu)
6. [Konfigurasi Koneksi Database](#konfigurasi-koneksi-database)
7. [Database untuk Menyimpan Fakta](#database-untuk-menyimpan-fakta)
8. [Teks untuk Fakta](#teks-untuk-fakta)
9. [CSS untuk Tampilan](#css-untuk-tampilan)
##

### Port
Pengaturan port yang digunakan
[`code`](./config.js#L2)
```javascript
const port = 3000;
```

### Warna Consol
Kode untuk mereset warna pada konsol 
[`code`](./config.js#L4)
```javascript
const reset = "\x1b[0m";
```

Kode warna biru untuk teks pada konsol
[`code`](./config.js#L6)
```javascript
const blue = "\x1b[34m";
```

Kode warna merah untuk teks pada konsol
[`code`](./config.js#L8)
```javascript
const red = "\x1b[31m";
```

Kode warna abu-abu untuk teks pada konsol
[`code`](./config.js#L10)
```javascript
const abu = "\x1b[90m";
```

### Konfigurasi Koneksi Database
Konfigurasi koneksi untuk database MySQL
[`code`](./config.js#L13)
```javascript
const configsql = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'datamusic',
};
```
### database untuk menyimpan fakta
[`code`](./config.js#L20)
```javascript
let db = {
    A: null,
    B: null,
    C: null,
    D: null,
    E: null,
    F: null,
    G: null,
    H: null,
    I: null,
    J: null,
    K: null,
    L: null,
    M: null,
    N: null,
    O: null,
    P: null,
    Q: null,
    R: null,
    S: null,
    T: null,
    U: null,
  }
```

### teks untuk fakta
[`code`](./config.js#L44)
```javascript
const teks = {
    A: 'musik klasik',
    B: 'musik pop',
    C: 'musik jazz',
    D: 'musik rock',
    E: 'keterampilan rendah',
    F: 'keterampilan sedang',
    G: 'keterampilan tinggi',
    H: 'anggaran kecil',
    I: 'anggaran sedang',
    J: 'anggaran besar',
    K: 'alat musik yang disarankan adalah drum set',
    L: 'alat musik yang disarankan adalah saksofon',
    M: 'alat musik yang disarankan adalah flute',
    N: 'alat musik yang disarankan adalah keyboard',
    O: 'alat musik yang disarankan adalah trumpet',
    P: 'alat musik yang disarankan adalah bass guitar',
    Q: 'alat musik yang disarankan adalah cello',
    R: 'alat musik yang disarankan adalah clarinet',
    S: 'alat musik yang disarankan adalah gitar',
    T: 'alat musik yang disarankan adalah biola',
    U: 'alat musik yang disarankan adalah piano',
};

```

### css untuk tampilan
[`code`](./config.js#L68)
```javascript
 const css = `
<style>
        header {
            color: black;
            background-color: greenyellow;
            width: 52.5%;
            text-align: center;
            margin: 0.5em auto;
            padding: 0.5em 0;
            border-radius: 3px;
        }

        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #2b3e50;
            margin: 0;
            padding: 0;
            position: relative;
            min-height: 100vh;
        }

        form {
            width: 50%;
            margin: 2em auto;
            background-color: #34495e;
            border: 1px solid #ccc;
            padding: 1em;
            border-radius: 5px;
        }

        .form-group {
            margin-bottom: 1em;
            text-align: left;
        }

        label {
            color: white;
            font-weight: bold;
            margin-bottom: 0.5em;
            display: block;
        }

        input[type="text"] {
            width: 100%;
            padding: 0.5em;
            border: none;
            background-color: darkgray;
            color: white;
            border-radius: 3px;
            box-sizing: border-box;
        }

        input[type="text"]:hover {
            border: none;
        }

        input[type="submit"] {
            font-size: 1em;
            color: black;
            border: none;
            cursor: pointer;
            border-radius: 3px;
            padding: 0.5em 0.8em;
            background-color: greenyellow;
            display: block;
            margin: 1em auto;
        }

        input[type="submit"]:hover {
            color: white;
            background-color: green;
        }

        a[class="back"] {
            text-decoration: none;
            color: black;
            background-color: greenyellow;
            padding: 0.5em 0.7em;
            border-radius: 3px;
            display: inline-block;
        }

        a[class="back"]:hover {
            color: white;
            background-color: green;
        }

        pre {
            color: white;
            text-align: left;
            white-space: pre-wrap;
            margin: 1em auto;
            width: 50%;
            background-color: #34495e;
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 1em;
        }

        .footer {
            position: absolute;
            bottom: 10px;
            right: 10px;
            text-align: right;
        }

        .footer p {
            color: grey;
            font-style: oblique;
        }

        .footer a[class="nama"] {
            color: lightgray;
            text-decoration: none;
        }

        .start {
          color: white;
          text-align: center-flex;
          white-space: pre-wrap;
          margin: 1em auto;
          width: 50%;
          background-color: #34495e;
          border: 1px solid #ccc;
          border-radius: 2px;
          padding: 1em;
        }
    </style>
`
```