const os = require('node:os');
const express = require('express')
const morgan = require('morgan')
require('dotenv').config();
const PORT = process.env.PORT || 5000

// os file
const networkInterfaces = os.networkInterfaces();


const app = express()

// middleware for express
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json()
]
app.use(middleware)

// ejs file
app.set('view engine', 'ejs');

app.set('views', 'views'); // Use 'views' instead of 'view'

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello, EJS!' });
    
})
app.get('/name', (req, res) => {

    res.render('name', { MYname: 'Zobaidul', email: 'email@.com', HostName: os.networkInterfaces()  });  
    console.log(os.networkInterfaces()) 
    
})


app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Server is running on port ${PORT}`)
    }
})


 // Iterate through the network interfaces
for (const interfaceName in networkInterfaces) {
  console.log(`Interface: ${interfaceName}`);
  const interfaceInfo = networkInterfaces[interfaceName];

  // Iterate through the addresses for the current interface
  interfaceInfo.forEach((address, index) => {
    console.log(`  Address #${index + 1}:`);
    console.log(`    Family: ${address.family}`);
    console.log(`    Address: ${address.address}`);
    console.log(`    Netmask: ${address.netmask}`);
    console.log(`    Mac Address: ${address.mac || 'N/A'}`);
    console.log(`  cidr: : ${address.cidr} `)
  });

  console.log(os.platform());
  console.log(os.uptime())
}
