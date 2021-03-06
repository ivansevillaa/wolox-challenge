import React, { useState } from 'react';
import { getTechList } from '../../utils/serviceCall';
import { filterTechs, sortTechs } from '../../utils/techListUtils';
import Input from '../../components/Input';
import TechCard from '../../components/TechCard';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import './TechList.css';

const TechList = () => {
  const [searchTechs, setSearchTechs] = useState('');
  const [typeSort, setTypeSort] = useState('');

  const { data: techs, isLoading, error } = getTechList();
  if (error) return <h1>{error.message}</h1>;
  if (isLoading) return <Spinner />;

  const filteredTechs = filterTechs(techs, searchTechs);
  const sortedTechs = sortTechs(typeSort, filteredTechs);

  return (
    <>
      <Header />
      <main className="tech-list-wrapper container fadeIn">
        <h3 className="tech-list-wrapper__title">Listado de Tecnologías</h3>
        <Input
          type="text"
          square
          shadow
          label="Filtrar por nombre o tipo de tecnología"
          onChange={(event) => setSearchTechs(event.target.value)}
        />
        <select
          value={typeSort}
          onChange={(event) => setTypeSort(event.target.value)}
          className="tech-list__dropdown"
        >
          <option value="">Sin orden</option>
          <option value="asc">Orden ascendente</option>
          <option value="desc">Orden descendente</option>
        </select>
        <section className="tech-list">
          {sortedTechs.map((item, index) => (
            <TechCard key={index} data={item} />
          ))}
        </section>
        <p className="tech-list-wrapper__text">
          Total de tecnologías:{' '}
          <span className="tech-list-wrapper__text--blue">
            {filteredTechs.length}
          </span>
        </p>
      </main>
    </>
  );
};

export default TechList;
