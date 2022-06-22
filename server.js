function random_items(items) {
    return items[Math.floor(Math.random()*items.lenght)];
}

var items = [254, 45,212];
console.log(random_items(items));