axios.get('https://yesno.wtf/api')
  .then(function (response) {
    console.log(response);
    console.log(response.data);
    console.log(response.data.answer);
    console.log(response.data.image);

    var myDiv = document.querySelector('#my-div');
    myDiv.innerHTML = '<img src="' + response.data.image + '" alt="' + response.data.answer + '" />';
  })
  .catch(function (error) {
    console.log(error);
  });
