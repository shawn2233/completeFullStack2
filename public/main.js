var dBill = document.getElementsByClassName("fa-regular fa-money-bill-1");
var dump = document.getElementsByClassName("fa-trash");

Array.from(dBill).forEach(function(element) {
      element.addEventListener('click', function(){
        const num = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        const dBill = parseFloat(this.parentNode.parentNode.childNodes[3].innerText)
        fetch('money', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'num': num,
            'dBill':dBill
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(dump).forEach(function(element) {
      element.addEventListener('click', function(){
        const num = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('money', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'num': num
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
