<template>
    <div class="flex flex-col items-center">
      <h2 class="text-3xl font-bold my-8">Показ пользователей</h2>
      <!-- Form for user input -->
      <form @submit.prevent="save" class="w-full max-w-md">
        <!-- Input fields for user information -->
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Имя
          </label>
          <input v-model="employee.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Employee name" />
          <span>Введенное имя: {{ employee.name }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="address">
            Адресс
          </label>
          <input v-model="employee.address"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Employee Address" />
          <span>Введенный адрес: {{ employee.address }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="time">
            Время
          </label>
          <input v-model="employee.phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Mobile" />
          <span>Введенный номер телефона: {{ employee.phone }}</span>
        </div>
        <!-- Save button for user input -->
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Сохранить
        </button>
      </form>
  
      <!-- Table for displaying employee information -->
      <h2 class="text-3xl font-bold my-8">Employee View</h2>
      <table class="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th class="border px-4 py-2">Номер</th>
            <th class="border px-4 py-2">Имя</th>
            <th class="border px-4 py-2">Адресс</th>
            <th class="border px-4 py-2">Время</th>
            <th class="border px-4 py-2">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in result" :key="employee._id">
            <td class="border px-4 py-2">{{ employee._id }}</td>
            <td class="border px-4 py-2">{{ employee.name }}</td>
            <td class="border px-4 py-2">{{ employee.address }}</td>
            <td class="border px-4 py-2">{{ employee.phone }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Section for displaying user input -->
     
      <div v-if="latestEmployee.value && latestEmployee.value._id" class="mt-8">
  <h2 class="text-3xl font-bold mb-4">Последний сохраненный пользователь</h2>
  <div class="bg-gray-100 p-4 rounded-lg">
    <p class="font-bold">Имя: </p>
    <p>{{ latestEmployee.value?.name }}</p>
    <p class="font-bold">Адресс: </p>
    <p>{{ latestEmployee.value?.address }}</p>
    <p class="font-bold">Время: </p>
    <p>{{ latestEmployee.value?.phone }}</p>
  </div>
</div>

</div>

</template>  
  
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Employee {
    _id: string;
    name: string;
    address: string;
    phone: string;
}

interface Employee {
    _id: string;
    name: string;
    address: string;
    phone: string;
}

interface UserInput {
    name: string;
    address: string;
    phone: string;
}

const result = ref([] as Employee[]);
const employee = ref<Employee>({
    _id: '',
    name: '',
    address: '',
    phone: '',
});

const showInput = ref(false);
const userInput = ref<UserInput>({
    name: '',
    address: '',
    phone: '',
});

const employeeLoad = () => {
    const storedData = localStorage.getItem('employees');
    if (storedData) {
        result.value = JSON.parse(storedData);
    } else {
        axios.get('http://localhost:3000/user/getAll')
            .then(({ data }) => {
                console.log(data);
                result.value = data.data;
                localStorage.setItem('employees', JSON.stringify(data.data));
            })
            .catch((error) => {
                console.error(error);
                const errorMessage = 'Ошибка при загрузке данных с сервера. Загрузка данных из локального хранилища.';
                alert(errorMessage);
                const storedData = localStorage.getItem('employees');
                if (storedData) {
                    result.value = JSON.parse(storedData);
                } else {
                    alert('Данные отсутствуют.');
                }
            });
    }
};

onMounted(() => {
    employeeLoad();
});

const save = () => {
    if (employee.value._id === '') {
        saveData();
        latestEmployee.value = employee.value;
    } else {
        updateData();
    }
};
const latestEmployee = ref<Employee>({
    _id: '',
    name: '',
    address: '',
    phone: '',
}) as unknown as { value: Employee };

const saveData = () => {
    axios.post('http://localhost:3000/user/create', employee.value)
        .then(({ data }) => {
            console.log(employee.value);
            result.value.push(data.data);
            localStorage.setItem('employees', JSON.stringify(result.value));
            employee.value = {
                _id: '',
                name: '',
                address: '',
                phone: '',
            };

            const { name, address, phone } = employee.value;
            userInput.value = { name, address, phone };
            showInput.value = true; // показать элемент с данными пользователя
            result.value = [...result.value, data.data]; // добавить нового пользователя в список сотрудниками
            localStorage.setItem('employees', JSON.stringify(result.value)); // сохранить обновленный список в локальном хранилище
        })
        .catch((error) => {
            console.error(error);
        });
};


const edit = (selectedEmployee: Employee) => {
    employee.value = { ...selectedEmployee };
};

const updateData = () => {
    const editRecords = `http://localhost:3000/user/update/${employee.value._id}`;
    axios.patch(editRecords, employee.value)
        .then(({ data }) => {
            employee.value = {
                _id: '',
                name: '',
                address: '',
                phone: '',
            };
            alert('updated');
            employeeLoad();
            localStorage.setItem('employees', JSON.stringify(result.value));
        })
        .catch((error) => {
            console.error(error);
            const errorMessage = 'Ошибка обновления данных на сервере. Данные не обновляются.';
            alert(errorMessage);
        });
};
</script>
