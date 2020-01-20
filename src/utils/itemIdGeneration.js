const getRandomItemCategory = () => {
  const randomIndex = Math.floor(Math.random() * LIST_OF_ITEM_CATEGORIES.length)
  return LIST_OF_ITEM_CATEGORIES[randomIndex]
}

const LIST_OF_ITEM_CATEGORIES = [5, 7, 12, 13, 15, 17, 44, 46]

export default {
  getRandomItemCategory
}
