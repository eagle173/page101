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

document.getElementById('type').addEventListener('change', function() {
    const formItems = document.getElementById('form-items');
    formItems.innerHTML = ''; // 기존 항목 초기화

    if (this.value === 'type1') {
        formItems.innerHTML = `
            <label for="session">회차:</label>
            <input type="text" id="session" name="session" required>
            <br>
            <label for="address">주소:</label>
            <input type="text" id="address" name="address" required>
            <br>
        `;
    } else if (this.value === 'type2') {
        formItems.innerHTML = `
            <label for="target">초도대상:</label>
            <input type="text" id="target" name="target" required>
            <br>
        `;
    }
});

document.getElementById('example-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        orderNum: document.getElementById('orderNum').value,
        email: document.getElementById('email').value,
        type: document.getElementById('type').value,
        session: document.getElementById('session') ? document.getElementById('session').value : '',
        address: document.getElementById('address') ? document.getElementById('address').value : '',
        target: document.getElementById('target') ? document.getElementById('target').value : ''
    };

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
