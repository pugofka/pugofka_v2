'use client';

export default function Logo({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 140 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Pugofka Logo"
        >
            {/* P */}
            <path d="M0 0H6.5C10.5 0 12.5 2 12.5 6.25C12.5 10.5 10.5 12.5 6.5 12.5H4V25H0V0ZM4 3.5V9H6.5C8 9 8.5 8.5 8.5 6.25C8.5 4 8 3.5 6.5 3.5H4Z" fill="currentColor" />
            {/* U */}
            <path d="M14.5 0H18.5V16.5C18.5 19 19.5 20 21.5 20C23.5 20 24.5 19 24.5 16.5V0H28.5V17C28.5 22 26 25 21.5 25C17 25 14.5 22 14.5 17V0Z" fill="currentColor" />
            {/* G */}
            <path d="M31 12.5C31 5 35 0 41.5 0C45.5 0 48 2 49.5 5L46 7.5C45 5.5 43.5 4 41.5 4C38 4 35.5 7 35.5 12.5C35.5 18 38 21 41.5 21C43.5 21 45 19.5 45.5 17.5H40V14H49.5V24.5H46.5L46 21.5C45 23.5 43 25 41 25C34.5 25 31 20 31 12.5Z" fill="currentColor" />

            {/* O (Button) */}
            <circle cx="59.5" cy="12.5" r="12.5" fill="currentColor" />
            <circle cx="59.5" cy="12.5" r="8.5" fill="var(--background)" />
            {/* Button Holes */}
            <circle cx="57.5" cy="10.5" r="1.5" fill="currentColor" />
            <circle cx="61.5" cy="10.5" r="1.5" fill="currentColor" />
            <circle cx="59.5" cy="14.5" r="1.5" fill="currentColor" />

            {/* F */}
            <path d="M70 0H80V4H74V10H79V14H74V25H70V0Z" fill="currentColor" />
            {/* K */}
            <path d="M82 0H86V10.5L93.5 0H98.5L90 12L99 25H94L86 13.5V25H82V0Z" fill="currentColor" />
            {/* A */}
            <path d="M105.5 0H110.5L116 25H111.5L110.5 19H105.5L104.5 25H100L105.5 0ZM106.5 15H109.5L108 6L106.5 15Z" fill="currentColor" />
        </svg>
    );
}
