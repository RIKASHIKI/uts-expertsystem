import exp from "express"
const ex = exp()

ex.use(exp.json())
ex.use(exp.urlencoded({ extended: true }))

const port = 3000
const reset = "\x1b[0m"
const blue = "\x1b[34m"
const red = "\x1b[31m"
const abu = "\x1b[90m"

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

// FAKTA DAN HASIL FAKTA
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
// FUNGSI UNTUK MERESET ULANG FAKTA DATABASE
function resetDB() {
  for (let key in db) {
    db[key] = null
  }
}
// MENERIMA INPUT DARI FORM DAN MENGUPDATE DATABASE
ex.post("/input", async (req, res) => {
  const { genre, skill, cash } = req.body
  
  if (genre.includes('klasik')) db.A = true
  if (genre.includes('pop')) db.B = true
  if (genre.includes('jazz')) db.C = true
  if (genre.includes('rock')) db.D = true

  if (skill.includes('rendah')) db.E = true
  if (skill.includes('sedang')) db.F = true
  if (skill.includes('tinggi')) db.G = true

  if (cash > 1 && cash <= 500000 ) db.H = true
  if (cash > 500000 && cash <= 1000000) db.I = true
  if (cash > 1000000) db.J = true

  console.log('Data diterima:', req.body)
  loop()

  res.redirect('/end')
})
// IMPLEMENTASI FORWARD CHAINING
function loop() {
  const aturan = [
    {
      kondisi: () => db.A && db.G,
      result: () => {
        db.U = true
        console.info(`[R1] Karena Anda minat ${teks.A} dan ${teks.G}, ${teks.U}`)
      }
    },
    {
      kondisi: () => db.A && db.F,
      result: () => {
        db.T = true
        console.info(`[R2] Karena Anda minat ${teks.A} dan ${teks.F}, ${teks.T}`)
      }
    },
    {
      kondisi: () => db.A && db.E,
      result: () => {
        db.M = true
        console.info(`[R3] Karena Anda minat ${teks.A} dan ${teks.E}, ${teks.M}`)
      }
    },
    {
      kondisi: () => db.B && db.G,
      result: () => {
        db.K = true
        console.info(`[R4] Karena Anda minat ${teks.B} dan ${teks.G}, ${teks.K}`)
      }
    },
    {
      kondisi: () => db.B && db.F,
      result: () => {
        db.S = true
        console.info(`[R5] Karena Anda minat ${teks.B} dan ${teks.F}, ${teks.S}`)
      }
    },
    {
      kondisi: () => db.B && db.E,
      result: () => {
        db.N = true
        console.info(`[R6] Karena Anda minat ${teks.B} dan ${teks.E}, ${teks.N}`)
      }
    },
    {
      kondisi: () => db.C && db.G,
      result: () => {
        db.L = true
        console.info(`[R7] Karena Anda minat ${teks.C} dan ${teks.G}, ${teks.L}`)
      }
    },
    {
      kondisi: () => db.C && db.F,
      result: () => {
        db.O = true
        console.info(`[R8] Karena Anda minat ${teks.C} dan ${teks.F}, ${teks.O}`)
      }
    },
    {
      kondisi: () => db.C && db.E,
      result: () => {
        db.R = true
        console.info(`[R9] Karena Anda minat ${teks.C} dan ${teks.E}, ${teks.R}`)
      }
    },
    {
      kondisi: () => db.D && db.J,
      result: () => {
        db.K = true
        console.info(`[R10] Karena Anda minat ${teks.D} dan ${teks.J}, ${teks.K}`)
      }
    },
    {
      kondisi: () => db.D && db.I,
      result: () => {
        db.P = true
        console.info(`[R11] Karena Anda minat ${teks.D} dan ${teks.I}, ${teks.P}`)
      }
    },
    {
      kondisi: () => db.D && db.H,
      result: () => {
        db.S = true
        console.info(`[R12] Karena Anda minat ${teks.D} dan ${teks.H}, ${teks.S}`)
      }
    }
  ]

  // MENGEVALUASI KONDISI SETIAP ATURAN DAN MENERAPKAN HASILNYA
  const processedRules = new Set()
  let changed = true

  while (changed) {
    changed = false
    aturan.forEach((aturan, index) => {
      if (!processedRules.has(index) && aturan.kondisi()) {
        aturan.result()
        processedRules.add(index)
        changed = true
      }
    })
  }
}
// HALAMAN AWAL
ex.get("/",(req,res) => {
  res.send(`
  <head>
  <title>FORWARD CHAINING</title>
  ${css}
  </head>
  <body>
  <header>
  <h2>FORWARD CHAINING</h2>
  </header>
  <div class="start">
  <h4>pemilihan alat musik</h4>
  <p>berdasarkan minat ,keterampilan dan anggaran yang dimiliki</p>
  </div>
  <a href="/input" class="back">START</a>
  <div class="footer">
  <p>
      <a href="https://github.com/RIKASHIKI" class="nama">© by 310122023672 | Ahmad Thahar Al Azhari</a>
  </p>
  </div>
  </body>
  `)
})

// HALAMAN INPUT
ex.get("/input", (req, res) => {
  res.send(`
  <head>
  <title>FORM INPUT</title>
  ${css}
  </head>
  <body>
    <header>
        <h2>INPUT DATA</h2>
    </header>
    <form action="/input" method="post">
        <div class="form-group">
            <label for="genre">Apakah anda berminat musik dengan genre?</label>
            <input type="text" id="genre" name="genre" placeholder="contoh: klasik / pop / jazz / rock">
        </div>
        <div class="form-group">
            <label for="skill">Apakah keterampilan musik anda?</label>
            <input type="text" id="skill" name="skill" placeholder="contoh: rendah / sedang / tinggi">
        </div>
        <div class="form-group">
            <label for="cash">Berapa anggaran yang anda miliki?</label>
            <input type="text" id="cash" name="cash" placeholder="contoh: 500000">
        </div>
        <input type="submit" value="NEXT">
    </form>
    <div class="footer">
  <p>
      <a href="https://github.com/RIKASHIKI" class="nama">© by 310122023672 | Ahmad Thahar Al Azhari</a>
  </p>
  </div>
</body>
  `)
})
// MERESET ULANG DATABASE KEMUDIAN HALAMAN DITERUSKAN KE HALAMAN INPUT
ex.get('/reset', (req, res) => {
  resetDB()
  console.log(`\n${abu}_______________________ RESET _______________________${reset}\n`)
  res.redirect('/input')
})
// HALAMAN AKHIR
ex.get('/end', (req, res) => {
  let dbStatus = `\n\nDATABASE:\n${Object.keys(db).filter(key => db[key] !== null).map(key => `[${key}] ${db[key]}`).join("\n")}`
  let hasil = `\n${
    db.K ? teks.K :
    db.L ? teks.L :
    db.M ? teks.M :
    db.N ? teks.N :
    db.O ? teks.O :
    db.P ? teks.P :
    db.Q ? teks.Q :
    db.R ? teks.R :
    db.S ? teks.S :
    db.T ? teks.T :
    db.U ? teks.U : 'Alat musik yang disarankan tidak ada'
  }`

// TAMPILAN TERMINAL
console.log(`\n${red}_______________________ FORWARD CHAINING _______________________${reset}\n`)
console.log(
    `\n\n${blue}DATABASE:\n${Object.keys(db).filter(key => db[key] !== null).map(key => `[${key}] ${db[key]}`).join("\n")}${reset}`
  )
  console.log(
    `\n${blue} ${
    db.K ? teks.K :
    db.L ? teks.L :
    db.M ? teks.M :
    db.N ? teks.N :
    db.O ? teks.O :
    db.P ? teks.P :
    db.Q ? teks.Q :
    db.R ? teks.R :
    db.S ? teks.S :
    db.T ? teks.T :
    db.U ? teks.U : 'Alat musik yang disarankan tidak ada'} ${reset}`
    )

  res.send(`
  <head>
   <title>OUTPUT</title>
   ${css}
  </head>
  <body>
   <header>
    <h2>OUTPUT DATA</h2>
   </header>
    <pre>${dbStatus}\n
    ${hasil}
    </pre>
    <a href="/reset" class="back">BACK</a>
    <div class="footer">
  <p>
      <a href="https://github.com/RIKASHIKI" class="nama">© by 310122023672 | Ahmad Thahar Al Azhari</a>
  </p>
  </div>
  </body>
  `)
})

ex.listen(port, () => {
  console.log(`${abu}ahmad thahar al azhari 310122023672${reset} \n\nServer start ${red} http://localhost:${port}${reset}`)
})