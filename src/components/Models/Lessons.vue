<template>
    <div class="flex flex-col items-center">
        <h2 class="text-3xl font-bold my-8">Показ пользователей</h2>
        <form @submit.prevent="save" class="w-full max-w-md">
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
            <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Сохранить
            </button>
        </form>
        <div v-if="showInput">
            <h2 class="text-3xl font-bold my-8">User Input</h2>
            <p>Имя: {{ userInput.name }}</p>
            <p>Адрес: {{ userInput.address }}</p>
            <p>Телефон: {{ userInput.phone }}</p>
        </div>
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

interface UserInput {
    name: string;
    address: string;
    phone: string;
}

const result = ref<Employee[]>([]);
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
    const page = 'http://localhost:8000/user/getAll';
    axios.get(page).then(({ data }) => {
        console.log(data);
        result.value = data.data;
    });
};

onMounted(() => {
    employeeLoad();
});

const save = () => {
    if (employee.value._id === '') {
        saveData();
    } else {
        updateData();
    }
};

const saveData = () => {
    axios.post('http://localhost:8000/user/create', employee.value).then(({ data }) => {
        console.log(employee.value); // выводим данные, введенные пользователем, на консоль
        employee.value = {
            _id: '',
            name: '',
            address: '',
            phone: '',
        };
        alert('saved');
        employeeLoad();
    });
};


const edit = (selectedEmployee: Employee) => {
    employee.value = { ...selectedEmployee };
};

const updateData = () => {
    const editRecords = `http://localhost:8000/user/update/${employee.value._id}`;
    axios.patch(editRecords, employee.value).then(({ data }) => {
        employee.value = {
            _id: '',
            name: '',
            address: '',
            phone: '',
        };
        alert('Updated!!!');
        employeeLoad();
    });
};

const remove = (selectedEmployee: Employee) => {
    const url = `http://localhost:8000/user/delete/${selectedEmployee._id}`;
    axios.delete(url);
    alert('Deleted');
    employeeLoad();
};
</script>

