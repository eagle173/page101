document.getElementById('add-item').addEventListener('click', function() {
    const formItems = document.getElementById('form-items');
    const newItem = document.createElement('div');
    newItem.classList.add('form-item');

    newItem.innerHTML = `
        <label for="item-type">항목 유형:</label>
        <select class="item-type" onchange="updateForm(this)">
            <option value="">선택하세요</option>
            <option value="type1">유형 1</option>
            <option value="type2">유형 2</option>
        </select>
        <div class="item-details"></div>
    `;

    formItems.appendChild(newItem);
});

function updateForm(selectElement) {
    const itemDetails = selectElement.nextElementSibling;
    itemDetails.innerHTML = ''; // 기존 내용을 지웁니다

    if (selectElement.value === 'type1') {
        itemDetails.innerHTML = `
            <label for="detail1">유형 1 세부사항:</label>
            <input type="text" id="detail1" name="detail1">
        `;
    } else if (selectElement.value === 'type2') {
        itemDetails.innerHTML = `
            <label for="detail2">유형 2 세부사항:</label>
            <input type="text" id="detail2" name="detail2">
        `;
    }
}
