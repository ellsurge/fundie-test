import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      {/* <!-- Start Banner 
    ============================================= --> */}
      <div className="banner-area">
        <div className="hero inc-top-heading slide animate_text">
          {/* <!-- Wrapper for slides --> */}
          <div className="  carousel-zoom">
            <div className="box-table shadow light">
              <div className="box-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="content fix-bottom ">
                        <h2 data-animation="animated slideInLeft">
                          Invest in a better alternative
                        </h2>
                        <p data-animation="animated slideInRight">
                          Build a portfolio of private assets like real estate,
                          private credit, and venture capital.
                        </p>

                        <a
                          data-animation="animated slideInUp"
                          className="btn btn-theme effect btn-md"
                          href="portal.html"
                        >
                          Sign up
                        </a>
                        <p data-animation="animated slideInRight">
                          <small>
                            Start investing in less than 5 minutes and with as
                            little as $10.
                          </small>
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="image">
                        <img src="/img/hero-phone.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Wrapper for slides -->

            <!-- Left and right controls --> */}
      </div>
      {/* <!-- End Banner -->
    <!-- Start Fun Fact Area 
    ============================================= --> */}
      <div className="fun-factor-box bg-dark text-center text-light default-padding">
        <div className="fun-fact-area">
          <div className="container">
            <div className="row">
              {/* <!-- Start About Content --> */}
              <div className="about-content content-left">
                <div className="col-md-6 info left">
                  <p>POWERING NEXT-GENERATION PORTFOLIOS</p>
                  <h1 className="large">2,110,397</h1>
                  <h3>people are using Fundrise to start investing smarter</h3>
                  <small>Figures as of 12/31/2023.</small>
                </div>
                <div className="col-md-6 right">
                  <div class="p-200 container bg-img-dotted-muted width-100">
                    <div class=" bg-dark display-flex justify-content-space-between align-items-center p-150 py-300-smo">
                      <div class="row-12-md ">
                        <div class=" align-items-center position-relative">
                          <div class=" testimonial-screen active-screen row-12-md ">
                            <p class="epsilon text-color-white ff-ivar-text font-weight-lighter font-style-italic line-height-150 text-align-center mt-0">
                              “Fundrise is opening the gates to this most
                              privileged of enclaves, marshaling a business
                              model that melds PE-like funds and fintech to help
                              people buy real estate stakes with investments as
                              low as $10.”
                            </p>
                            <p class="mt-100">
                              <svg
                                version="1.1"
                                viewBox="0 0 71 16"
                                class="text-color-dark-50 svg-icon svg-fill"
                                style={{ width: "auto", height: "1.25rem" }}
                              >
                                <title>Fortune</title>
                                <path
                                  pid="0"
                                  d="M9.674 3.65v8.7a3.69 3.69 0 107.379 0v-8.7a3.69 3.69 0 10-7.379 0zm2.641 8.7v-8.7a1.002 1.002 0 011.087-1.01.978.978 0 011.01 1.01v8.7a1.025 1.025 0 01-1.01 1.01 1.05 1.05 0 01-1.087-1.01zM38.335.155h-7.457v2.641h2.408v12.971h2.64V2.797h2.408V.154zm7.766 0V12.35a1.01 1.01 0 01-2.019 0V.155h-2.718V12.35a3.728 3.728 0 107.456 0V.155H46.1zm24.156 2.641V.156h-6.525v15.611h6.525v-2.64h-3.884v-4.04h2.486v-2.64h-2.486v-3.65h3.884zM28.393 15.767h-2.796l-1.942-7.379a2.12 2.12 0 001.708-2.097V3.884a1.064 1.064 0 00-1.087-1.088h-1.01v12.971h-2.64V.155h3.65a3.697 3.697 0 013.728 3.573v2.486A4.17 4.17 0 0126.53 9.63l1.864 6.136zM57.83.155V8.7L55.11.155h-2.718v15.612h2.718V8.155l2.486 7.612h2.951V.155H57.83zM.742.388V16h2.796V9.32h2.563V6.68H3.538V3.03h4.04V.387H.741z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </p>
                          </div>
                          {/* <div class=" testimonial-screen row-12-md ">
                            <p class="epsilon text-color-white ff-ivar-text font-weight-lighter font-style-italic line-height-150 text-align-center mt-0">
                              
                              “Real estate investing giant Fundrise breaks into
                              venture capital”
                            </p>
                            <p class="mt-100">
                              <svg
                                version="1.1"
                                viewBox="0 0 127 18"
                                class="text-color-dark-50 svg-icon svg-fill"
                                style={{ width: "auto", height: "1.25rem" }}
                              >
                                <title>TechCrunch</title>
                                <path
                                  pid="0"
                                  d="M24.09 6h11.769V0h-11.77v6zM.574 0v6h5.874v12h5.874V6h5.895V0H.574zM18.219 18h17.643v-6h-11.77V6H18.22v12zM50.86 4.532h-8.643v2.496h2.895v7.825h2.853V7.028h2.895V4.532zM54.112 6.944c-2.035 0-3.546 1.364-3.546 4.05 0 2.37 1.28 4.027 3.609 4.027 1.217 0 2.203-.315 3.147-.88l-1.007-1.7c-.777.398-1.322.545-2.014.545-.693 0-1.217-.377-1.322-1.238h4.552c.021-.125.021-.293.021-.524.021-2.874-1.3-4.28-3.44-4.28zm-1.091 3.147c.084-.776.42-1.175 1.028-1.175.776 0 1.049.399 1.175 1.175H53.02zM62.61 12.86c-.714 0-1.091-.629-1.091-1.867s.336-1.909 1.028-1.909c.566 0 .818.315 1.196 1.007l1.825-1.384c-.672-1.091-1.51-1.763-2.98-1.763-2.475 0-3.691 1.637-3.691 4.007 0 2.602 1.363 4.05 3.629 4.05 1.363 0 2.203-.525 3.105-1.847l-1.679-1.322c-.503.756-.839 1.028-1.342 1.028zM71.756 6.944c-.923 0-1.469.315-1.951.672V4.112l-2.664 1.07v9.692h2.664v-4.426c0-.965.336-1.238.902-1.238.566 0 .881.273.881 1.259v4.405h2.664v-4.74c0-2.036-.818-3.19-2.496-3.19zM80.65 12.525c-1.238 0-1.742-1.259-1.742-2.832 0-1.574.525-2.832 1.72-2.832.945 0 1.301.608 1.658 1.573l2.601-1.028c-.713-1.951-1.72-3.042-4.259-3.042-2.769 0-4.72 2.014-4.72 5.329 0 3.063 1.636 5.328 4.7 5.328 2.454 0 3.608-1.321 4.3-2.664l-2.412-1.28c-.567.965-.944 1.448-1.847 1.448zM89.188 7.679v-.567h-2.665v7.741h2.665v-4.216c0-.944.398-1.26 1.049-1.26.524 0 .902.274 1.237.651l.63-2.748c-.315-.189-.692-.336-1.259-.336-.692 0-1.217.294-1.657.735zM97.79 11.539c0 .965-.336 1.237-.881 1.237-.546 0-.881-.272-.881-1.258V7.112h-2.665v4.741c0 2.035.819 3.168 2.518 3.168.902 0 1.468-.315 1.93-.671v.524h2.664V7.133h-2.664v4.406M106.998 6.944c-.923 0-1.468.315-1.951.672V7.09h-2.664v7.741h2.664v-4.426c0-.965.336-1.238.902-1.238.567 0 .881.273.881 1.259v4.405h2.665v-4.74c0-1.994-.798-3.148-2.497-3.148zM114.783 12.86c-.713 0-1.091-.629-1.091-1.867s.336-1.909 1.007-1.909c.567 0 .818.315 1.196 1.007l1.825-1.384c-.671-1.091-1.51-1.763-2.979-1.763-2.475 0-3.692 1.637-3.692 4.007 0 2.602 1.363 4.05 3.629 4.05 1.364 0 2.203-.525 3.105-1.847l-1.678-1.322c-.462.756-.818 1.028-1.322 1.028zM123.93 6.944c-.923 0-1.469.315-1.951.672V4.112l-2.665 1.07v9.692h2.665v-4.426c0-.965.335-1.238.902-1.238.566 0 .881.273.881 1.259v4.405h2.664v-4.74c.021-2.036-.797-3.19-2.496-3.19z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </p>
                          </div>
                          <div class=" testimonial-screen row-12-md ">
                            <p class="epsilon text-color-white ff-ivar-text font-weight-lighter font-style-italic line-height-150 text-align-center mt-0">
                              
                              “A startup that wants to open up the single-family
                              home rental market to small investors is ramping
                              up its home purchases, after winning the backing
                              of Goldman Sachs Group Inc.”
                            </p>
                            <p class="mt-100">
                              <svg
                                version="1.1"
                                viewBox="0 0 54 30"
                                class="text-color-dark-50 svg-icon svg-fill"
                                style={{ width: "auto", height: "1.25rem" }}
                              >
                                <title>Wall Street Journal</title>
                                <path
                                  pid="0"
                                  d="M9.113.917v.57l.53.121c.813.204.935.692 1.26 2.238l.847 4.346-2.36 12.694-3.214-15.95c-.367-1.75-.489-3.052.814-3.337l.61-.121V.916H0v.57l.773.204c.774.203 1.099.569 1.628 2.97l5.167 24.452H8.9l3.458-18.471 3.833 18.471h1.059l4.964-23.696c.57-2.725.814-3.5 1.792-3.75l.772-.205V.917h-5.583v.57l.854.162c1.22.244 1.505 1.017.935 4.15l-3.043 15.087-3.084-15.95c-.333-1.587-.529-3.052.814-3.296l.895-.162v-.57L9.113.916zm36.204.076v.57l1.016.245c.895.203 1.261.529 1.261 1.668v19.733c0 2.197 0 5.086-2.279 5.086-1.302 0-2.317-1.14-2.237-1.913.081-1.26 2.279-1.18 2.4-3.214.123-1.416-.773-2.083-1.668-2.197-1.26-.163-2.807.895-2.848 3.01-.04 2.726 1.75 5.207 4.8 5.207 3.375 0 5.583-2.276 5.583-6.63V3.515c0-1.14.286-1.506 1.1-1.708l.888-.254v-.57l-8.016.01zM31.608.82c-3.458 0-5.41 2.89-5.41 6.672 0 7.04 9.073 9.765 9.073 16.113 0 3.01-1.262 4.678-3.084 4.678-2.724 0-4.679-3.294-5.166-8.543h-.61v9.277h.488c.407-1.334.936-1.465 1.383-1.465.774 0 1.586 1.625 3.946 1.625 3.621 0 5.98-3.131 5.982-7.446 0-8.463-9.073-10.538-9.073-16.6 0-1.384.406-3.417 2.441-3.417 2.93 0 4.192 3.865 4.68 8.544h.61V.983h-.489c-.203.895-.569 1.302-1.098 1.302-.936 0-1.417-1.464-3.662-1.464L31.61.82zm6.55 7.98v.1l.02-.013-.01-.083-.01-.005z"
                                  fill="currentColor"
                                  fill-rule="nonzero"
                                ></path>
                              </svg>
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End About --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Fun Fact Area --> */}
      {/*
          <!-- Start Why Choose Us
    ============================================= --> */}
      <div className="choose-us-area default-padding">
        {/* <!-- Fixed Shape --> */}
        <div className="fixed-shape">
          <img src="/img/building-bg.png" alt="Shape" />
        </div>
        {/* <!-- End Fixed Shape --> */}
        <div className="container">
          <div className="container center row">
            <div className="w-8 center">
              <img src="/img/people-graphs-collage.png" alt="Thumb" />
            </div>
            <div className="w-5 ml-auto info right">
              <div className="content">
                <h1 className="large2">
                  Tearing down barriers to the best investments
                </h1>
                <p>
                  For almost a century, regulatory barriers made it difficult
                  for individuals to invest in private markets, giving
                  billion-dollar institutions preferred access. The result has
                  been that most investors have been limited to public markets
                  and excluded from private investments—ranging from real estate
                  to venture capital. Technology is finally disrupting this
                  status quo.1 Enter: Fundrise, America’s largest
                  direct-to-consumer private markets manager. We built our
                  technology platform to bridge the barrier. Software allows us
                  to achieve the scale of institutions without the bureaucracy.
                  Combining our technology and investment expertise, we are
                  pioneering a new model to build you a better portfolio.
                </p>
                <br />
                <small>
                  1 McKinsey “US wealth management: A growth agenda for the
                  coming decade”
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us -->

      
    <!-- Start Our About */}
      {/* ============================================= --> */}
      <div className=" bg-dark about-area default-padding text-light">
        <div className="container">
          <div className="row">
            {/* <!-- Start About Content --> */}
            <div className="about-content content-left">
              <div className="col-md-6 info">
                <p>OUR HISTORICAL CLIENT RETURNS</p>
                <h2 className="large3">Invest without compromise</h2>
                <p>
                  Our $7+ billion investment portfolio* aims to harness the most
                  powerful long-term drivers of the U.S. economy. In
                  today`&apos;`s macroeconomic environment, we believe the
                  Fundrise portfolio is as well-positioned as any in the world
                  to deliver stable, market-beating returns.
                </p>
                <br />
                <a className="text-theme">See all historical client returns</a>
              </div>
              <div className="col-md-6 thumb">
                <div class="returns-snapshot">
                  <h3 class="heading-5 text-align-center">
                    Recent Client Returns
                  </h3>
                  <div>
                    <table class="fundrise-comparison-table table text-color-dark-100 my-200 epsilon">
                      <colgroup>
                        <col class="table-column--years" />
                        <col class="table-column--fundrise" />
                        <col class="table-column--reits" />
                        <col class="table-column--stocks" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <span class="show-for-sr">Year</span>
                          </th>
                          <th class="fundrise-returns-column">
                            <span class="logo-wrap px-100">
                              <svg
                                version="1.1"
                                viewBox="0 0 75 42"
                                class="mr-25 svg-icon svg-fill"
                                style={{ width: " 75px", height: "42px" }}
                              >
                                <path
                                  pid="0"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M.422 29.462v9.789h1.862v-3.916h4.852v-1.71H2.284v-2.452h5.47v-1.71H.422zM68.79 37.568v-2.41h4.825v-1.684H68.79v-2.329h5.443v-1.683h-7.305v9.789H74.3v-1.683h-5.51zM16.171 35.085c0 1.672-.828 2.593-2.333 2.593-1.492 0-2.346-.97-2.346-2.662v-5.553H9.629v5.622c0 2.743 1.524 4.317 4.181 4.317 2.684 0 4.224-1.604 4.224-4.4v-5.539H16.17v5.622zM27.247 35.947l-5-6.45-.026-.034h-1.696v9.787h1.836v-6.676l5.15 6.644.027.032h1.543v-9.787h-1.834v6.484zM35.399 37.54h-1.811v-6.367h1.81c1.916 0 3.255 1.315 3.255 3.197 0 1.896-1.309 3.17-3.254 3.17zm0-8.077h-3.672v9.787h3.672c3.012 0 5.2-2.063 5.2-4.907 0-2.827-2.188-4.88-5.2-4.88zM53.188 39.25h1.861v-9.787h-1.861v9.788zM61.608 33.504c-1.88-.448-2.216-.768-2.216-1.441 0-.64.595-1.069 1.48-1.069.847 0 1.684.318 2.56.973l.071.052 1.005-1.415-.063-.051c-1.029-.826-2.189-1.227-3.545-1.227-1.985 0-3.37 1.187-3.37 2.888 0 1.831 1.148 2.456 3.268 2.968 1.802.416 2.106.768 2.106 1.4 0 .69-.636 1.137-1.619 1.137-1.08 0-2-.379-2.98-1.229l-.068-.057-1.126 1.339.062.056a6.025 6.025 0 004.071 1.56c2.14 0 3.522-1.166 3.522-2.97 0-1.524-.915-2.368-3.158-2.914M48.605 35.573c1.447-.44 2.242-1.493 2.242-2.974 0-1.935-1.403-3.136-3.66-3.136h-4.374v9.788h1.862v-8.078h2.375c1.229 0 1.907.54 1.907 1.522 0 .946-.726 1.535-1.894 1.535h-.402v1.668L49 39.214l.027.037h2.203l-2.623-3.678z"
                                  fill="#22262A"
                                ></path>
                                <path
                                  pid="1"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M33.066 20.869V7.35c0-.461.371-.836.829-.836h8.285c.458 0 .828.375.828.836v13.526c-1.599-.1-3.264-.15-4.97-.15-1.707 0-3.373.05-4.972.142zm1.658-6.83h2.485v4.18h-2.485v-4.18zm4.142 0h2.485v4.18h-2.485v-4.18zm-4.142-5.852h2.485v4.18h-2.485v-4.18zm4.142 0h2.485v4.18h-2.485v-4.18zM44.668 20.994V1.5c0-.462.37-.836.828-.836h8.277c.458 0 .829.374.829.836v21.15c-2.651-.761-6.073-1.346-9.934-1.656zm4.143-6.955v4.18h-2.486v-4.18h2.486zm4.142 0v4.18h-2.486v-4.18h2.486zm-4.142-5.852v4.18h-2.486v-4.18h2.486zm4.142 0v4.18h-2.486v-4.18h2.486zm-4.142-5.852v4.18h-2.486v-4.18h2.486zm4.142 0v4.18h-2.486v-4.18h2.486zM21.469 22.641v-9.438c0-.462.37-.836.828-.836h8.285c.458 0 .829.374.829.836v7.783c-3.87.31-7.291.894-9.942 1.655zm1.657-8.602h2.485v4.18h-2.485v-4.18zm4.142 0h2.486v4.18h-2.486v-4.18z"
                                  fill="#F4633A"
                                ></path>
                              </svg>
                              <sup class="logo-superscript">1</sup>
                            </span>
                          </th>
                          <th>
                            Public REITs<sup>2</sup>
                          </th>
                          <th>
                            S&amp;P 500<sup>3</sup>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>2023</th>
                          <td class="fundrise-returns-td text-color-red">
                            -7.45%
                          </td>
                          <td class="text-color-green">11.48%</td>
                          <td class="text-color-green">26.29%</td>
                        </tr>
                        <tr>
                          <th>2022</th>
                          <td class="fundrise-returns-td text-color-green">
                            1.50%
                          </td>
                          <td class="text-color-red">-25.10%</td>
                          <td class="text-color-red">-18.11%</td>
                        </tr>
                        <tr>
                          <th>2021</th>
                          <td class="fundrise-returns-td text-color-green">
                            22.99%
                          </td>
                          <td class="text-color-green">39.88%</td>
                          <td class="text-color-green">28.71%</td>
                        </tr>
                        <tr>
                          <th>2020</th>
                          <td class="fundrise-returns-td text-color-green">
                            7.31%
                          </td>
                          <td class="text-color-red">-5.86%</td>
                          <td class="text-color-green">18.40%</td>
                        </tr>
                        <tr>
                          <th>2019</th>
                          <td class="fundrise-returns-td text-color-green">
                            9.16%
                          </td>
                          <td class="text-color-green">28.07%</td>
                          <td class="text-color-green">31.49%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End About --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Our About -->

*/}
      {/* <!-- Start Our About
    ============================================= --> */}
      <div class="about-area solid default-padding bg-color-greige-110">
        <div class="container">
          <div class="about-items">
            <div class="row item-flex center info-card p-20 ">
              <div class="col-5-md col-4-lg info-card-content bg-light p-10 card-up">
                <p class="overline mb-100">Real estate</p>
                <h3 class="heading-1">Invest in the real economy</h3>
                <p class="delta-lg line-height-150">
                  Fundrise is one of the 50 largest real estate private equity
                  investors in the world by total annual deployment — deploying
                  more than $1 billion of capital annually in 2021 and 2022. Our
                  portfolio is largely composed of 20,000+ well-located
                  residential units and eCommerce-centric industrial assets.
                </p>
                <a
                  data-v-c2508f6a=""
                  href="/real-estate-strategies"
                  target="_self"
                  class="cta-link--rust epsilon delta-lg display-inline-block mt-200"
                >
                  Explore our real estate portfolio
                  <svg
                    data-v-c2508f6a=""
                    version="1.1"
                    viewBox="0 0 24 24"
                    class="ml-25 svg-icon svg-fill"
                  >
                    <path
                      pid="0"
                      d="M16.388 6.93l-1.66 1.5L17.573 11H2v2h15.573l-2.845 2.57 1.66 1.5L22 12l-5.612-5.07z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="col-md-10 card-img ">
                <img className="sqr-img" src="/img/content-1.png" />
              </div>
            </div>

            <div class="row item-flex center info-card p-20 ">
              <div class="col-5-md col-4-lg info-card-content bg-light p-10 card-up-i">
                <p class="overline mb-100">tVENTURE CAPITAL</p>
                <h3 class="heading-1">
                  Build a portfolio of tomorrow’s tech giants
                </h3>
                <p class="delta-lg line-height-150">
                  Investing in high-growth private technology companies has
                  proven to be one of the best performing strategies of the last
                  50 years. Our growth equity fund targets mid-to-late stage
                  companies in sectors like Modern Data Infrastructure, FinTech,
                  and AI/ML.
                </p>
                <a
                  data-v-c2508f6a=""
                  href="/real-estate-strategies"
                  target="_self"
                  class="cta-link--rust epsilon delta-lg display-inline-block mt-200"
                >
                  Explore our real venture portfolio
                  <svg
                    data-v-c2508f6a=""
                    version="1.1"
                    viewBox="0 0 24 24"
                    class="ml-25 svg-icon svg-fill"
                  >
                    <path
                      pid="0"
                      d="M16.388 6.93l-1.66 1.5L17.573 11H2v2h15.573l-2.845 2.57 1.66 1.5L22 12l-5.612-5.07z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="col-md-10 card-img-i ">
                <img className="sqr-img" src="/img/content-2.png" />
              </div>
            </div>
            <div class="row item-flex center info-card p-20">
              <div class="col-5-md col-4-lg info-card-content bg-light p-10 card-up">
                <p class="overline mb-100">PRIVATE CREDIT</p>
                <h3 class="heading-1">
                  Capitalize on today’s lending environment
                </h3>
                <p class="delta-lg line-height-150">
                  Skyrocketing interest rates have created broad credit market
                  dislocations and a potential liquidity crisis. The result is
                  arguably the most attractive, risk-adjusted private credit
                  investing opportunity of the last few decades.
                </p>
                <a
                  data-v-c2508f6a=""
                  href="/real-estate-strategies"
                  target="_self"
                  class="cta-link--rust epsilon delta-lg display-inline-block mt-200"
                >
                  Explore our PRIVATE CREDIT portfolio
                  <svg
                    data-v-c2508f6a=""
                    version="1.1"
                    viewBox="0 0 24 24"
                    class="ml-25 svg-icon svg-fill"
                  >
                    <path
                      pid="0"
                      d="M16.388 6.93l-1.66 1.5L17.573 11H2v2h15.573l-2.845 2.57 1.66 1.5L22 12l-5.612-5.07z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="col-md-10 card-img ">
                <img
                  className="sqr-img"
                  src="https://d10cq78zmnjvsx.cloudfront.net/images/marketing-site/waypoint-spotlight.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Our About --> */}
      {/* other new section starting? */}
      <section class="explore-technology-container marketing-section bg-dark text-color-greige bg-img-dotted-waves">
        <article class="container">
          <div class="display-flex justify-content-space-between flex-wrap-wrap-smo gap-900-md gap-400-smo align-items-flex-end">
            <div class="col-7-md">
              <h2 class="heading-xl mb-200-md mb-150-smo text-color-white">
                High-performance&nbsp; technology
              </h2>
              <p
                data-v-161f229a=""
                class="body-xl mb-200-md mb-150-smo mt-50-md text-color-white"
              >
                We’ve spent 10+ years systematically replacing the industry
                standard of spreadsheets, PDFs, and expensive 3rd-party vendors
                with API-driven, fully integrated investor servicing, fund
                management, and asset management software.
              </p>
              <p data-v-161f229a="" class="body-lg text-color-white">
                <strong data-v-161f229a="">
                  Our end-to-end, fully integrated technology platform is an
                  industry first,
                </strong>
                drastically reducing operating costs, enabling sophisticated use
                of data, and delivering improved performance management. The
                results are dramatic:
              </p>
              <ul
                data-v-161f229a=""
                class="body-lg ul features-list ml-50 mt-250-md mt-0-smo"
              >
                <li data-v-161f229a="">
                  Unprecedented real-time oversight &amp; reporting
                </li>
                <li data-v-161f229a="">
                  Low fees, with no promote or carried interest
                </li>
                <li data-v-161f229a="">Virtually unlimited scale</li>
                <li data-v-161f229a="">Unprecedented convenience</li>
                <li data-v-161f229a="">Better expected net returns</li>
              </ul>
              <a
                href="/why-fundrise"
                target="_self"
                class="button button-outline-reversed mt-200-md mt-150-smo width-100-smo"
              >
                Learn about our technology
              </a>
            </div>
            <div class="col-4-md">
              <div data-v-6001103a="" data-v-161f229a="">
                <ul data-v-6001103a="" class="mb-200-md mb-100-smo">
                  <li data-v-6001103a="" class="bb border-color-reversed">
                    <h3
                      data-v-6001103a=""
                      class="heading-1 position-relative font-weight-lighter text-color-white"
                    >
                      Basis
                      <sup data-v-6001103a="" class="position-absolute tm zeta">
                        TM
                      </sup>
                    </h3>
                    <p
                      data-v-6001103a=""
                      class="text-color-dark-40 mt-50 mb-200"
                    >
                      An operating system for real estate asset management
                    </p>
                  </li>
                  <li
                    data-v-6001103a=""
                    class="mt-200 bb border-color-reversed"
                  >
                    <h3
                      data-v-6001103a=""
                      class="heading-1 position-relative font-weight-lighter text-color-white"
                    >
                      Cornice
                      <sup data-v-6001103a="" class="position-absolute tm zeta">
                        TM
                      </sup>
                    </h3>
                    <p
                      data-v-6001103a=""
                      class="text-color-dark-40 mt-50 mb-200"
                    >
                      An operating system for investor servicing and fund
                      management
                    </p>
                  </li>
                  <li data-v-6001103a="" class="mt-200">
                    <h3
                      data-v-6001103a=""
                      class="heading-1 position-relative font-weight-lighter text-color-white"
                    >
                      Equitize
                      <sup data-v-6001103a="" class="position-absolute tm zeta">
                        TM
                      </sup>
                    </h3>
                    <p data-v-6001103a="" class="text-color-dark-40 mt-50">
                      A fintech platform to provide more flexible equity funding
                      for the best technology companies and the teams who build
                      them.
                    </p>
                  </li>
                </ul>
                <a
                  data-v-6001103a=""
                  href="https://equitize.app/"
                  target="_blank"
                  class="cta-link delta"
                >
                  Learn more
                  <svg
                    data-v-6001103a=""
                    version="1.1"
                    viewBox="0 0 24 24"
                    class="ml-25 mt-25 svg-icon svg-fill"
                  >
                    <path
                      pid="0"
                      d="M16.388 6.93l-1.66 1.5L17.573 11H2v2h15.573l-2.845 2.57 1.66 1.5L22 12l-5.612-5.07z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* other new section ending */}
      {/*
    <!-- Start Our Services
    ============================================= --> */}
      <div className="modern-services-area bg-gray default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="site-heading text-center">
                {/* <h4></h4> */}
                <h2>Ways to invest</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="services-box text-center">
              {/* <!-- Single Item --> */}
              <div className="single-item col-md-4 col-sm-6">
                <div className="item">
                  <div className="content">
                    <h4>Personal investment account</h4>
                    <p>
                      Open a standard account and build a portfolio of
                      alternative investments.
                    </p>
                    <a href="solution-overview.html">
                      open youre account <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Item -->
                    <!-- Single Item --> */}
              <div className="single-item col-md-4 col-sm-6">
                <div className="item">
                  <div className="content">
                    <h4>Tax-advantaged investing</h4>
                    <p>
                      Roll over an existing retirement account or open a new
                      Traditional or Roth IRA.
                    </p>
                    <a href="financial-planner.html">
                      Invest in your retirement{" "}
                      <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Item -->
                    <!-- Single Item --> */}
              <div className="single-item col-md-4 col-sm-6">
                <div className="item">
                  <div className="content">
                    <h4>Through your advisor</h4>
                    <p>
                      Work with an RIA? We can give them access to invest on
                      your behalf.
                    </p>
                    <a href="investment-solution.html">
                      Learn more <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Item -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Our Services -->*/}

      {/* // new other stuff  */}

      <div class="container display-flex flex-wrap-wrap align-items-center">
        <article class="col-12-smo col-6-md">
          <h2 class="heading-1">Make your move</h2>
          <ul class="checkmark-list mt-150">
            <li class="delta-smo mb-100 line-height-100">
              <svg
                version="1.1"
                viewBox="0 0 16 16"
                class="checkmark-icon-thin text-color-dark-100 mr-50 text-color-current-color svg-icon svg-fill"
                style={{ width: "24px", height: "24px" }}
              >
                <path
                  pid="0"
                  stroke="currentColor"
                  stroke-width="2.5"
                  fill="none"
                  d="M1 8l4 4L15 2"
                ></path>
              </svg>
              Low fees{" "}
            </li>
            <li class="delta-smo mb-100 line-height-100">
              <svg
                version="1.1"
                viewBox="0 0 16 16"
                class="checkmark-icon-thin text-color-dark-100 mr-50 text-color-current-color svg-icon svg-fill"
                style={{ width: "24px", height: "24px" }}
              >
                <path
                  pid="0"
                  stroke="currentColor"
                  stroke-width="2.5"
                  fill="none"
                  d="M1 8l4 4L15 2"
                ></path>
              </svg>
              Flexible minimums{" "}
            </li>
            <li class="delta-smo mb-100 line-height-100">
              <svg
                version="1.1"
                viewBox="0 0 16 16"
                class="checkmark-icon-thin text-color-dark-100 mr-50 text-color-current-color svg-icon svg-fill"
                style={{ width: "24px", height: "24px" }}
              >
                <path
                  pid="0"
                  stroke="currentColor"
                  stroke-width="2.5"
                  fill="none"
                  d="M1 8l4 4L15 2"
                ></path>
              </svg>
              Quarterly liquidity{" "}
            </li>
          </ul>
          <a
            href="/get-started"
            target="_self"
            class="get-started-link btn mt-400 mt-200-smo btn-theme"
          >
            Start investing
          </a>
        </article>
        <div class="col-10-smo col-offset-1-smo col-6-md mt-300-smo">
          <img
            src="https://d10cq78zmnjvsx.cloudfront.net/images/marketing-site/three-iphones-with-fundrise-open.png"
            alt="graphical user interface, application"
            class=""
            data-uw-rm-alt-original=""
            data-uw-rm-alt="BE"
          />
        </div>
      </div>
      {/* // new other stuff end */}

      {/* final stage  */}
      <section
        data-v-c4518f76=""
        data-v-d73e034c=""
        class="marketing-section text-color-white text-align-center-smo bg-dark pb-0 pt-300-md pt-0-smo"
      >
        <article data-v-c4518f76="" class="container grid py-400 px-300-smo">
          <div
            data-v-c4518f76=""
            class="col-12 col-7-md display-flex align-items-center justify-content-center-smo br-dark-70-md"
          >
            <img
              data-v-c4518f76=""
              src="https://d10cq78zmnjvsx.cloudfront.net/images/marketing-site/download-app-qr-code.png"
              alt="Image of a QR code that links to an app store to download the Fundrise app"
              class="qr-code"
              data-uw-rm-alt-original="Image of a QR code that links to an app store to download the Fundrise app"
              data-uw-rm-alt="ALT"
            />
            <div data-v-c4518f76="" class="mr-150-md">
              <h2
                data-v-c4518f76=""
                class="ff-ivar-display beta line-height-125 font-weight-lighter text-color-white"
              >
                Diversification in&nbsp;the palm of your&nbsp;hand
              </h2>
              <p data-v-c4518f76="" class="delta  text-color-white">
                Scan the code to download the app.
              </p>
            </div>
          </div>
          <div
            data-v-c4518f76=""
            class="app-reviews-container mt-300-smo col-12 col-5-md display-flex justify-content-space-between justify-content-center-smo align-items-flex-start flex-wrap-wrap-smo"
          >
            <div
              data-v-c4518f76=""
              class="app-store-info-container display-flex flex-direction-column justify-content-center-smo justify-content-space-between-md align-items-center"
            >
              <svg
                data-v-c4518f76=""
                version="1.1"
                viewBox="0 0 27 32"
                class="svg-icon svg-fill"
                style={{ width: "auto", height: "2rem" }}
              >
                <path
                  pid="0"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.458 5.118c1.158-1.383 1.74-2.877 1.74-4.478 0-.212-.01-.426-.034-.64-.807.042-1.665.288-2.572.733-.909.451-1.658 1.017-2.248 1.698-1.18 1.344-1.845 2.988-1.845 4.525 0 .212.014.414.037.606 1.834.15 3.524-.8 4.922-2.444zm6.167 22.913a17.434 17.434 0 001.71-3.093c.198-.474.384-.968.561-1.484A7.24 7.24 0 0124.693 22c-1.447-1.349-2.183-3.048-2.204-5.09-.024-2.62 1.16-4.664 3.553-6.123-1.337-1.912-3.347-2.974-6.023-3.19-.988-.085-2.193.129-3.621.646-1.51.558-2.402.837-2.665.837-.351 0-1.153-.239-2.402-.71-1.253-.47-2.26-.71-3.03-.71a7.757 7.757 0 00-3.916 1.112A8.14 8.14 0 001.49 11.72C.566 13.27.105 15.12.105 17.264c0 1.872.342 3.806 1.024 5.803.636 1.849 1.448 3.47 2.436 4.87.92 1.309 1.69 2.233 2.304 2.772.963.901 1.927 1.33 2.895 1.288.636-.021 1.468-.24 2.501-.662 1.032-.418 1.996-.626 2.896-.626.857 0 1.795.208 2.815.627 1.017.42 1.89.628 2.615.628 1.009-.024 1.951-.44 2.83-1.255.568-.495 1.305-1.388 2.204-2.678z"
                  fill="#fff"
                ></path>
              </svg>

              <p data-v-c4518f76="" class="m-0  text-color-white">
                26.5k app reviews
              </p>
            </div>
            <div
              data-v-c4518f76=""
              class="app-store-info-container display-flex flex-direction-column justify-content-center-smo justify-content-space-between-md align-items-center"
            >
              <svg
                data-v-c4518f76=""
                version="1.1"
                viewBox="0 0 82 32"
                class="svg-icon svg-fill"
                style={{ width: "auto", height: "2rem" }}
              >
                <path
                  pid="0"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.5 26c3.582 0 6.5-2.757 6.5-6.5 0-3.768-2.918-6.5-6.5-6.5S22 15.733 22 19.5c0 3.743 2.918 6.5 6.5 6.5zm0-10.438c1.963 0 3.655 1.6 3.655 3.938 0 2.313-1.692 3.939-3.655 3.939-1.963 0-3.654-1.623-3.654-3.939 0-2.338 1.691-3.938 3.654-3.938zM42.498 26c3.582 0 6.5-2.758 6.5-6.5 0-3.769-2.918-6.5-6.5-6.5-3.581 0-6.5 2.734-6.5 6.5 0 3.742 2.919 6.5 6.5 6.5zm0-10.439c1.963 0 3.655 1.6 3.655 3.939 0 2.312-1.692 3.939-3.655 3.939-1.963 0-3.654-1.624-3.654-3.94 0-2.338 1.691-3.938 3.654-3.938zM63 25.176V13.4h-2.828v1.068h-.104c-.67-.772-1.954-1.467-3.571-1.467C53.107 13 50 15.88 50 19.584c0 3.677 3.106 6.535 6.497 6.535 1.62 0 2.904-.695 3.571-1.491h.104v.944c0 2.51-1.385 3.845-3.62 3.845-1.822 0-2.953-1.26-3.415-2.328l-2.593 1.044a6.454 6.454 0 006.011 3.867C60.047 32 63 30.02 63 25.176zm-6.238-9.59c2.027 0 3.62 1.689 3.62 4 0 2.286-1.593 3.951-3.62 3.951-2.054 0-3.776-1.665-3.776-3.952 0-2.31 1.722-4 3.776-4z"
                  fill="#fff"
                ></path>
                <path pid="1" d="M68.002 6v19h-3V6h3z" fill="#fff"></path>
                <path
                  pid="2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M80.879 23.12l-2.218-1.478c-.739 1.085-1.748 1.8-3.203 1.8-1.452 0-2.487-.666-3.153-1.97l8.697-3.599-.296-.738c-.54-1.45-2.192-4.135-5.568-4.135-3.352 0-6.136 2.635-6.136 6.5 0 3.646 2.76 6.5 6.456 6.5 2.98 0 4.705-1.823 5.42-2.88zm-3.23-6.228l-5.813 2.412c-.073-2.509 1.948-3.79 3.4-3.79 1.132 0 2.094.566 2.414 1.378z"
                  fill="#fff"
                ></path>
                <path
                  pid="3"
                  d="M10.41 17.482v-2.869h9.45c.092.5.14 1.092.14 1.732 0 2.152-.575 4.814-2.429 6.71C15.768 24.976 13.464 26 10.413 26 4.756 26 0 21.287 0 15.5 0 9.715 4.756 5 10.413 5c3.129 0 5.358 1.257 7.033 2.894l-1.979 2.024c-1.2-1.152-2.828-2.049-5.057-2.049-4.13 0-7.361 3.406-7.361 7.632 0 4.225 3.23 7.63 7.36 7.63 2.68 0 4.206-1.1 5.183-2.1.793-.811 1.315-1.97 1.52-3.552l-6.702.003z"
                  fill="#fff"
                ></path>
              </svg>

              <p data-v-c4518f76="" class="m-0  text-color-white">
                2.64k app reviews
              </p>
            </div>
          </div>
          <p
            data-v-c4518f76=""
            class="col-12 mt-500 eta text-align-center text-color-fundrise-greige"
          >
            <a
              data-v-c4518f76=""
              class="text-decoration-underline text-color-fundrise-greige"
              data-uw-rm-kbnav="anohref"
              tabindex="0"
            >
              {" "}
              Learn more
            </a>{" "}
            about the assumptions in this section, or view our{" "}
            <a
              data-v-c4518f76=""
              href="/legal/disclosure#social-media-disclosure"
              target="_blank"
              class="text-decoration-underline text-color-fundrise-greige"
              aria-label="full disclosure - open in a new tab"
              data-uw-rm-ext-link=""
              uw-rm-external-link-id="https://fundrise.com/legal/disclosure#social-media-disclosure$fulldisclosure"
            >
              full disclosure
            </a>
            .{" "}
          </p>
        </article>
      </section>
      {/* finala stagew end */}
    </>
  );
}
