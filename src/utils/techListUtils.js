export const filterTechs = (techs, searchTechs) => {
  const filteredTechs = techs.filter((tech) => {
    return (
      tech.tech.toLowerCase().includes(searchTechs.toLowerCase()) ||
      tech.type.toLowerCase().includes(searchTechs.toLowerCase())
    );
  });

  return filteredTechs;
};

export const sortTechs = (typeSort, techs) => {
  let sortedTechs;
  if (!typeSort) {
    sortedTechs = techs;
  } else {
    sortedTechs = techs.sort((actual, next) => {
      const reversed = typeSort === 'asc' ? 1 : -1;
      return reversed * actual.tech.localeCompare(next.tech);
    });
  }

  return sortedTechs;
};
