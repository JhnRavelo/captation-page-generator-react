import { Card } from '../components/Card/Card';

const useFilterCampagne = () => {
  return (campagnes?: Card[], id?: string) => {
    if (id && campagnes) {
        const filterCampagne = campagnes.find(
          (campagne) => campagne.id == id
        );
  
        if (filterCampagne) {
          return filterCampagne;
        }
      }
  }
}

export default useFilterCampagne
