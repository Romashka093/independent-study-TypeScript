/* eslint-disable @typescript-eslint/no-unused-vars */
// // primitives
// // 01
// const name: string = 'Генератор защитного поля';
// let price: number = 1000;
// let message: string = `'Выбран ${name}, цена за штуку ${price} кредитов'`;
// console.log(message);
// price = 2000;
// message = `'Выбран ${name}, цена за штуку ${price} кредитов'`;
// console.log(message);

// // 02
// const total: number = 100;
// let ordered: number = 50;
// if (ordered > total) {
//   console.log('На складе недостаточно товаров!');
// }
// if (ordered <= total) {
//   console.log('Заказ оформлен, с вами свяжется менеджер.');
// }
// ordered = 20;
// if (ordered > total) {
//   console.log('На складе недостаточно товаров!');
// }
// if (ordered <= total) {
//   console.log('Заказ оформлен, с вами свяжется менеджер.');
// }
// ordered = 80;
// if (ordered > total) {
//   console.log('На складе недостаточно товаров!');
// }
// if (ordered <= total) {
//   console.log('Заказ оформлен, с вами свяжется менеджер.');
// }
// ordered = 130;
// if (ordered > total) {
//   console.log('На складе недостаточно товаров!');
// }
// if (ordered <= total) {
//   console.log('Заказ оформлен, с вами свяжется менеджер.');
// }

// // 03
// const ADMIN_PASSWORD: string = 'jqueryismyjam';
// let message2: any;
// const inputValue: string | null = prompt('Enter admin password: ');
// if (inputValue === null) {
//   message2 = alert('Отменено пользователем!');
// } else {
//   inputValue === ADMIN_PASSWORD
//     ? (message2 = alert('Добро пожаловать!'))
//     : (message2 = alert('Доступ запрещен, неверный пароль!'));
// }

// // 04
// const credits: number = 23580;
// const pricePerDroid: number = 3000;
// let totalPrice: number;
// let leftCredits: number;
// const userValue: number = Number(prompt('Какое количество дроидов Вы хочет купить?'));
// if (userValue === 0) {
//   alert('Отменено пользователем!');
//   console.log(alert('Отменено пользователем!'));
// }
// totalPrice = userValue * pricePerDroid;
// if (totalPrice > credits) {
//   alert('Недостаточно средств на счету!');
//   console.log('Недостаточно средств на счету!');
// }
// leftCredits = credits - totalPrice;
// if (totalPrice < credits) {
//   alert(
//     `Вы купили ${userValue} дроидов, на счету осталось ${leftCredits} кредитов.`,
//   );
//   console.log(
//     `Вы купили ${userValue} дроидов, на счету осталось ${leftCredits} кредитов.`,
//   );
// } else {
//   alert('Попробуйте еще раз!');
//   console.log('Попробуйте еще раз!');
// }

// // 05
// type Country = 'Китай' | 'Чили' | 'Австралия' | 'Индия' | 'Ямайка';
// const countryChina: Country = 'Китай';
// const countryChile: Country = 'Чили';
// const countryAustralia: Country = 'Австралия';
// const countryIndia: Country = 'Индия';
// const countryJamaica: Country = 'Ямайка';
// let cost;
// let userCountry: string | null = prompt('Укажите страну доставки:');
// userCountry === null ? (alert('Вы не указали страну доставки, попробуйте еще раз!')) : (userCountry = userCountry.toLowerCase())
// console.log('user country: ', userCountry);
// switch (userCountry) {
//   case countryChina.toLowerCase():
//     cost = 100;
//     alert(`Доставка в ${countryChina} будет стоить ${cost} кредитов`);
//     console.log(`Доставка в ${countryChina} будет стоить ${cost} кредитов`);
//     break;
//   case countryChile.toLowerCase():
//     cost = 250;
//     alert(`Доставка в ${countryChile} будет стоить ${cost} кредитов`);
//     console.log(`Доставка в ${countryChile} будет стоить ${cost} кредитов`);
//     break;
//   case countryAustralia.toLowerCase():
//     cost = 170;
//     alert(`Доставка в ${countryAustralia} будет стоить ${cost} кредитов`);
//     console.log(`Доставка в ${countryAustralia} будет стоить ${cost} кредитов`);
//     break;
//   case countryIndia.toLowerCase():
//     cost = 80;
//     alert(`Доставка в ${countryIndia} будет стоить ${cost} кредитов`);
//     console.log(`Доставка в ${countryIndia} будет стоить ${cost} кредитов`);
//     break;
//   case countryJamaica.toLowerCase():
//     cost = 120;
//     alert(`Доставка в ${countryJamaica} будет стоить ${cost} кредитов`);
//     console.log(`Доставка в ${countryJamaica} будет стоить ${cost} кредитов`);
//     break;
//   default:
//     alert('В вашей стране доставка не доступна.');
//     console.log('В вашей стране доставка не доступна.');
// }

// // 06
// type Input = string | null;
// let inputValue: Input;
// let total: number = 0;
// do {
//   inputValue = prompt('Пожалуйста, введите число:');
//   console.log('inputValue: ', inputValue);
//   if (Number.isNaN(Number(inputValue))) {
//     alert('Было введено не число, попробуйте еще раз!');
//   } else {
//     total += Number(inputValue);
//     console.log('total: ', total);
//   }
// } while (inputValue !== null && inputValue !== '');
// alert(`Общая сумма чисел равна ${total}`);

// // arrays
// // 01
// type Arguments = readonly (number | string)[];
// const logItems = function(array: Arguments) {
//     for (let index = 0; index < array.length; index++) {
//       const element = array[index];
//       console.log(`${index + 1} -`, element);
//     }
//   };
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// // 02
// const calculateEngravingPrice = function(message: string, pricePerWord: number) {
//     return message.split(' ').length * pricePerWord;
//   };
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   );
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); 
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); 
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); 

// // 03
// const findLongestWord = function(string: string) {
//     let strArr: string[] = string.split(' ');
//     let longestWord: string = strArr[0];
//     for (let index = 0; index < strArr.length; index++) {
//       if (strArr[index].length > longestWord.length) {
//         longestWord = strArr[index];
//       }
//     }
//     return longestWord;
//   };
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
//   console.log(findLongestWord('Google do a roll')); // 'Google'
//   console.log(findLongestWord('May the force be with you')); // 'force'

// // 04
// const formatString = function(string: string) {
//     let strArr: string = string.slice(0, 40);
//     if (strArr.length === 40) {
//       return strArr + '...';
//     }
//     if (strArr.length !== 40) {
//       return strArr;
//     }
//   };
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   console.log(formatString('Curabitur ligula sapien.'));
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );

// // 05 
// const checkForSpam = function(message: string) {
//     let value: string = message.toLowerCase();
//     if (value.includes('spam') || value.includes('sale')) {
//       return true;
//     } else return false;
//   };
//   console.log(checkForSpam('Latest technology news')); // false
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
//   console.log(checkForSpam('Get best sale offers now!')); // true
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// // 06
// let input: number;
// const numbers: number[] = [];
// let total: number = 0;
// for (let index = 0; index !== null; index + 1) {
//   input = Number(prompt('Введите число: '));
//   numbers.push(input);
//   total = total += input;
//   if (input === 0) {
//     alert('Было введено не число, попробуйте еще раз!');
//     break;
//   }
// }
// alert(`Общая сумма чисел равна ${total}`);

// // 07
// const logins: string[] = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// const isLoginValid = (login: string) => {
//   return login !== null && login.length >= 4 && login.length <= 16;
// };
// const isLoginUnique = (allLogins: string[], login: string) => {
//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// };
// const addLogin = (allLogins: string[], login: string) => {
//   let isValid = isLoginValid(login);
//   let isUnique = isLoginUnique(allLogins, login);
//   if (isValid === false) {
//     console.log('Ошибка! Логин должен быть от 4-ти до 16-ти символов!');
//   } else if (isUnique === false) {
//     console.log('Такой логин уже используется!');
//   } else {
//     allLogins.push(login);
//     console.log('Логин успешно добавлен!');
//   }
// };
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// // interfaces
// // 01
// interface User {
//     readonly name: string,
//     readonly age: number,
//     hobby: string,
//     premium: boolean,
//     mood?: string,    
// }
// const user: User = {
//    name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;
//   const entries = Object.entries(user);
//   for (const item of entries) {
//     const key = item[0];
//     const value = item[1];
//     console.log(`${key}: ${value}`);
//   }
//   console.log(user)

// // 02 
// interface Obj {
//     [key: string]: (string | number | boolean)
// }
// const countProps = (obj: Obj) => {
//     const countOfProps = Object.keys(obj).length;
//     return { countOfProps };
//   };
//   console.log(countProps({})); // 0
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// // 03
// interface Employees {
//     [key: string]: number
// }
// const findBestEmployee = (employees: Employees) => {
//     let maxTasks = 0;
//     let bestEmployee;
//     const tasks = Object.entries(employees);
//     for (const [name, value] of tasks) {
//       if (maxTasks < value) {
//         maxTasks = value;
//         bestEmployee = name;
//       }
//     }
//     return bestEmployee;
//   };
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux

// // 04
// interface Employees {
//     [key: string]: number
// }
// const countTotalSalary = (employees: Employees) => {
//     const salaries = Object.values(employees);
//     let totalSalary = 0;
  
//     for (const salary of salaries) {
//       totalSalary += salary;
//     }
//     return { totalSalary };
//   };
//   console.log(countTotalSalary({})); // 0
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   ); // 330
//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     }),
//   ); // 400

//   // 05 
//   const products = [
//      { name: 'Радар', price: 1300, quantity: 4 },
//    { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
//   const getAllPropValues = (array: any[], prop: string) => {
//     const values = [];
//     for (const product of array) {
//       if (prop in product) {
//         values.push(product[prop]);
//       }
//     }
//     return values;
//   };
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []
  
// // 06 
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
//   type Param = (a: any[], b:string) => number;
//   const calculateTotalPrice:  Param = (allProdcuts, productName) => {
//     let productTotalPrice = 0;
//     for (let product of allProdcuts) {
//       if (productName === product.name) {
//         productTotalPrice = product.quantity * product.price;
//       }
//     }
//     return productTotalPrice;
//   };
//   console.log(calculateTotalPrice(products, 'Радар'));
//   console.log(calculateTotalPrice(products, 'Дроид'));

// 07 -- IS NOT READY
enum Transaction {
    DEPOSIT = 'deposit', 
    WITHDRAW = 'withdraw', 
  };

type Amount = number;
type Type = string;
interface ITransaction {
    id: string,
    type: string,
    amount: number
}

interface IAccount {
    balance: number,
    transactions: [],
    createTransaction: (a: Amount, t: Type) => ITransaction,
    deposit: (a: Amount) => void,
    withdraw: (a: Amount) => void,
    getBalance: () => void,
    getTransactionDetails: (id: Type) => void,
    getTransactionTotal(id: Type): void,
}
  const account: IAccount = {
   balance: 0,
    transactions: [],
    createTransaction(amount , type ) {
      const transaction = {
        id: `id-${this.transactions.length + 1}`,
        type,
        amount,
      };
      return transaction;
    },
    deposit(amount) {
      this.balance += amount;
      
      const newDepositTransaction = this.createTransaction(
          amount,
          Transaction.DEPOSIT,
      );
    //   this.transactions = [...this.transactions, newDepositTransaction];
    },
    withdraw(amount: Amount) {
      if (amount > this.balance) {
        console.log(
          `You try to withdraw ${amount} but for this transaction not enough money in your account!`,
        );
      } else {
        this.balance -= amount;
        const newWithdrawTransaction = this.createTransaction(
          amount,
          Transaction.WITHDRAW,
        );
        // this.transactions = [...this.transactions, newWithdrawTransaction];
      }
    },
    getBalance() {
      console.log('Balance: ', this.balance);
      return this.balance;
    },
    getTransactionDetails(id) {
      for (const transaction of this.transactions) {
        if (transaction.id === id) {
          console.log(`You found transaction by id '${id}': `, transaction);
          return transaction;
        }
      }
    },
    getTransactionTotal(type) {
      let total = 0;
      for (const transaction of this.transactions) {
        if (transaction.type === type) {
          total = total + transaction.amount;
        }
      }
      return console.log(`The amount of "${type}" transactions is: ${total}`);
    },
  };
  
  account.deposit(150);
  account.getBalance();
  console.table(account.transactions);
  account.deposit(100);
  account.getBalance();
  console.table(account.transactions);
  account.withdraw(50);
  account.getBalance();
  console.table(account.transactions);
  account.withdraw(350);
  account.getBalance();
  console.table(account.transactions);
  account.getTransactionDetails('id-2');
  account.getTransactionTotal('deposit');
  account.getTransactionTotal('withdraw');


export {};