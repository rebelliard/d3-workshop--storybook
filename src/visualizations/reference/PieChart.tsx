import "../../styles/common.css";

export function PieChartDemo() {
  return (
    <main>
      <h2 className="chart-header">Pie Chart</h2>
      <svg width="650" height="450" className="chart width-auto height-auto">
        <g data-name="bounds">
          <g data-name="centered-group" fontSize="62.5%">
            <g data-name="arcs">
              <g data-name="arc" data-value="16">
                <path
                  fill="#4e79a7"
                  d="M-120.444-153.356A195 195 0 010-195V0z"
                  transform="translate(30 30) translate(295 195)"
                ></path>
                <text
                  fill="#fff"
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(30 30) translate(295 195) translate(-31.86 -92.148)"
                >
                  16
                </text>
              </g>
              <g data-name="arc" data-value="41">
                <path
                  fill="#f28e2c"
                  d="M170.211 95.148a195 195 0 01-287.439 60.681L0 0z"
                  transform="translate(30 30) translate(295 195)"
                ></path>
                <text
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(30 30) translate(295 195) translate(20.14 95.397)"
                >
                  41
                </text>
              </g>
              <g data-name="arc" data-value="24">
                <path
                  fill="#e15759"
                  d="M-117.228 155.829a195 195 0 01-77.255-170.016L0 0z"
                  transform="translate(30 30) translate(295 195)"
                ></path>
                <text
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(30 30) translate(295 195) translate(-88.766 40.335)"
                >
                  24
                </text>
              </g>
              <g data-name="arc" data-value="50">
                <path
                  fill="#76b7b2"
                  d="M0-195A195 195 0 01170.211 95.148L0 0z"
                  transform="translate(30 30) translate(295 195)"
                ></path>
                <text
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(30 30) translate(295 195) translate(84.097 -49.334)"
                >
                  50
                </text>
              </g>
              <g data-name="arc" data-value="20">
                <path
                  fill="#59a14f"
                  d="M-194.483-14.187a195 195 0 0174.039-139.169L0 0z"
                  transform="translate(30 30) translate(295 195)"
                ></path>
                <text
                  fill="#fff"
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(30 30) translate(295 195) translate(-86.077 -45.793)"
                >
                  20
                </text>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <h2 className="chart-header">Donut Chart</h2>
      <svg width="650" height="450" className="chart width-auto height-auto">
        <g data-name="bounds">
          <g data-name="centered-group" fontSize="62.5%">
            <g data-name="arcs">
              <g data-name="arc" data-value="16">
                <path
                  fill="#4e79a7"
                  d="M-117.356-149.424A190 190 0 010-190v95a95 95 0 00-58.678 20.288z"
                  transform="translate(45 30) translate(287.5 190)"
                ></path>
                <text
                  fill="#fff"
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(45 30) translate(287.5 190) translate(-46.565 -134.677)"
                >
                  16
                </text>
              </g>
              <g data-name="arc" data-value="41">
                <path
                  fill="#f28e2c"
                  d="M165.847 92.709a190 190 0 01-280.069 59.124l57.111-75.916A95 95 0 0082.923 46.354z"
                  transform="translate(45 30) translate(287.5 190)"
                ></path>
                <text
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(45 30) translate(287.5 190) translate(29.434 139.427)"
                >
                  41
                </text>
              </g>
              <g data-name="arc" data-value="24">
                <path
                  fill="#e15759"
                  d="M-114.222 151.833a190 190 0 01-75.274-165.656l94.748 6.911a95 95 0 0037.637 82.829z"
                  transform="translate(45 30) translate(287.5 190)"
                ></path>
                <text
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(45 30) translate(287.5 190) translate(-129.734 58.951)"
                >
                  24
                </text>
              </g>
              <g data-name="arc" data-value="50">
                <path
                  fill="#76b7b2"
                  d="M0-190A190 190 0 01165.847 92.709L82.923 46.354A95 95 0 000-95z"
                  transform="translate(45 30) translate(287.5 190)"
                ></path>
                <text
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(45 30) translate(287.5 190) translate(122.912 -72.104)"
                >
                  50
                </text>
              </g>
              <g data-name="arc" data-value="20">
                <path
                  fill="#59a14f"
                  d="M-189.496-13.823a190 190 0 0172.14-135.601l58.678 74.712a95 95 0 00-36.07 67.8z"
                  transform="translate(45 30) translate(287.5 190)"
                ></path>
                <text
                  fill="#fff"
                  fontSize="1.4em"
                  textAnchor="middle"
                  transform="translate(45 30) translate(287.5 190) translate(-125.805 -66.929)"
                >
                  20
                </text>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </main>
  );
}
