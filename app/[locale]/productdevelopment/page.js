"use client";
// import styles from "../../page.module.css";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";
import "./services.css";
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <NavBar />

      <section className="services-hero">
        <div className="floating-accents">
          <div className="accent accent1"></div>
          <div className="accent accent2"></div>
          <div className="accent accent3"></div>
        </div>

        <div className="animated-grid"></div>

        <div className="animated-circle"></div>

        <div className="services-container section-wrapper">
          {/* LEFT COLUMN */}
          <div className="left-column">
            <div className="top-line"></div>

            <h1>
              <span className="highlight">Transforming,</span><br /> businesses with <br />
              <span className="highlight">cloud-first</span> solutions.
            </h1>

            <button className="cta-btn">Let's work Together</button>

            <div className="video-box">
              <video
                src="/video.mov"
                controls
                muted
                playsInline
                className="services-video"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column">
            <div>
              <h3 className="section-label">Product Development</h3>
              <p>
                Scaled Solutions More than just a software development At Scaled Solutions, we understand the cost of revisions, so we will make sure that we take time to understand your business and expected solution before we code.
              </p>
            </div>

            <div>
              <ul className="gradient-icon-list">
                <li><a href="#sec1"><img src="/bullet-icons/api.png" alt="Cloud Strategy" />API Development</a></li>
                <li><a href="#sec2"><img src="/bullet-icons/app.png" alt="Cloud Strategy" />Enterprise Application</a></li>
                <li><a href="#sec3"><img src="/bullet-icons/data.png" alt="Cloud Strategy" />Data Integration</a></li>
                <li><a href="#sec4"><img src="/bullet-icons/legacy.png" alt="Cloud Strategy" />Legacy System</a></li>
                <li><a href="#sec5"><img src="/bullet-icons/middle.png" alt="Cloud Strategy" />Middleware Implementation</a></li>
                <li><a href="#sec6"><img src="/bullet-icons/migration.png" alt="Cloud Strategy" />Cloud Migration</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>




      {/* Card 1: Align Product Vision */}
      <section className="strategy-section" id="sec1">
        <div className="section-heading section-wrapper">
          <h2>
            Align <span className="highlight">Product Vision <br /></span> with Business Strategy
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Ensure the product concept directly supports the overarching goals of the business—whether that's
              market expansion, customer retention, revenue growth, or brand positioning. This step involves
              stakeholder alignment, market analysis, and competitive benchmarking to confirm the product is a
              strategic fit.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/align.jpg"
              alt="Product Strategy"
              className="strategy-image"
            />
          </div>
        </div>
      </section>

      {/* Card 2: Conduct Product Feasibility  */}
      <section className="strategy-section" id="sec2">
        <div className="section-heading section-wrapper">
          <h2>
            Conduct <span className="highlight">Product Feasibility <br /></span> and Profitability Analysis
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Before development begins, assess the commercial viability of the product. This includes market demand
              validation, cost estimation, pricing strategy, break-even analysis, and projected ROI. It helps to avoid
              sunk costs in unprofitable ventures.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/conduct.jpg"
              alt="Product Feasibility Analysis"
              className="strategy-image"
            />
          </div>
        </div>
      </section>

      {/* Card 3: Define Product Requirements */}
      <section className="strategy-section" id="sec3">
        <div className="section-heading section-wrapper">
          <h2>
            Define <span className="highlight">Product Requirements <br /></span> and Success Metrics
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Translate business goals into product-level requirements. Define target users, use cases, core
              functionalities, technical constraints, and key performance indicators (KPIs). This acts as the
              foundation for the design and development phases.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/define.jpg"
              alt="Product Requirements and Metrics"
              className="strategy-image"
            />
          </div>
        </div>
      </section>

      {/* Card 4:  Design and Prototype*/}
      <section className="strategy-section" id="sec4">
        <div className="section-heading section-wrapper">
          <h2>
            Design and <span className="highlight">Prototype <br /> </span>the Product
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Develop wireframes, UX/UI mockups, or early-stage prototypes to visualize the product. Validate
              assumptions through user testing and stakeholder feedback. This iterative design process helps reduce
              rework during development.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/design.jpg"
              alt="Product Design and Prototype"
              className="strategy-image"
            />
          </div>
        </div>
      </section>

      {/* Card 5: Execute Product Development */}
      <section className="strategy-section" id="sec5">
        <div className="section-heading section-wrapper">
          <h2>
            Execute <span className="highlight">Product <br /></span>Development
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Build the product using agile or hybrid methodologies. This involves cross-functional
              collaboration among developers, designers, testers, and product managers to deliver incremental
              releases that are testable and value-driven.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/execute.jpg"
              alt="Product Development"
              className="strategy-image"
            />
          </div>
        </div>
      </section>

      {/* Card 6: Implement Tech Innovation and Scalability Strategy */}
      <section className="strategy-section" id="sec6">
        <div className="section-heading section-wrapper">
          <h2>
            Implement <span className="highlight">Tech Innovation <br /></span>and Scalability Strategy 
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Integrate forward-looking technology choices (e.g., AI, microservices, cloud-native infrastructure)
              that align with long-term goals. Consider maintainability, scalability, and integration potential
              with existing systems.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/implement.jpg"
              alt="Tech Innovation and Scalability"
              className="strategy-image"
            />
          </div>
        </div>
      </section>


      {/* Card 7: Conduct Validation, Testing, and Go-to-Market Preparation */}
      <section className="strategy-section" id="sec7">
        <div className="section-heading section-wrapper">
          <h2>
            Conduct <span className="highlight">Validation, Testing,<br /></span> and Go-to-Market Preparation 
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Thoroughly test the product (functional, performance, and security testing). Align with marketing,
              sales, and support teams to create launch plans, onboarding materials, and support infrastructure.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/validation.jpg"
              alt="Product Validation and Testing"
              className="strategy-image"
            />
          </div>
        </div>
      </section>

      {/* Card 8: Launch and Monitor */}
      <section className="strategy-section" id="sec8">
        <div className="section-heading section-wrapper">
          <h2>
            Launch and<span className="highlight"> Monitor <br /></span>
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Release the product to users, monitor real-world performance, and gather feedback using analytics
              tools, support channels, and user surveys. Ensure operational readiness and rapid issue resolution
              post-launch.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/monitor.jpg"
              alt="Product Launch and Monitoring"
              className="strategy-image"
            />
          </div>
        </div>
      </section>

      {/* Card 9: Continuous Improvement and Iteration */}
      <section className="strategy-section" id="sec9">
        <div className="section-heading section-wrapper">
          <h2>
            Continuous <span className="highlight">Improvement <br /></span>
          and Iteration</h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Use insights from customer feedback, usage data, and market changes to guide regular updates. This
              could include feature enhancements, performance optimization, or usability refinements.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/continuous.jpg"
              alt="Continuous Improvement and Iteration"
              className="strategy-image"
            />
          </div>
        </div>
      </section>

      {/* Card 10: Drive Continuous Innovation */}
      <section className="strategy-section" id="sec10">
        <div className="section-heading section-wrapper">
          <h2>
            Drive <span className="highlight">Continuous  <br /></span>Innovation
          </h2>
        </div>

        <div className="strategy-container section-wrapper">
          {/* LEFT SIDE */}
          <div className="strategy-left">
            <p>
              Establish a framework to consistently explore new ideas, technologies, and user needs. Encourage a
              culture of experimentation, A/B testing, and trend analysis to stay ahead of competitors and
              changing market demands.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="strategy-right">
            <img
              src="/product-development/drive.jpg"
              alt="Continuous Innovation"
              className="strategy-image"
            />
          </div>
        </div>
      </section>



      <section className="migration-section" id="sec11">
        <h3>Cloud <span className="highlight">Migration</span></h3>
        <div className='card-wrapper'>
          {/* Card 1 */}
          <Link href="/en/cloudservices">
            <div className="card">
              <object
                type="image/svg+xml"
                data="/svgs/1.svg"
                className="svgElementMobile"
                aria-label="Animated SVG"
              />
              <div className="title">
                <h3>
                  <span>Clouds</span> Services
                </h3>
                <p>Together, we maximize the value of your data.</p>
                <div className="hr"></div>
                <svg
                  className="pb-row-services__service__icon z-1000" // ✅ use className instead of class
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/en/integrationservices">
            <div className="card">
              <object
                type="image/svg+xml"
                data="/svgs/3.svg"
                className="svgElementMobile"
                aria-label="Animated SVG"
              />
              <div className="title">
                <h3>
                  <span>Integration</span> Services
                </h3>
                <p>Together, we retrieve value from your data.</p>
                <div className="hr"></div>
                <svg
                  className="pb-row-services__service__icon z-1000"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <div className="card">
            <object
              type="image/svg+xml"
              data="/svgs/2.svg"
              className="svgElementMobile"
              aria-label="Animated SVG"
            />
            <div className="title">
              <h3>
                <span>Security</span> Services
              </h3>
              <p>Together, we visualize value from your data.</p>
              <div className="hr"></div>
              <svg
                className="pb-row-services__service__icon z-1000"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <Link href="/en/productdevelopment">
            <div className="card">
              <object
                type="image/svg+xml"
                data="/svgs/4.svg"
                className="svgElementMobile"
                aria-label="Animated SVG"
              />
              <div className="title">
                <h3>
                  <span>Product</span> Development
                </h3>
                <p>Together, we maximize the value of your data.</p>
                <div className="hr"></div>
                <svg
                  className="pb-row-services__service__icon z-1000"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>




      <NewFooter />
    </>
  );
}
