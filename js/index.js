let features_boxes = document.querySelectorAll(".features-box");
let features_details = document.querySelectorAll(".features-details");
let current_feature_index = 0;

function change (move_to) {
    if (move_to == features_details.length)
        move_to = 0;
    else if (move_to < 0)
        move_to = features_details.length - 1;

    features_details[current_feature_index].classList.remove('active');
    features_boxes[current_feature_index].classList.remove('active');
    features_details[move_to].classList.add('active');
    features_boxes[move_to].classList.add('active');

    current_feature_index = move_to;
}

features_boxes.forEach((box, box_index) => {
    box.addEventListener('click', function () {
        if (current_feature_index !== box_index)
            change(box_index);
    });
});

let features = document.querySelectorAll(".features-item");

for (let icon of features) {
  icon.onclick = function () {
    for (let icon of features) {
      icon.classList.remove("active");
    }
    icon.classList.add("active");
  };
}