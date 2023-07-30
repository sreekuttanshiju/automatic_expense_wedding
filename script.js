function suggestOptions() {
    const budget = parseFloat(document.getElementById('budget').value);
    const ornamentsBudget = parseFloat(document.getElementById('ornamentsBudget').value);
    const attendees = parseInt(document.getElementById('attendees').value);
    const foodPreference = document.querySelector('input[name="foodPreference"]:checked').value;
    const dressBudget = parseFloat(document.getElementById('dressBudget').value);
    const otherExpenses = parseFloat(document.getElementById('otherExpenses').value);

    if (
        isNaN(budget) || budget <= 0 ||
        isNaN(ornamentsBudget) || ornamentsBudget < 0 ||
        isNaN(attendees) || attendees <= 0 ||
        isNaN(dressBudget) || dressBudget < 0 ||
        isNaN(otherExpenses) || otherExpenses < 0
    ) {
        alert('Please enter valid values for all the questions.');
        return;
    }

    let suggestions = '<h2>Suggested Options:</h2>';

    // Calculate budget allocations based on input
    const foodAmountPerPerson = (attendees > 0) ? budget * 0.25 / attendees : 0;
    const goldAmount = ornamentsBudget;
    const dressAmount = dressBudget;
    const otherExpensesAmount = otherExpenses;
    const foodAmount = (foodPreference === 'both') ? foodAmountPerPerson * attendees * 2 : foodAmountPerPerson * attendees;

    suggestions += `<p>Gold: $${goldAmount.toFixed(2)}</p>`;
    suggestions += `<p>Wedding Dresses: $${dressAmount.toFixed(2)}</p>`;
    suggestions += `<p>Food: $${foodAmount.toFixed(2)}</p>`;
    suggestions += `<p>Other Expenses: $${otherExpensesAmount.toFixed(2)}</p>`;

    // Here, you can use the calculated amounts to suggest shops and catering services based on the budget.

    document.getElementById('suggestions').innerHTML = suggestions;
}
