import "../../styles/bar-chart.css";
import "../../styles/common.css";

export function BarChartDemo() {
  return (
    <main>
      <h2 className="chart-header">Horizontal</h2>
      <svg width="650" height="450" className="chart width-auto height-auto">
        <g data-name="bounds" fontSize="14">
          <g data-name="bars">
            <rect
              width="160"
              height="50.189"
              y="308.302"
              fill="#4e79a7"
              data-value="16"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
            <rect
              width="410"
              height="50.189"
              y="236.604"
              fill="#f28e2c"
              data-value="41"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
            <rect
              width="240"
              height="50.189"
              y="164.906"
              fill="#e15759"
              data-value="24"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
            <rect
              width="500"
              height="50.189"
              y="93.208"
              fill="#76b7b2"
              data-value="50"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
            <rect
              width="200"
              height="50.189"
              y="21.509"
              fill="#59a14f"
              data-value="20"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
          </g>
          <g data-name="discrete-axis" textAnchor="end" transform="translate(120 30)">
            <path stroke="currentColor" d="M0 380L0 0"></path>
            <g transform="translate(0 333.396)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                ghost
              </text>
            </g>
            <g transform="translate(0 261.698)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                jalapeño
              </text>
            </g>
            <g transform="translate(0 190)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                habanero
              </text>
            </g>
            <g transform="translate(0 118.302)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                bell
              </text>
            </g>
            <g transform="translate(0 46.604)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                scotch
              </text>
            </g>
          </g>
          <g
            data-name="linear-axis"
            textAnchor="middle"
            transform="translate(120 30) translate(0 380)"
          >
            <path stroke="currentColor" d="M0 0L500 0"></path>
            <path stroke="currentColor" d="M0 0L0 6"></path>
            <text y="9" fill="currentColor" dy=".71em">
              0
            </text>
            <g transform="translate(50)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                5
              </text>
            </g>
            <g transform="translate(100)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                10
              </text>
            </g>
            <g transform="translate(150)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                15
              </text>
            </g>
            <g transform="translate(200)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                20
              </text>
            </g>
            <g transform="translate(250)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                25
              </text>
            </g>
            <g transform="translate(300)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                30
              </text>
            </g>
            <g transform="translate(350)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                35
              </text>
            </g>
            <g transform="translate(400)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                40
              </text>
            </g>
            <g transform="translate(450)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                45
              </text>
            </g>
            <g transform="translate(500)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                50
              </text>
            </g>
          </g>
        </g>
      </svg>

      <h2 className="chart-header">Vertical</h2>
      <svg width="650" height="450" className="chart width-auto height-auto">
        <g data-name="bounds" fontSize="14">
          <g data-name="bars">
            <rect
              width="66.038"
              height="121.6"
              x="28.302"
              y="258.4"
              fill="#4e79a7"
              data-value="16"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
            <rect
              width="66.038"
              height="311.6"
              x="122.642"
              y="68.4"
              fill="#f28e2c"
              data-value="41"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
            <rect
              width="66.038"
              height="182.4"
              x="216.981"
              y="197.6"
              fill="#e15759"
              data-value="24"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
            <rect
              width="66.038"
              height="380"
              x="311.321"
              fill="#76b7b2"
              data-value="50"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
            <rect
              width="66.038"
              height="152"
              x="405.66"
              y="228"
              fill="#59a14f"
              data-value="20"
              rx="5"
              ry="5"
              className="bar"
              transform="translate(120 30)"
            ></rect>
          </g>
          <g
            data-name="discrete-axis"
            textAnchor="middle"
            transform="translate(120 30) translate(0 380)"
          >
            <path stroke="currentColor" d="M0 0L500 0"></path>
            <g transform="translate(61.32)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                ghost
              </text>
            </g>
            <g transform="translate(155.66)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                jalapeño
              </text>
            </g>
            <g transform="translate(250)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                habanero
              </text>
            </g>
            <g transform="translate(344.34)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                bell
              </text>
            </g>
            <g transform="translate(438.68)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <text y="9" fill="currentColor" dy=".71em">
                scotch
              </text>
            </g>
          </g>
          <g data-name="linear-axis" textAnchor="end" transform="translate(120 30)">
            <path stroke="currentColor" d="M0 380L0 0"></path>
            <g transform="translate(0 380)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                0
              </text>
            </g>
            <g transform="translate(0 342)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                5
              </text>
            </g>
            <g transform="translate(0 304)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                10
              </text>
            </g>
            <g transform="translate(0 266)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                15
              </text>
            </g>
            <g transform="translate(0 228)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                20
              </text>
            </g>
            <g transform="translate(0 190)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                25
              </text>
            </g>
            <g transform="translate(0 152)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                30
              </text>
            </g>
            <g transform="translate(0 114)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                35
              </text>
            </g>
            <g transform="translate(0 76)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                40
              </text>
            </g>
            <g transform="translate(0 38)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                45
              </text>
            </g>
            <path stroke="currentColor" d="M0 0L-6 0"></path>
            <text x="-9" fill="currentColor" dy=".35em">
              50
            </text>
          </g>
        </g>
      </svg>
    </main>
  );
}
