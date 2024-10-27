const EndingWave = () => (
  <svg
    width="100%"
    height="100%"
    id="svg"
    viewBox="0 0 1440 265"
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out delay-150 flip-horizontal wave-end"
  >
    <style>
      {`
        .path-1 {
          animation: pathAnim-1 4s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
     
        }

        .flip-horizontal {
          transform: rotate(180deg);
          font-size: 0
        }

        .wave-end {
          position: relative;
          top: -10px; 
        }

        @keyframes pathAnim-1{
          0%{
          d: path("M 0,400 L 0,150 C 79.98717948717947,115.56666666666666 159.97435897435895,81.13333333333334 239,77 C 318.02564102564105,72.86666666666666 396.08974358974353,99.03333333333332 487,107 C 577.9102564102565,114.96666666666668 681.6666666666666,104.73333333333335 757,118 C 832.3333333333334,131.26666666666665 879.2435897435897,168.03333333333333 943,168 C 1006.7564102564103,167.96666666666667 1087.3589743589744,131.13333333333333 1173,122 C 1258.6410256410256,112.86666666666666 1349.3205128205127,131.43333333333334 1440,150 L 1440,400 L 0,400 Z");
          }
          25%{
          d: path("M 0,400 L 0,150 C 63.57948717948719,183.98717948717947 127.15897435897438,217.97435897435895 221,204 C 314.8410256410256,190.02564102564105 438.94358974358977,128.0897435897436 522,127 C 605.0564102564102,125.91025641025641 647.0666666666667,185.66666666666669 709,177 C 770.9333333333333,168.33333333333331 852.7897435897435,91.24358974358974 939,80 C 1025.2102564102565,68.75641025641026 1115.774358974359,123.35897435897436 1200,146 C 1284.225641025641,168.64102564102564 1362.1128205128205,159.32051282051282 1440,150 L 1440,400 L 0,400 Z");
          }
          50%{
          d: path("M 0,400 L 0,150 C 65.43846153846155,128.6871794871795 130.8769230769231,107.37435897435898 211,127 C 291.1230769230769,146.62564102564102 385.9307692307691,207.18974358974359 480,218 C 574.0692307692309,228.81025641025641 667.4000000000001,189.86666666666667 758,176 C 848.5999999999999,162.13333333333333 936.4692307692308,173.34358974358975 997,184 C 1057.5307692307692,194.65641025641025 1090.7230769230769,204.75897435897437 1160,199 C 1229.2769230769231,193.24102564102563 1334.6384615384616,171.62051282051283 1440,150 L 1440,400 L 0,400 Z");
          }
          75%{
          d: path("M 0,400 L 0,150 C 95.96666666666667,127.58717948717948 191.93333333333334,105.17435897435897 260,126 C 328.06666666666666,146.82564102564103 368.23333333333335,210.88974358974357 443,220 C 517.7666666666667,229.11025641025643 627.1333333333333,183.26666666666668 712,159 C 796.8666666666667,134.73333333333332 857.2333333333333,132.04358974358976 938,132 C 1018.7666666666667,131.95641025641024 1119.9333333333334,134.55897435897435 1207,138 C 1294.0666666666666,141.44102564102565 1367.0333333333333,145.72051282051282 1440,150 L 1440,400 L 0,400 Z");
          }
          100%{
          d: path("M 0,400 L 0,150 C 79.98717948717947,115.56666666666666 159.97435897435895,81.13333333333334 239,77 C 318.02564102564105,72.86666666666666 396.08974358974353,99.03333333333332 487,107 C 577.9102564102565,114.96666666666668 681.6666666666666,104.73333333333335 757,118 C 832.3333333333334,131.26666666666665 879.2435897435897,168.03333333333333 943,168 C 1006.7564102564103,167.96666666666667 1087.3589743589744,131.13333333333333 1173,122 C 1258.6410256410256,112.86666666666666 1349.3205128205127,131.43333333333334 1440,150 L 1440,400 L 0,400 Z");
          }
    
      `}
    </style>
    <defs>
      <linearGradient id="gradient2" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#fcb900" />
        <stop offset="100%" stopColor="#d88c2c" />
      </linearGradient>
    </defs>
    <path
      d="M 0,390 L 0,140 C 79.98717948717947,105.56666666666666 159.97435897435895,71.13333333333334 239,67 C 318.02564102564105,62.86666666666666 396.08974358974353,89.03333333333332 487,97 C 577.9102564102565,104.96666666666668 681.6666666666666,94.73333333333335 757,108 C 832.3333333333334,121.26666666666665 879.2435897435897,158.03333333333333 943,158 C 1006.7564102564103,157.96666666666667 1087.3589743589744,121.13333333333333 1173,112 C 1258.6410256410256,102.86666666666666 1349.3205128205127,121.43333333333334 1440,130 L 1440,390 L 0,390 Z"
      stroke="none"
      strokeWidth="0"
      fill="url(#gradient2)"
      fillOpacity="1"
      className="transition-all duration-300 ease-in-out delay-150 path-1"
    />
  </svg>
);

export default EndingWave;