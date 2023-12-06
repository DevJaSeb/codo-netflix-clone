export const genreAdaper = (response) =>{
    const {genres} = response;

    return genres.map((item) => ({
        id:item.id,
        name:item.name
    }))
}