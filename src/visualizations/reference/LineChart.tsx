import "../../styles/common.css";

export function LineChartDemo() {
  return (
    <main>
      <h2 className="chart-header">Line Chart</h2>
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
          <path
            fill="none"
            stroke="#4682b4"
            strokeWidth="2"
            d="M69 319.2S174.377 182.973 184 152c3.226-10.382-2.324-13.03 0-22.8 4.92-20.679 40.588-68.451 46-91.2 2.953-12.41-1.472-30.253 0-30.4 4.071-.407 23.377 188.833 46 228 10.059 17.415 19.761 23.888 34.5 30.4 18.11 8.001 52.447 21.19 69 7.6 32.463-26.653 14.343-265.965 23-266 10.141-.041 26.82 365.02 34.5 364.8 7.084-.203-4.23-283.6 11.5-311.6 3.307-5.887 8.281-9.185 11.5-7.6 10.967 5.399 10.336 159.642 11.5 159.6.507-.018-3.622-16.678 0-30.4C481.013 146.358 575 0 575 0"
            transform="translate(45 30)"
          ></path>
          <circle
            cx="69"
            cy="319.2"
            r="5"
            fill="#4e79a7"
            fillOpacity="0.5"
            stroke="#4e79a7"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="184"
            cy="152"
            r="5"
            fill="#f28e2c"
            fillOpacity="0.5"
            stroke="#f28e2c"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="184"
            cy="129.2"
            r="5"
            fill="#e15759"
            fillOpacity="0.5"
            stroke="#e15759"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="230"
            cy="38"
            r="5"
            fill="#76b7b2"
            fillOpacity="0.5"
            stroke="#76b7b2"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="230"
            cy="7.6"
            r="5"
            fill="#59a14f"
            fillOpacity="0.5"
            stroke="#59a14f"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="276"
            cy="235.6"
            r="5"
            fill="#edc949"
            fillOpacity="0.5"
            stroke="#edc949"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="310.5"
            cy="266"
            r="5"
            fill="#af7aa1"
            fillOpacity="0.5"
            stroke="#af7aa1"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="379.5"
            cy="273.6"
            r="5"
            fill="#ff9da7"
            fillOpacity="0.5"
            stroke="#ff9da7"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="402.5"
            cy="7.6"
            r="5"
            fill="#9c755f"
            fillOpacity="0.5"
            stroke="#9c755f"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="437"
            cy="372.4"
            r="5"
            fill="#bab0ab"
            fillOpacity="0.5"
            stroke="#bab0ab"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="448.5"
            cy="60.8"
            r="5"
            fill="#4e79a7"
            fillOpacity="0.5"
            stroke="#4e79a7"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="460"
            cy="53.2"
            r="5"
            fill="#f28e2c"
            fillOpacity="0.5"
            stroke="#f28e2c"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="471.5"
            cy="212.8"
            r="5"
            fill="#e15759"
            fillOpacity="0.5"
            stroke="#e15759"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="471.5"
            cy="182.4"
            r="5"
            fill="#76b7b2"
            fillOpacity="0.5"
            stroke="#76b7b2"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
          <circle
            cx="575"
            r="5"
            fill="#59a14f"
            fillOpacity="0.5"
            stroke="#59a14f"
            data-name="points"
            transform="translate(45 30)"
          ></circle>
        </g>
      </svg>
    </main>
  );
}
