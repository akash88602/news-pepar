import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="text-start hidden sm:block">
  
      <h2 className="font-bold text-lg">ALL Categories: {categories.length}</h2>

    
      <div className="grid grid-cols-1 mt-5 gap-2">
        {categories.map(category => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `btn w-full text-left bg-base-100 border-0 text-accent font-semibold hover:bg-base-200 ${
                isActive ? 'bg-base-300' : ''
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
