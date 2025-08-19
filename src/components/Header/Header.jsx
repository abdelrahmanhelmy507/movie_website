import { useState } from "react";
import "./header.css";

export default function Header({ search }) {
  const isDetailsPage = location.pathname.startsWith("/movie/");

  return (
    <header>
      <div className="container">
        <div className="header-content ">
          <a href="/"  rel="noopener noreferrer" className="watch-btn">
          <div className="icon">
            <img width={200} src="/logo.png" alt="" />
          </div>
        </a>
          <div className="search">
            {!isDetailsPage && (
              <input
                type="search"
                placeholder="ابحث ..."
                onChange={(e) => {
                  e.preventDefault();
                  search(e.target.value);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
