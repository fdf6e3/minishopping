// data.json으로부터 동적으로 items를 불러오자
loadItems()
  .then(items => {
    displayItems(items)
    setEventListeners(items)
  })
  .catch(console.log)