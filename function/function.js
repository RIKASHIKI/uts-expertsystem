import { db,teks } from "../config/config.js"

// FUNGSI UNTUK MERESET ULANG DATABASE
function resetDB() {
    for (let key in db) {
      db[key] = null
    }
  }
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

export {resetDB,loop}