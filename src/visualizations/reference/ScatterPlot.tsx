import "../../styles/common.css";

export function ScatterPlotDemo() {
  return (
    <main>
      <h2 className="chart-header">Scatter Plot</h2>
      <svg width="650" height="450" className="chart width-auto height-auto">
        <g data-name="bounds" transform="translate(0,0)">
          <g data-name="linear-axis" textAnchor="end" transform="translate(45 30)">
            <path stroke="currentColor" d="M0 380L0 0"></path>
            <g transform="translate(0 380)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                0
              </text>
            </g>
            <g transform="translate(0 342)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                5
              </text>
            </g>
            <g transform="translate(0 304)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                10
              </text>
            </g>
            <g transform="translate(0 266)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                15
              </text>
            </g>
            <g transform="translate(0 228)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                20
              </text>
            </g>
            <g transform="translate(0 190)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                25
              </text>
            </g>
            <g transform="translate(0 152)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                30
              </text>
            </g>
            <g transform="translate(0 114)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                35
              </text>
            </g>
            <g transform="translate(0 76)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                40
              </text>
            </g>
            <g transform="translate(0 38)">
              <path stroke="currentColor" d="M0 0L-6 0"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
              <text x="-9" fill="currentColor" dy=".35em">
                45
              </text>
            </g>
            <path stroke="currentColor" d="M0 0L-6 0"></path>
            <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L575 0"></path>
            <text x="-9" fill="currentColor" dy=".35em">
              50
            </text>
          </g>
          <g
            data-name="discrete-axis"
            textAnchor="middle"
            transform="translate(45 30) translate(0 380)"
          >
            <path stroke="currentColor" d="M0 0L575 0"></path>
            <path stroke="currentColor" d="M0 0L0 6"></path>
            <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
            <text y="9" fill="currentColor" dy=".71em">
              0
            </text>
            <g transform="translate(57.5)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                5
              </text>
            </g>
            <g transform="translate(115)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                10
              </text>
            </g>
            <g transform="translate(172.5)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                15
              </text>
            </g>
            <g transform="translate(230)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                20
              </text>
            </g>
            <g transform="translate(287.5)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                25
              </text>
            </g>
            <g transform="translate(345)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                30
              </text>
            </g>
            <g transform="translate(402.5)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                35
              </text>
            </g>
            <g transform="translate(460)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                40
              </text>
            </g>
            <g transform="translate(517.5)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                45
              </text>
            </g>
            <g transform="translate(575)">
              <path stroke="currentColor" d="M0 0L0 6"></path>
              <path stroke="#D2D7D3" strokeWidth="0.5" d="M0 0L0 -380"></path>
              <text y="9" fill="currentColor" dy=".71em">
                50
              </text>
            </g>
          </g>
          <circle
            cx="184"
            cy="152"
            r="13"
            fill="#4e79a7"
            fillOpacity="0.5"
            stroke="#4e79a7"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="471.5"
            cy="212.8"
            r="13"
            fill="#f28e2c"
            fillOpacity="0.5"
            stroke="#f28e2c"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="276"
            cy="235.6"
            r="13"
            fill="#e15759"
            fillOpacity="0.5"
            stroke="#e15759"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="575"
            r="13"
            fill="#76b7b2"
            fillOpacity="0.5"
            stroke="#76b7b2"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="230"
            cy="38"
            r="13"
            fill="#59a14f"
            fillOpacity="0.5"
            stroke="#59a14f"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="471.5"
            cy="182.4"
            r="13"
            fill="#edc949"
            fillOpacity="0.5"
            stroke="#edc949"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="184"
            cy="129.2"
            r="13"
            fill="#af7aa1"
            fillOpacity="0.5"
            stroke="#af7aa1"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="310.5"
            cy="266"
            r="13"
            fill="#ff9da7"
            fillOpacity="0.5"
            stroke="#ff9da7"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="69"
            cy="319.2"
            r="13"
            fill="#9c755f"
            fillOpacity="0.5"
            stroke="#9c755f"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="437"
            cy="372.4"
            r="13"
            fill="#bab0ab"
            fillOpacity="0.5"
            stroke="#bab0ab"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="460"
            cy="53.2"
            r="13"
            fill="#4e79a7"
            fillOpacity="0.5"
            stroke="#4e79a7"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="230"
            cy="7.6"
            r="13"
            fill="#f28e2c"
            fillOpacity="0.5"
            stroke="#f28e2c"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="379.5"
            cy="273.6"
            r="13"
            fill="#e15759"
            fillOpacity="0.5"
            stroke="#e15759"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="402.5"
            cy="7.6"
            r="13"
            fill="#76b7b2"
            fillOpacity="0.5"
            stroke="#76b7b2"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="448.5"
            cy="60.8"
            r="13"
            fill="#59a14f"
            fillOpacity="0.5"
            stroke="#59a14f"
            transform="translate(45 30)"
          ></circle>
        </g>
      </svg>
    </main>
  );
}
