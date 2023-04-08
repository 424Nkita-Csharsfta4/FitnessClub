import type  { Request, Response } from 'express';
import cors from 'cors';
import mongoose, { Document } from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;
const mongoUrl = 'mongodb://localhost:27017/fitness';

app.use(cors()); // подключаем cors для разрешения запросов из других источников
app.use(bodyParser.json()); // парсим тело запроса в JSON

interface User extends Document { // создаем интерфейс для пользователя
  name: string;
  email: string;
}

const User = mongoose.model<User>( // создаем модель пользователя
  'User',
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
  })
);

app.get('/users', async (req: Request, res: Response) => { // обработчик GET запроса на /users
  const users = await User.find(); // получаем всех пользователей из базы данных
  res.json(users); // отправляем ответ в виде JSON с массивом пользователей
});

app.post('/users', async (req: Request, res: Response) => { // обработчик POST запроса на /users
  const { name, email } = req.body; // получаем данные из тела запроса
  const user = new User({ name, email }); // создаем нового пользователя
  await user.save(); // сохраняем пользователя в базу данных
  res.json(user); // отправляем ответ в виде JSON с сохраненным пользователем
});

app.put('/users/:id', async (req: Request, res: Response) => { // обработчик PUT запроса на /users/:id
  const { id } = req.params; // получаем идентификатор пользователя из параметров запроса
  const { name, email } = req.body; // получаем данные из тела запроса
  const user = await User.findByIdAndUpdate(id, { name, email }, { new: true }); // обновляем пользователя в базе данных
  res.json(user); // отправляем ответ в виде JSON с обновленным пользователем
});

app.delete('/users/:id', async (req: Request, res: Response) => { // обработчик DELETE запроса на /users/:id
  const { id } = req.params; // получаем идентификатор пользователя из параметров запроса
  const user = await User.findByIdAndDelete(id); // удаляем пользователя из базы данных
  res.json(user); // отправляем ответ в виде JSON с удаленным пользователем
});

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true } as Parameters<typeof mongoose.connect>[1]).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});