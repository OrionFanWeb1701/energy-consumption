const adress = document.querySelector('.address')
const kwh = document.querySelector('.kwh')
const invoiceFrom = document.querySelector('.invoice-from')
const invoiceTo = document.querySelector('.invoice-to')
const numerator = document.querySelector('.numerator')
const readingDate = document.querySelector('.reading-date')
const numeratorPrevious = document.querySelector('.numerator-previous')
const readingDatePrevious = document.querySelector('.reading-date-previous')
const amount = document.querySelector('.amount')

const inputsAll = Array.from(document.querySelectorAll('input'))

const errorInfo = document.querySelector('.error-info')
const scoreTable = document.querySelector('.score-table')
const addressScore = document.querySelector('.address-score')
const el1 = document.querySelector('#el1')
const el2 = document.querySelector('#el2')
const el3 = document.querySelector('#el3')
const el4 = document.querySelector('#el4')
const el5 = document.querySelector('#el5')
const el6 = document.querySelector('#el6')
const el7 = document.querySelector('#el7')
const el8 = document.querySelector('#el8')
const el9 = document.querySelector('#el9')
const el10 = document.querySelector('#el10')
const el11 = document.querySelector('#el11')
const el12 = document.querySelector('#el12')
const el13 = document.querySelector('#el13')
const el14 = document.querySelector('#el14')
const el15 = document.querySelector('#el15')

const scoreBtn = document.querySelector('.score')
const printBtn = document.querySelector('.btn-print')

const calculateResult = () => {
	const fromDay = Date.parse(invoiceFrom.value) / 1000 / 60 / 60 / 24
	const toDay = Date.parse(invoiceTo.value) / 1000 / 60 / 60 / 24
	const numberOfDays = toDay - fromDay
	const readingDateToDays = Date.parse(readingDate.value) / 1000 / 60 / 60 / 24
	const energyConsuption = numerator.value - numeratorPrevious.value
	const readingDatePreviousToDays = Date.parse(readingDatePrevious.value) / 1000 / 60 / 60 / 24
	const numberOfDaysReadingDate = readingDateToDays - readingDatePreviousToDays
	const energyConsuptionOfDay = (energyConsuption / numberOfDaysReadingDate).toFixed(1)
	const parkWear = energyConsuptionOfDay * numberOfDays
	const pricePerKwh = (amount.value / kwh.value).toFixed(2)
	const parkCosts = (pricePerKwh * parkWear).toFixed(2)

	addressScore.textContent = adress.value
	el1.textContent = `${kwh.value} (KWh)`
	el2.textContent = numberOfDays
	el3.textContent = `${numerator.value} (KWh)`
	el4.textContent = readingDate.value
	el5.textContent = `${numeratorPrevious.value} (KWh)`
	el6.textContent = readingDatePrevious.value
	el7.textContent = `${energyConsuption} (KWh)`
	el8.textContent = numberOfDaysReadingDate
	el9.textContent = `${energyConsuptionOfDay} (KWh)`
	el10.textContent = `${parkWear} (KWh)`
	el11.textContent = `${kwh.value - parkWear} (KWh)`
	el12.textContent = `${amount.value} zł`
	el13.textContent = `${pricePerKwh} zł`
	el14.textContent = `${parkCosts} zł`
	el15.textContent = `${(amount.value - parkCosts).toFixed(2)} zł`
}

const score = () => {
	if (inputsAll.filter(input => input.value === '').length > 0) {
		errorInfo.textContent = 'Musisz wypełnić wszystkie pola!'
		scoreTable.removeAttribute('id', 'show-table')
	} else {
		errorInfo.textContent = ''
		scoreTable.style.display = 'flex'
		scoreTable.classList.add('score-table__animation')
		scoreTable.setAttribute('id', 'show-table')
		calculateResult()
	}
}

scoreBtn.addEventListener('click', score)
printBtn.addEventListener('click', () => {
	window.print()
})
