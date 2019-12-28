let secondItem;

document.querySelectorAll(".block-item").forEach((item, index) => {
    item.addEventListener("input", ev => {
        if (item.value.length < 30) {
            jsonData[index].class = item.value;
        } else {
            ev.preventDefault();
            item.substr(1, item.length);
        }
    });
});

document.querySelectorAll(".block-item").forEach(item => {
    item.setAttribute("draggable", "true");
    item.addEventListener("drag", ev => {
        ev.preventDefault();
        localStorage.setItem("block1_txt", item.value);
        secondItem = item;
    });
    item.addEventListener("drop", ev => {
        ev.preventDefault();
        localStorage.setItem("block2_txt", item.value);
        console.log(secondItem);
        item.value = localStorage.getItem("block1_txt");
        secondItem.value = localStorage.getItem("block2_txt");
        document.querySelectorAll(".block-item").forEach((item, index) => {
            jsonData[index].class = item.value;
        });
    });
    item.addEventListener("dragover", ev => {
        ev.preventDefault();
    });
});
