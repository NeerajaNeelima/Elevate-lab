import React, { useState,useEffect } from 'react';
import Card from '../Card/card';
import cardData from '../Card/cardData'; // Importing the cardData
import { FaSearch,FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { BsCart4, BsPeople } from 'react-icons/bs';
//import Image1 from '../../Images/legging.jpeg'
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedText, setSuggestedText] = useState("");
  const categories = [
    "All Categories",
    "Mens T-Shirt",
    "Mens Shirt",
    "Traditional Wear",
    "Frock"
  ];

 // Filtered cards based on selected category and search term
  const filteredCards = cardData.filter(item => {
    const matchCategory = selectedCategory === "All Categories" || item.name === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleCategoryChange = (event) => {
    const selectedCategoryValue = event.target.value;
    
    // Show all categories when "All Categories" is clicked
    if (selectedCategoryValue === "All Categories") {
      setSelectedCategory("All Categories");
    } else {
      setSelectedCategory(selectedCategoryValue);
    }
  };

  const handleSearchChange = (event) => {
    const inputText = event.target.value;
    setSearchTerm(inputText);

    // Clear selected category when typing in the search
    setSelectedCategory("All Categories");
    
    // Logic for suggesting full text based on partial input
    if (inputText.length > 0) {
      const matchingText = cardData.find(item =>
        item.name.toLowerCase().startsWith(inputText.toLowerCase())
      );
      if (matchingText) {
        setSuggestedText(matchingText.name);
      } else {
        setSuggestedText("");
      }
    } else {
      setSuggestedText("");
    }
  };

  const handleSuggestionClick = (text) => {
    setSearchTerm(text);
    setSuggestedText("");
  };

  // Filtered categories based on search term for autocomplete
  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (event) => {
    // Handle language change here
    console.log('Selected Language:', event.target.value);
  };


  const images = [
    'https://cdn.pixabay.com/photo/2020/02/22/09/34/angel-4870052_640.png',
    'https://cdn.pixabay.com/photo/2015/11/14/20/26/writing-1043622_640.png',
    
    'https://cdn.pixabay.com/photo/2020/09/10/16/09/ulysses-butterfly-5560798_640.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="background-image">
        <div className="image-carousel">
            <div className="carousel-container">
        
                <img className="carousel-image" src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
                <div className="img-text">GET START YOUR FAVORITE SHOPPING</div>
            </div>
            <div className="carousel-controls">
                <button className="prev" onClick={prevImage}><FaChevronLeft /></button>
                <button className="next" onClick={nextImage}><FaChevronRight /></button>
            </div>
        </div>
        <form className='form'>
          <br />

          <input
            id="category"
            type="text"
            value={selectedCategory}
            onChange={handleCategoryChange}
            list="categories"
          />
          <datalist id="categories">
            {categories.map((category, index) => (
              <option key={index} value={category} />
            ))}
          </datalist>
          <br />
          <div className='input-groups'>
            <input
            id="searchInput"
            type="text"
            value={searchTerm}
            placeholder='Search this blog'
            onChange={handleSearchChange}
            list="suggestedTexts"
            style={{ appearance: 'none' }} // Remove down arrow
            />
            <div className='icon-background'>
                <FaSearch className="search-icon" />
            </div>
          </div>
          <div className="language-selector">
      <select onChange={handleChange}>
        <option value="en">
          <FaFlag className="flag-icon" /> UK
        </option>
        <option value="te">
          <FaFlag className="flag-icon" /> France
        </option>
        <option value="hi">
          <FaFlag className="flag-icon" /> India
        </option>
        <option value="es">
          <FaFlag className="flag-icon" /> Japan
        </option>
        <option value="fr">
          <FaFlag className="flag-icon" /> Chaina
        </option>
            </select>
    </div>
        <div style={{display:'flex', gap:'1rem'}}>
            <div style={{display:'flex'}}>
                <BsCart4 className='icon'/>
                <span>Cart</span>
            </div>
            <div>
                <BsPeople className='icon'/>
                <span>CART</span>
            </div>
            </div>
          <datalist id="suggestedTexts">
            {suggestedText && <option value={suggestedText} />}
            </datalist>
          <button className='btn custom-btn'>Buy Now</button>
        </form>
        
      </div>
      <div className='heading'>Man & Woman Fashion</div>
    <div className='card-container'>
        
        {filteredCards.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      
      
        {/*<div>
        <img className='img' src="https://cdn.pixabay.com/photo/2020/02/22/09/34/angel-4870052_640.png"/>
        <div className='img-text'>GET START YOUR FAVriot shoping</div>
        </div>*/}

          
      
    </>
  );
};

export default Home;
