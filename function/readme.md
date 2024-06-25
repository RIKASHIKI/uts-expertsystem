<h2 align=center>FUNCTION</h2>

kembali ke index [`back`](../readme.md)
## konten
1. [`resetDB`](#resetdb)
2. [`loop`](#loop)
##

### resetDB
resetdb digunakan untuk mereset ulang semua nilai fakta menjadi null
[`code`](./function.js#L4)
```javascript
function resetDB() {
    for (let key in db) {
        db[key] = null;
    }
}
```

### loop
loop mengimplementasikan forward chaining dengan mengevaluasi kondisi dari aturan yang ditentukan dan menerapkan hasilnya
[`code`](./function.js#L10)
```javascript
function loop() {
    const aturan = [
        {
            kondisi: () => db.A && db.G,
            result: () => {
                db.U = true;
                console.info(`[R1] Karena Anda minat ${teks.A} dan ${teks.G}, ${teks.U}`);
            }
        },
        // aturan lainnya...
    ];

    // MENGEVALUASI KONDISI SETIAP ATURAN DAN MENERAPKAN HASILNYA
    const processedRules = new Set();
    let changed = true;

    while (changed) {
        changed = false;
        aturan.forEach((aturan, index) => {
            if (!processedRules.has(index) && aturan.kondisi()) {
                aturan.result();
                processedRules.add(index);
                changed = true;
            }
        });
    }
}

```