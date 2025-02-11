const UpToDate = ({ TPVersion }) => {
    return (
        <div className="nav__bar__version" key="navBarVersion">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="1.5"
                className="checkboxIcon"
                clipRule="evenodd"
                viewBox="0 0 716 1135"
                key="navBarVersion:SVG"
            >
                <g fill="#B65015" stroke="#B65015" strokeWidth="1">
                    <path
                        d="M795.501 1039.29H523.949c5.735-407.875 219.351-386.695 238.026-575.824 65.984 102.672-27.812 205.063 33.526 337.799v238.025zM795.501 801.265C841.878 554.214 1016.35 520.316 1000 241.275c137.67 161.072 25.54 338.606 193.77 559.99v238.025H795.501V801.265z"
                        transform="matrix(.75 0 0 .75 -392.587 -180.581)"
                    ></path>
                    <path
                        d="M1193.77 801.265c-33.1-160.975 10.41-204.816 44.26-257.985 61.51 228.364 246.63 148.414 238.02 496.01h-282.28V801.265z"
                        transform="matrix(.75 0 0 .75 -392.587 -180.581)"
                    ></path>
                </g>
                <path
                    fill="#B65015"
                    d="M1413.87 1079.71c0-114.213-92.73-206.937-206.94-206.937H793.068c-114.21 0-206.933 92.724-206.933 206.937v413.86c0 114.21 92.723 206.93 206.933 206.93h413.862c114.21 0 206.94-92.72 206.94-206.93v-413.86z"
                    transform="matrix(.75 0 0 .75 -392.587 -180.581) translate(-150.256 -202.648) scale(1.15026)"
                ></path>
                <path
                    fill="#D4D4D4"
                    d="M574.986 1210.41l635.344-635.287c8.66-8.658 18.62-12.987 29.87-12.987 11.26 0 21.22 4.329 29.87 12.987l68.83 68.831c9.53 9.524 14.08 19.697 13.64 30.52-.43 10.822-4.98 20.563-13.64 29.221L620.44 1422.1c-8.658 8.66-18.398 13.2-29.22 13.64-10.823.43-20.996-4.12-30.52-13.64l-404.309-404.24c-9.524-9.53-14.286-19.916-14.286-31.172 0-11.255 4.329-21.212 12.987-29.87l51.948-51.948c9.524-9.524 19.913-14.286 31.169-14.286 11.255 0 21.645 4.762 31.169 14.286l305.608 305.54z"
                    transform="matrix(.75 0 0 .75 -392.587 -180.581) matrix(.63486 0 0 .63486 525.546 643.123)"
                ></path>
            </svg>
            <div> Up to date with {TPVersion}</div>
        </div>
    )
}
UpToDate.defaultProps = {
    TPVersion: 'current Version',
}

export default UpToDate
