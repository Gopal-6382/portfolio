import { useState } from "react";
const BoardSvg = ({ imageUrl }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <svg
        width="563"
        height="590"
        viewBox="0 0 563 590"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        {/* Drop shadow filter with proper boundaries */}
        <defs>
          <filter
            id="board-shadow"
            x="0"
            y="0"
            width="563"
            height="590"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-9" dy="10" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>

        {/* Apply filter only to the background, not the borders */}
        <g filter="url(#board-shadow)">
          {/* White background */}
          <rect x="29" y="49.73" width="512" height="512" fill="white" />
        </g>

        {/* Image area - outside the filtered group */}
        {imageUrl && !imageError ? (
          <>
            <image
              href={imageUrl}
              x="77"
              y="105.73"
              width="416"
              height="400"
              preserveAspectRatio="xMidYMid meet"
              onError={handleImageError}
            />
            <rect
              x="77"
              y="105.73"
              width="416"
              height="400"
              fill="#494848"
              fillOpacity="0.19"
              stroke="black"
              strokeWidth="4"
            />
          </>
        ) : (
          <rect
            x="77"
            y="105.73"
            width="416"
            height="400"
            fill="#eaeaea"
            stroke="black"
            strokeWidth="4"
          />
        )}

        {/* Borders - outside the filtered group so they remain crisp */}
        <path
          d="M30.2323 36.73C30.2323 93.7825 30.8402 116.711 30.8402 177.386M30.8402 177.386C30.8402 238.06 30.7462 348.647 30.2323 422.972C29.7184 497.298 29.3196 569.643 29.3196 569.643C29.3196 580.141 28.1955 567.752 28.2775 562.167C28.38 555.184 29.3635 356.526 29.3635 339.184C29.3635 321.841 30.2323 233.559 30.8402 177.386Z"
          stroke="black"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M455.793 561.46C539.238 561.46 527.583 561.46 555 561.46C554.528 561.734 550.277 562.778 548.523 562.99C546.33 563.254 488.801 563.11 476.523 563.11C434.493 563.11 244.627 562.123 232.201 562.123M455.793 561.46C455.793 561.46 254.533 563.11 222.434 563.11C190.335 563.11 197.927 563.155 130.163 563.11C79.5005 563.077 18.92 563.11 14.8434 563.11C10.7667 563.11 12.271 561.131 12.271 561.131C40.7666 562.123 90.3594 562.123 155.492 562.123C177.936 562.123 204.189 562.123 232.201 562.123M455.793 561.46C394.791 561.46 308.336 562.123 232.201 562.123"
          stroke="black"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M540.447 307.402C540.447 373.796 541.8 415.57 541.8 458.981C541.8 502.393 541.109 575.937 541.109 575.937C541.109 575.937 539.517 579.036 539.517 572.98C539.517 566.924 540.558 523.87 540.447 461.996C540.335 400.122 540.34 335.287 540.447 307.402ZM540.447 307.402C540.446 276.103 539.724 212.171 539.767 176.594C539.814 136.701 539.767 79.2511 539.767 40.73"
          stroke="black"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M22.9998 50.5921C52.2194 50.5921 77.7129 50.5921 92.744 50.5921M92.744 50.5921C107.775 50.5921 174.513 50.8836 202.772 50.8836M92.744 50.5921C92.744 50.5921 125.34 49.6846 144.451 49.6846C163.562 49.6846 202.772 50.8836 202.772 50.8836M560 50.8836C530.093 50.8836 543.921 50.5921 514.217 50.5921C497.285 50.5921 476.571 51.078 446.877 50.8836M282.314 49.6846C302.864 49.7127 410.276 50.6441 446.877 50.8836M282.314 49.6846C261.061 49.6556 231.03 50.8836 202.772 50.8836M282.314 49.6846C282.314 49.6846 333.843 49.6846 362.703 49.6846M446.877 50.8836C446.877 50.8836 391.563 49.6846 362.703 49.6846M202.772 50.8836C220.092 50.8836 260.25 50.8836 282.314 50.8836C304.378 50.8836 345.1 50.0843 362.703 49.6846"
          stroke="black"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Decorative elements */}
        <path
          d="M516 104.11C516 104.11 518.499 94.9227 518.554 83.7686C518.642 65.7665 512.643 46.8428 513.257 28.851C513.661 16.9872 516.264 0.729997 516.264 0.729997"
          stroke="black"
          strokeWidth="7"
        />
        <circle cx="223" cy="82.8784" r="10" fill="black" />
        <circle cx="346" cy="82.8784" r="10" fill="black" />
      </svg>
    </div>
  );
};

export default BoardSvg;
