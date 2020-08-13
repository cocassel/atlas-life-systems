export const addFavourite = (article) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();

        firestore.collection('favourites').add({
            ...article,
            authors: ['Steve Buscemi', 'Al Pachino', 'Ave Maria', 'Will Will Smith Smith Smiths'],
            userId: 42069,
            date: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_FAVOURITE', article });
        }).catch((err) => {
            dispatch({ type: 'ADD_FAVOURITE_ERROR', err });
        })
    }
};