// Write your code here


// Sending Data from Forms
const form = document.getElementById("conversion-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const base = document.getElementById('convert-from').value
    const amount = Number( document.getElementById('convert-count').value )
    // console.log(typeof amount);
    const currency = document.getElementById('convert-to').value

    fetch(`https://api.coinbase.com/v2/prices/${base}-${currency}/spot`)
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById('output')
            output.value = amount*Number( data.data.amount )

            // console.log(data.data.base)
            // console.log(typeof Number( data.data.currency ))
            // console.log(data.data.amount)
        })
        .catch(err => console.error(err));
});
