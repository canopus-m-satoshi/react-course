import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextPrivider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(fovoriteMeetup) {
    // setUserFavorites(userFavorites.concat(fovoriteMeetup)); 非推奨
    setUserFavorites((prevUseFavorites) => {
      return prevUseFavorites.concat(fovoriteMeetup);
    });
  }
  function removeFavoritesHandler(meetupId) {
    setUserFavorites((prevUseFavorites) => {
      return prevUseFavorites.filter((meetup) => meetupId.id !== meetupId);
    });
  }
  function itemIsFavoritesHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
