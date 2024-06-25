import exp from "express"
import sql from "mysql"
import {resetDB,loop} from "../function/function.js"
import {connectdb,savetodatabase,database,deleteDatabase} from "../mysql/sql.js"
import {teks,css,port,reset,red,blue,abu,db} from "../config/config.js"
// MENGHUBUNGKAN KE DATABASE MYSQL
connectdb()
// INISIALISASI APLIKASI EXPRESS
const ex = exp()
// MIDDLEWARE UNTUK JSON DAN FORM-UNLENCODED
ex.use(exp.json())
ex.use(exp.urlencoded({ extended: true }))
// MIDDLEWARE UNTUK LOGGING INFORMASI SETIAP REQUEST
ex.use((req,res,next)=>{
  console.info(`request: ${req.method} ${req.url}`)
  next()
})
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
  <a href="/database" class="back">DATABASE</a>
  <div class="footer">
  <p>
    <a href="https://github.com/RIKASHIKI" class="nama">© by 310122023672 | Ahmad Thahar Al Azhari</a>
  </p>
  </div>
  </body>
  `)
})
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
  //savetodatabase(req.body, JSON.stringify(db),'sementara')
  const qs = `genre=${genre}&skill=${skill}&cash=${cash}`
  loop()
  res.redirect(`/end?${qs}`)
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
    <a href="/database" class="back">DATABASE</a>
    <div class="footer">
  <p>
      <a href="https://github.com/RIKASHIKI" class="nama">© by 310122023672 | Ahmad Thahar Al Azhari</a>
  </p>
  </div>
  </body>
  `)
  const {genre,skill,cash} = req.query
  savetodatabase({genre,skill,cash},dbStatus,hasil)
})
ex.get('/database', (req, res) => {
  // Tambahkan kode untuk mengambil data dari MySQL
  database.query('SELECT * FROM recommendations', (err, results) => {
    if (err) {
      console.error('Error fetching data from database:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(`
        <head>
          <title>DATABASE</title>
          ${css}
        </head>
        <body>
          <header>
            <h2>DATA FROM DATABASE</h2>
          </header>
          <pre>${JSON.stringify(results, null, 2)}</pre>
          <a href="/reset" class="back">BACK</a>
          <a href="/" class="back">HOME</a>
          <a href="/deleteid" class="back">DELETE</a>
          <div class="footer">
            <p>
              <a href="https://github.com/RIKASHIKI" class="nama">© by 310122023672 | Ahmad Thahar Al Azhari</a>
            </p>
          </div>
        </body>
      `)
  }}
  )
  })
// halaman untuk menghapus database
ex.post('/deleteid',(req,res)=>{
  const {id} = req.body
  deleteDatabase(parseInt(id))
  res.redirect('/database')
})
ex.get('/deleteid',(req,res)=>{
  res.send(`
  <head>
  <title>DELETE DATA</title>
  ${css}
  </head>
  <body>
  <header>
  <h2>DELETE DATA</h2>
  </header>
    <form action="/deleteid" method="post">
        <label for="id">Enter ID to delete:</label>
        <input type="number" id="id" name="id" required>
        <input type="submit" value="Delete">
    </form>
</body>
  `)
})



ex.listen(port, () => {
  console.log(`${abu}ahmad thahar al azhari 310122023672${reset} \n\nServer start ${red} http://localhost:${port}${reset}`)
})