import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* <!-- Preloader Start --> */}
      {/* <div className="se-pre-con"></div> */}
      {/* <!-- Preloader Ends -->


    <!-- Header 
    ============================================= --> */}
      <header id="home">
        <nav className="navbar navbar-default attr-border active-border logo-less small-pad navbar-sticky bootsnav">
          <div className="top-search">
            <div className="container">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="input-group-addon close-search">
                  <i className="fa fa-times"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <Link href="#" className="btn btn-dark border btn-md ">
                    login
                  </Link>
                </li>
                <li className="search">
                  <Link href="#" className="btn btn-theme  btn-sm ">
                    get started
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" href="index.html">
                <img src="/img/header-dark.png" className="logo" alt="Logo" />
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav navbar-left"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="dropdown">
                  <Link className="" href="/">
                    <img
                      src="/img/header-dark.png"
                      //   className="logo"
                      alt="Logo"
                    />
                  </Link>
                </li>
                <li className="dropdown">
                  <Link href="/venture">
                    Venture <span className="badge">new</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link href="/privateCredit">private credit</Link>
                </li>
                <li className="dropdown">
                  <Link href="#">real estate</Link>
                </li>
                <li className="dropdown">
                  <Link
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Resources
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <Link
                        href="investors.html"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        education
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="dropdown">
                          <Link href={""}>help center</Link>
                        </li>
                        <li className="dropdown">
                          <Link href="">article</Link>
                        </li>
                        <li className="dropdown">
                          <Link href="">course</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link
                        href="investors.html"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        getting started
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="dropdown">
                          <Link href={""}>why fundraiser</Link>
                        </li>
                        <li className="dropdown">
                          <Link href="">hoppw it woks</Link>
                        </li>
                        <li className="dropdown">
                          <Link href="">about us</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link
                        href="investors.html"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        about us
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="dropdown">
                          <Link href={""}>Investor letters </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
