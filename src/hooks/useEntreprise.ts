import { useContext } from 'react'
import { EntrepriseContext } from '../context/EntrepriseProvider'

const useEntreprise = () => {
    return useContext(EntrepriseContext);
}

export default useEntreprise
