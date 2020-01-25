let customers = [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
    { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
    { id: 4, name: 'shep', email: 'shep@gmail.com'},
   ];

const list = document.querySelector('ul')

const render = () => {
    let html = customers.map (cust => {
        return `
        <li>${cust.name}</li>
        `
    }).join('')

    list.innerHTML = html
}

render()