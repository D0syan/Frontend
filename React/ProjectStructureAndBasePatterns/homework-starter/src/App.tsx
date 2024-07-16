import { useEffect, useState } from 'react';
import { getRestaurants, Restaurant, updateRestaurantRating } from './api';
import RestaurantCard from './ui/RestaurantCard/RestaurantCard';
import LogoIcon from './assets/stair.svg?react';
import './styles.css';

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
      setFilteredRestaurants(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchQuery, restaurants]);

  const handleRatingChange = async (restaurantId: string, newRating: number) => {
    try {
      await updateRestaurantRating({ id: restaurantId, raiting: newRating });
      const updatedRestaurants = restaurants.map(restaurant =>
        restaurant.id === restaurantId ? { ...restaurant, raiting: newRating } : restaurant
      );
      setRestaurants(updatedRestaurants);
    } catch (error) {
      console.error('Error updating restaurant rating:', error);
    }
  };
  


  return (
    <>
      <header>
        <div className="logo">
          <LogoIcon width={16} height={16} className="logo__icon" />
          <span>Eats</span>
        </div>
        <div className="profile">
          <img alt="profile" src="/avatar.png" />
        </div>
      </header>
      <main className="main">
        <input
          className="search"
          placeholder="Search for restaurants"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <section className='section'>
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onRatingChange={handleRatingChange}
            />
          ))}
        </section>
      </main>
      <footer>
        <p>Privacy Policy</p>
        <p className="corporation">2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  );
}

export default App;
