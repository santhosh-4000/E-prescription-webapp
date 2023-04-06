let prescriptionItems = [];

function renderPrescription(item) {
  const list = document.querySelector('.prescription-list');

  const node = document.createElement("li");
  node.setAttribute('class', `prescription-item`);
  node.setAttribute('data-key', item.id);

  node.innerHTML = `
    <span>${item.medicine_name}</span>
    <span>${item.medicine_conc}</span>
    <span>${item.medicine_dosg}</span>
    <span>${item.medicine_quantity}</span>
    <button type='button' class="delete-item js-delete-item">
      delete
    </button>
  `;

  list.append(node);
}

function addPrescriptionItem(medicine_name, medicine_conc, medicine_dosg, medicine_quantity) {
    const item = {
      medicine_name,
      medicine_conc,
      medicine_dosg,
      medicine_quantity,
      id: Date.now()
    };
  
    prescriptionItems.push(item);
    renderPrescription(item);
}

const addBtn = document.querySelector("#add_medicine");

addBtn.addEventListener('click', () => {
  const medicine_name = document.querySelector('#medicine_name');
  const medicine_conc = document.querySelector('#medicine_conc');
  const medicine_dosg = document.querySelector('#medicine_dosg');
  const medicine_quantity = document.querySelector('#medicine_quantity');
  
  const medicine_name_text =  medicine_name.value.trim();
  const medicine_conc_text = medicine_conc.value.trim();
  const medicine_dosg_text = medicine_dosg.value.trim();
  const medicine_quantity_text = medicine_quantity.value.trim();

  if (medicine_name_text !== '') {
    addPrescriptionItem(medicine_name_text, medicine_conc_text, medicine_dosg_text, medicine_quantity_text);
    medicine_name.value = '';
    medicine_conc.value = '';
    medicine_dosg.value = '';
    medicine_quantity.value = '';
    medicine_name.focus();
  }
})


