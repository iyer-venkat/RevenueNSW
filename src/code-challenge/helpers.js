export const formatName = (name) => {
  const resultArr = name.toLowerCase().replace(/ /g, '').split('_')
  return resultArr.map(r => r.charAt(0).toUpperCase()+r.substr(1)).filter(Boolean).join(' ')
};

export const filterAndSortAnimeList = (search, list) => {
  const sortedList = list.sort(
    (a,b) => ('' + a.anime_name).localeCompare(b.anime_name)
  )
  const searchList = search && search.split(' ').filter(Boolean)
  return searchList? sortedList.filter(
    l =>  searchList.some(
      e => !e.includes('_') && l.anime_name.includes(e)
    )
  ): sortedList
};
