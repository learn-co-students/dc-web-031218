document.addEventListener('DOMContentLoaded', () => {
  const photo = document.getElementById('photo');

  console.log('welcome to flavortown');
  // get request
  fetch('http://localhost:3000/users.json')
    // inside fetch, create new Promise(resolveFn, rejectFn)
    .then(resp => resp.json())
    .then(json => {
      console.log('SUCCESS');
      const photoId = Math.floor(Math.random() * 8);
      console.log('RANDOM NUMER IS', photoId);
      photo.src = json[photoId].avatar;
    })
    .catch(e => console.warn(e));
  console.log('HELLO');
});
