Базата от данни е MongoDb

Настройване на MongoDB
Проектът използва MongoDB като база данни. Трябва да имате MongoDB акаунт и да създадете база данни.

За MongoDB Cloud (MongoDB Atlas):

Създайте акаунт на MongoDB Atlas.

Създайте нов проект и нова база данни.

Добавете IP whitelist (за да позволите достъп от вашето IP, можете да добавите "0.0.0.0/0", за да разрешите достъп от всяко IP).

Създайте потребител с потребителско име и парола за достъп до базата данни.

Вземете MongoDB URI за връзка с базата данни (нещо като mongodb+srv://<user>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority).

Създайте .env файл в backend папката и запишете това:
MONGO_URI=mongodb+srv://user:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
PORT=5005

като user и password трябва да са вашите стойности, паролата може да се актуализира като отидете в security таба на Mongo,след това в database access и натиснете edit.

http request-ите са с postman collection,който трябва да импортнете в postman сайта. Направрте си акаунт ако нямате, създайте си нов workspace(горе в вляво) и натиснете import бутона и сложете json файлта Cat requests. 
Инсталирайте си npm, чрез тази команда в терминала
-npm install
За да тръгне сървъра напишете в терминала на  backend папката
-npm start
Чрез postman extensiona може да тествате завките
