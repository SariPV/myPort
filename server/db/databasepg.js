const {Client} = require('pg')

// const Pool = require('pg').Pool
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'myPortfolio',
  password: 'root',
  port: 5432,
});

client.connect();
client.query(`Select * from users`,(err,res)=>{
    if (!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end
})