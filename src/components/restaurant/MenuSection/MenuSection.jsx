import "./MenuSection.css";

function MenuSection() {
  const menuItems = []; // Backend API આવશે

  return (
    <section className="menu-section">

      <div className="menu-header">
        <h2>Menu</h2>

        <input
          type="text"
          placeholder="Search food..."
        />
      </div>

      {menuItems.length === 0 ? (
        <div className="menu-empty">

          <h3>No Menu Available</h3>

          <p>
            This restaurant has not added any food items yet.
          </p>

        </div>
      ) : (
        <div className="menu-grid">
          {/* Food Cards આવશે */}
        </div>
      )}

    </section>
  );
}

export default MenuSection;