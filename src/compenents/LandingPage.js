const LandingPage = ({ products, filteredCategory, setFilteredCategory }) => {
    const handleCategoryChange = (event) => {
      setFilteredCategory(event.target.value);
    };
  
    const filteredProducts = filteredCategory
      ? products.filter((product) => product.category === filteredCategory)
      : products;
  
    return (
      <div className="landing-page">
        <h1>Welcome to our Store!</h1>
        <div className="category-filter">
          <label htmlFor="category">Filter by Category:</label>
          <select id="category" value={filteredCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Fashion">Fashion</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Electronics">Electronics</option>
            <option value="Beauty">Beauty</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <a href={`/product/${product.id}`}>View Details</a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LandingPage;