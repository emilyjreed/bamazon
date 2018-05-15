# bamazon

bamazon is an Amazon-like storefront that uses the mysql database. The app takes in orders from customers and depletes stock from the store's inventory updating the database as it goes. Customers cannot order more than what is in stock, and will be shown a grand total of their purchase.

## Installation
**NOTE**: requires a running mysql server
```
git clone https://github.com/emilyjreed/bamazon.git
cd bamazon/
npm install
```
* You should make a .env file that has your database user/password assigned to the DBUSER and DBPW environment variables. Example:
```
export DBUSER=root
export DBPW=yourpassword
```
* Setup database:
```
source .env
make reset_db
```
## Using the program
![giphy_1](docs/giphy_1.gif)
![giphy_2](docs/giphy_2.gif)
![giphy_3](docs/giphy_3.gif)
