
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, 
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з 
// вашим об'єктом

let form = document.forms[0];
form.onsubmit = function (eo) {
    eo.preventDefault ();
 
    if(!this.username.value  || this.username.value.lenght < 3) {
        return alert ('Wrong name');
    }
    const wrapper = document.createElement('div');
    const username = document.createElement('div');
    const sruname = document.createElement('div');
    const age = document.createElement('div');

    username.innerText = `Name: ${this.username.value}`
    sruname.innerText = `sruname: ${this.sruname.value}`
    age.innerText = `age: ${this.age.value}`

    // обнулення форми

    this.username.value = ''
    this.sruname.value = ''
    this.age.value = ''

    wrapper.append(username,sruname,age);
    document.body.appendChild(wrapper)
}

