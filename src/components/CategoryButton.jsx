import React from 'react';

const CategoryButton = ({ category, setSelectedCategory }) => {
  return (
    <button onClick={() => setSelectedCategory(category)}>
      {category}
    </button>
  );
};

export default CategoryButton;
