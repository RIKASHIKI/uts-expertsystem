// PORT
const port = 3000
// RESET WARNA
const reset = "\x1b[0m"
// WARNA BIRU
const blue = "\x1b[34m"
// WARNAN MERAH
const red = "\x1b[31m"
// WARNA ABU-ABU
const abu = "\x1b[90m"

// CONFIGURASI UNTUK SQL
const configsql = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'datamusic',
}
// DATABASE UNTUK MENYIMPAN FAKTA YANG DITERIMA
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
// TEKS UNTUK FAKTA
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
  }
// CSS UNTUK TAMPILAN
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

export {teks,css,port,reset,blue,red,abu,db,configsql}