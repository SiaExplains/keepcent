import React from 'react';

const Header = () => {
  return (
    <div className="et-header">
      <div className="et-header__center">
        <div className="et-logo et-hidden-xs">
          Expense Tracker <span>(1.0.0)</span>
        </div>
        &nbsp;
        <input className="et-header-search-bar" placeholder="Search for a transaction..." />
      </div>
    </div>
  );
};

export default Header;
