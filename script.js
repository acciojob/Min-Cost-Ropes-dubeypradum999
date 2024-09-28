// Function to calculate the minimum cost of connecting ropes
function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Create a min-heap using a priority queue (implemented as a sorted array)
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // Take the two smallest ropes (from the start of the sorted array)
        const first = arr.shift();
        const second = arr.shift();

        // Combine them and add the cost to the total cost
        const combinedCost = first + second;
        totalCost += combinedCost;

        // Insert the combined rope back into the array in sorted order
        arr.push(combinedCost);
        arr.sort((a, b) => a - b); // Re-sort the array
    }

    return totalCost;
}

// Function to handle form submission and display result
document.getElementById('ropeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const input = document.getElementById('ropeLengths').value;
    const ropeLengths = input.split(',').map(Number).filter(n => !isNaN(n) && n > 0);

    if (ropeLengths.length > 0) {
        const result = mincost(ropeLengths);
        document.getElementById('result').textContent = `Minimum Cost: ${result}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid positive numbers!';
    }
});

