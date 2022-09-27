let calculate = document.querySelector('.calculate')
let budgetOutput = document.querySelector('.budget_output')
let addExpenses = document.querySelector('.add')
let balanceText = document.querySelector('#balance')
let totalExpenses = document.querySelector('#expense')
expensesValues = []

calculate.addEventListener('click', function getBudget (e){
    let budget = document.querySelector('#budget')
    budget = parseFloat(budget.value)
    e.preventDefault();
    if(!budget){
        alert('please enter your budget')
    }else{
        budgetOutput.innerText = `$ ${budget}`
    }
    
})


addExpenses.addEventListener('click', function getExpenses (e){

    let budget = document.querySelector('#budget')
    let expensesTitle = document.querySelector('.expenses_title')
    let expensesValue = document.querySelector('.expenses_value')
    expensesTitle = expensesTitle.value
    expensesValue = expensesValue.value
    e.preventDefault();
 
    let getExpense = document.querySelector('.getExpense')
    let getValue = document.querySelector('.getValue')
    let getIcon = document.querySelector('.getIcon')
    
    budget = parseFloat(budget.value)
    if(!budget){
        alert('Please enter a budget')
    }else{

        if(!expensesTitle){
            alert('enter an expense title')
        }else{
            if(!expensesValue){
                alert('Please enter an expense value')
            }else{

                const list1 = document.createElement('li')
                const node1 = document.createTextNode(expensesTitle)
                list1.appendChild(node1)
                list1.classList.add('expense')
                getExpense.appendChild(list1)

                const list2 = document.createElement('li')
                const node2 = document.createTextNode(expensesValue)
                list2.appendChild(node2)
                getValue.appendChild(list2)

                const list3 = document.createElement('li')
                list3.innerHTML = '<i class="edit fa fa-pencil-square-o" aria-hidden="true"></i> <i class="delete fa fa-trash" aria-hidden="true"></i>'
                getIcon.append(list3)

                expensesValues.push(parseFloat(expensesValue))
                let totalMoney = expensesValues.reduce((arg, acc)=> arg + acc, 0)
                totalExpenses.innerText = `$ ${totalMoney}`
                let balance = budget - totalMoney
                balanceText.innerText = `$ ${balance}`

            }

        }
    }
})


