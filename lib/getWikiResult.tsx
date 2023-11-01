
export default async function getWikiResult(searchWord: string) {
  
    const searchParams = new URLSearchParams({
        action:'query', // determiner s'il s'agit d'une requete
        generator:'search', // generer le resultat de la recherche
        gsrsearch:searchWord, // Mot a rechercher
        gsrlimit:'20', // nombre limite de resultat
        prop:'pageimages|extracts', // les propriétés a saisir (images , extraits)
        exchars:'100', // Nombre de caracteres pour chaque extrait
        exintro:'true', // Inlcure l'introduction dans l'extrait
        explaintext:'true', // Reponse en format brut et non en HTML
        exlimit:'max', // nombre maximal d'extraits à retourner
        format:'json', // Format de retour
        origin:'*' // origin
    })

    const res = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)

    return res.json()
}
