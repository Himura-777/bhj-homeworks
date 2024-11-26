const value = document.querySelector('.dropdown__value')
const list = document.querySelector('.dropdown__list')
const items = document.querySelectorAll('.dropdown__item')

value.addEventListener('click', () => {
	list.classList.toggle('dropdown__list_active')
})

items.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault()
		const text = item.textContent
		value.textContent = text
		list.classList.remove('dropdown__list_active')
	})
})
