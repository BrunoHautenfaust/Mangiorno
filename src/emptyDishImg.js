function imgError(image) {
    image.onerror = "";
    image.src = "res/dish.jpg";
    return true;
}