//получаем доступ к картинкам
const items = document.querySelectorAll('.item');

//выбираем каждую из картинок, с помощью метода forEach (получаем доступ к массиву и каждой картинке из него), чтобы навесить стиль в CSS
items.forEach(item =>{ //ставим событие, когда мы наводим мышку должно случиться определенное действие
  item.addEventListener('mouseover', ()=>{ //вводим класс для картинок в CSS
    removeFocus(); //функцию удаления помещаем сюда, чтобы класс у нас санчала удалялся, а потом добавлялся
    item.classList.add('selected');
  })
})

//функция удаления класса с картинки
removeFocus = () =>{
  items.forEach(item =>{
    item.classList.remove('selected');
  })
}