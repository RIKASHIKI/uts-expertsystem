<h2 align=center>MYSQL</h2>

kembali ke index [`BACK`](../readme.md)

## konten
1. [`config`](#config)
2. [`connectdb`](#connectdb)
3. [`savetodatabase`](#savetodatabase)
4. [`deletedatabase`](#deletedatabase)
##
### config
konfigurasi koneksi mysql
```javascript
const database = sql.createConnection({
    host: configsql.host,
    user: configsql.user,
    password: configsql.password
});
```

### connectdb
Koneksi ke MySQL
```javascript
function connectdb() {
    database.connect((err) => {
        if (err) {
            console.error('error connecting to MySQL database: ' + err.stack);
            return;
        }
        console.log('connected to mysql initial connection...');
        // Membuat dan memeriksa keberadaan database
        database.query(`CREATE DATABASE IF NOT EXISTS ${configsql.database}`, (err) => {
            if (err) {
                console.error('error creating database: ', err);
                return;
            }
            console.log('database created or exists');

            // Memilih database setelah berhasil terhubung
            database.query(`USE ${configsql.database}`, (err) => {
                if (err) {
                    console.error('error selecting database: ', err);
                    return;
                }
                console.log(`Using database ${configsql.database}`);

                // Koneksi kedua untuk bekerja dengan tabel dan data
                const database = sql.createConnection({
                    host: configsql.host,
                    user: configsql.user,
                    password: configsql.password,
                    database: configsql.database
                });

                database.connect((err) => {
                    if (err) {
                        console.error('error connecting to mysql database: ', err.stack);
                        return;
                    }
                    console.log('database connected');
                    console.log('connecting to mysql database as id ' + database.threadId);

                    // Query untuk membuat tabel jika belum ada
                    const createTableQuery = `
                        CREATE TABLE IF NOT EXISTS recommendations (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            genre VARCHAR(255) NOT NULL,
                            skill VARCHAR(255) NOT NULL,
                            cash INT NOT NULL,
                            dbstatus TEXT,
                            hasil TEXT
                        )
                    `;
                    // membuat tabel
                    database.query(createTableQuery, (err,results) => {
                        if (err) {
                            console.error('error creating table', err);
                        } else {
                            console.log('table created or exists',results);
                        }
                    });
                });
            });
        });
    });
}
```

### savetodatabase
Fungsi untuk menyimpan data ke dalam database MySQL
```javascript
function savetodatabase(data, dbstatus, hasil) {
    const { genre, skill, cash } = data; // Mengganti skill menjadi data sesuai kolom yang ada
    const quary = 'INSERT INTO recommendations (genre, skill, cash, dbstatus, hasil) VALUES (?, ?, ?, ?, ?)'; // memasukan fakta ke recommendations
    const values = [genre || '', skill || '', cash || 0, dbstatus || '', hasil || ''];

    database.query(quary, values, (err, result) => {
        if (err) {
            console.error('Error saving to database:', err);
        } else {
            console.log('Data successfully saved to database.', result);
        }
    });
}
```

### deletedatabase
menghapus database berdasarkan id di database
```javascript
function deleteDatabase(id){
    const quary = 'DELETE FROM recommendations WHERE id = ?'
    database.query(quary,[id],(err, result) => {
        if (err) {
            console.log('Error deleting database:', err);
    } else {
        console.log(`deleted ${result.affectedRows} row(s) from database`)
    }
})
}
```
