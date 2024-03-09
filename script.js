function searchMedicine() {
    const diseaseInput = document.getElementById('disease-input').value;
    const medicineList = document.getElementById('medicine-list');

    const suggestedMedicines = getMedicinesFromBackend(diseaseInput);

    medicineList.innerHTML = '';

    suggestedMedicines.forEach(medicine => {
        const listItem = document.createElement('li');
        listItem.textContent = medicine;
        medicineList.appendChild(listItem);
    });
}

function printResults() {
    const resultSection = document.getElementById('result-section');
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(resultSection.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const values = ['Liquorice (यष्टिमधु) - मुलेठी        ---------->     2 g', 'Ginger (अदरक) ---------->     3-4 g', 'Honey (शहद) ---------->  10-12 g', 'Turmeric (हल्दी) ----------> 500 mg', 'Ajwain (अजवाइन) ----------> ¼ teaspoon', 'Amla (आँवला) ----------> 20 g', 'Giloy (गिलोय) ----------> 10 g', 'Cinnamomum (दालचीनी) ----------> 4 g', 'Clove (लौंग) ----------> 10 g'];

        const randomValues = [];

        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * values.length);
            const randomValue = values.splice(randomIndex, 1)[0];
            randomValues.push(randomValue);
        }

        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = ' <h2>Recommended Medicines and Formulations</h2> <br>' + randomValues.join('<br>');
    }
}

function printResults() {
    const outputDiv = document.getElementById('output');
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>' + outputDiv.innerHTML + '</body></html>');
    printWindow.document.close();
    printWindow.print();
}
