import React from "react";

const Header = (props) => {
  const handleInput = (e) => {
    const searchText = e.target.value;

    const matchedProducts = props.fishes.filter((product) =>
      product.strMeal.toLowerCase().includes(searchText.toLowerCase())
    );
    props.setMatched(matchedProducts);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-danger fixed-top mb-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                onChange={handleInput}
                class="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-success" type="submit">
                Search
              </button>
            </form>
            <button
              className="btn "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </nav>
      <div>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">...</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
