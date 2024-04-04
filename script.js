document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tipForm');
    const ti = document.getElementById('billTotal');
    const pi = document.getElementById('tipPercentage');
    const si = document.getElementById('tipSlider');
    const ta = document.getElementById('tipAmount');
    const tb = document.getElementById('totalBill');

    form.addEventListener('input', function() {
  
        const billTotal = parseFloat(ti.value);
        const tipPercentage = parseInt(si.value);

        const tipAmount = (billTotal * tipPercentage) / 100;

        const totalBill = billTotal + tipAmount;

        // Update disabled inputs
        pi.value = tipPercentage + '%';
        ta.value = tipAmount.toFixed(2);
        tb.value = totalBill.toFixed(2);
    });

    ti.addEventListener('input', function() {

        if (!/^\d*\.?\d*$/.test(ti.value)) {
            alert('Please enter a valid number for Bill Total.');
            ti.value = '';
        }
        
    });
});