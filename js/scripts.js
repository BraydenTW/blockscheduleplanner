let secondItem;

document.querySelectorAll(".block-item").forEach((item, index) => {
    item.addEventListener("input", () => {
        jsonData[index].class = item.textContent;
    });
});

document.querySelectorAll(".block-item").forEach(item => {
    item.setAttribute("draggable", "true");
    item.addEventListener("drag", ev => {
        ev.preventDefault();
        localStorage.setItem("block1_txt", item.textContent);
        secondItem = item;
    });
    item.addEventListener("drop", ev => {
        ev.preventDefault();
        localStorage.setItem("block2_txt", item.textContent);
        console.log(secondItem);
        item.textContent = localStorage.getItem("block1_txt");
        secondItem.textContent = localStorage.getItem("block2_txt");
        document.querySelectorAll(".block-item").forEach((item, index) => {
            jsonData[index].class = item.textContent;
        });
    });
    item.addEventListener("dragover", ev => {
        ev.preventDefault();
    });
});
