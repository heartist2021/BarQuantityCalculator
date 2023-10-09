function calculateQuantity() {
    // Get input values
    const feet = parseFloat(document.getElementById("feet").value) || 0;
    let inches = parseFloat(document.getElementById("inches").value) || 0;
    const stockLengthFeet = parseFloat(document.getElementById("stockLength").value) || 0;

    // Ensure inches is less than 12
    if (inches > 12) {
        alert("Please enter a valid value for inches (less than or Equal to  12).");
        return;
    }

    // Convert everything to inches for calculation
    const totalInches = feet * 12 + inches;
    const stockLengthInches = stockLengthFeet * 12;

 // Calculate the required bars
    const requiredBars = Math.ceil(totalInches / stockLengthInches);

    // Calculate the remaining inches after using whole bars
    const remainingInches = totalInches - (requiredBars * stockLengthInches);

    // Convert remaining inches to feet and inches
    const remainingFeet = Math.ceil(remainingInches / 12);
    const remainingInchesPart = remainingInches % 12;

    // Display the result
    document.getElementById("result").innerText = `Required Bars: ${requiredBars}, Wastage: ${remainingFeet}' ${remainingInchesPart}"`;
}