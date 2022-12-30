import ITimePeriod from '~interfaces/i-time-period'

function generateRandomPeriods() {
  const words = [
    'the',
    'a',
    'and',
    'of',
    'to',
    'in',
    'for',
    'on',
    'with',
    'at',
    'by',
    'this',
    'that',
    'these',
    'those',
    'an',
    'my',
    'your',
    'our',
    'their',
  ]
  const categories = [
    'Кино',
    'Медицина',
    'Литература',
    'Политика',
    'Спорт',
    'Искусство',
    'Музыка',
    'Наука',
    'Техника',
    'Транспорт',
    'Финансы',
    'Экономика',
    'Юмор',
  ]

  const numTimePeriods = Math.floor(Math.random() * 5) + 2
  const timePeriods = []

  for (let i = 0; i < numTimePeriods; i++) {
    const startYear = Math.floor(Math.random() * 50) + 1950
    const endYear = Math.floor(Math.random() * 50) + startYear
    const events = []
    const numEvents = Math.floor(Math.random() * 4) + 3
    const category = categories[Math.floor(Math.random() * categories.length)]

    for (let j = 0; j < numEvents; j++) {
      const eventYear =
        Math.floor(Math.random() * (endYear - startYear + 1)) + startYear
      const id = Math.random().toString(36).substring(2, 8)
      let description = ''
      const numWords = Math.floor(Math.random() * 11) + 15

      for (let k = 0; k < numWords; k++) {
        const word = words[Math.floor(Math.random() * words.length)]
        description += `${word} `
      }

      events.push({ id: id, year: eventYear, description: description })
    }

    timePeriods.push({
      years: [startYear, endYear],
      events,
      category,
    })
  }

  return timePeriods as ITimePeriod[]
}

export default generateRandomPeriods
