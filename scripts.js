let customers = [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2018'},
    { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
    { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
   ];

customers.sort((a,b) => a.dateJoined - b.dateJoined)

const list = document.querySelector('#listOfCustomers')
console.log(list)

const form = document.querySelector('form');
const create = document.querySelector('button');

const errors = document.querySelector('#errorList')
console.log(errors)

const render = () => {
    let html = customers.map (cust => {
        const diff = new Date() - cust.dateJoined
        const oneYear = 1000*60*60*24*365
        return `
        <li class = '${cust.isVIP ? 'vip': ''} customers'>
        ${cust.name} Joined On ${ cust.dateJoined}
        </li>`
    }).join('')

    list.innerHTML = html
}

render();



create.addEventListener('click', (ev) => {
    ev.preventDefault();

    const custName = form.querySelector('[name = "name"]');
    const custDate = form.querySelector('[name = "dateJoined"]');
    const custVIP = form.querySelector('[name = "VIP"]');

    // console.log(custVIP.checked);

    if (custName.value === '') {
        errors.innerHTML = '<li>Name Required</li>'

    } else {
        customers.push({name: custName.value, dateJoined: custDate.value, isVIP: custVIP.checked});
        console.log(customers);
        render();
    }
})