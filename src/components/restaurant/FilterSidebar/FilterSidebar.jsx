import "./FilterSidebar.css";

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">

      <h2>Filters</h2>

      <div className="filter-group">
        <h3>Rating</h3>

        <label>
          <input type="checkbox" />
          4.5 ★ & Above
        </label>

        <label>
          <input type="checkbox" />
          4 ★ & Above
        </label>
      </div>

      <div className="filter-group">
        <h3>Delivery Time</h3>

        <label>
          <input type="radio" name="time" />
          Under 30 min
        </label>

        <label>
          <input type="radio" name="time" />
          Under 45 min
        </label>
      </div>

      <div className="filter-group">
        <h3>Food Type</h3>

        <label>
          <input type="checkbox" />
          Veg
        </label>

        <label>
          <input type="checkbox" />
          Non-Veg
        </label>
      </div>

      <button className="apply-btn">
        Apply Filters
      </button>

    </aside>
  );
}

export default FilterSidebar;