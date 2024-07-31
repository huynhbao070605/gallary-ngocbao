import React, { useState } from 'react';
import ImageCard from './components/ImageCard';
import SearchBar from './components/SearchBar';
import CategoryButton from './components/CategoryButton';
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import './index.css';

const images = [
  { url: 'image1.jpg', title: 'Sunset', category: 'Nature' },
  { url: 'image2.jpg', title: 'Forest', category: 'Nature' },
  { url: 'image3.jpg', title: 'City', category: 'Urban' },
  { url: 'image4.jpg', title: 'Mountain', category: 'Nature' },
  { url: 'image5.jpg', title: 'Street', category: 'Urban' }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredImages = images.filter(image => 
    image.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || image.category === selectedCategory)
  );

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="categories">
        <CategoryButton category="All" setSelectedCategory={() => setSelectedCategory('')} />
        <CategoryButton category="Nature" setSelectedCategory={setSelectedCategory} />
        <CategoryButton category="Urban" setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="gallery">
        {filteredImages.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default App;

