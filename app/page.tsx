// Images from Figma (valid for 7 days — replace with local assets when they expire)
const imgLogo = "https://www.figma.com/api/mcp/asset/26117828-34c9-4b1c-8e94-c03119031460";

const nailImages = [
  "https://www.figma.com/api/mcp/asset/471a8014-60e8-4064-993e-6bac81ac78b6", // nail-1
  "https://www.figma.com/api/mcp/asset/2a56ecea-abd5-43d2-8763-c400ba7d7454", // nail-2
  "https://www.figma.com/api/mcp/asset/60fade76-bc05-4f9d-b30b-e45c6767d88a", // nail-3
  "https://www.figma.com/api/mcp/asset/456c65e8-11a1-4de5-8bba-9af880a5a9e4", // nail-4
  "https://www.figma.com/api/mcp/asset/addb8c8f-2c92-4707-ad30-757296696553", // nail-5
  "https://www.figma.com/api/mcp/asset/db3605b3-26ec-48b2-ba0b-7e4aa12a0ad4", // nail-6
  "https://www.figma.com/api/mcp/asset/cda1356c-fcc5-401f-879a-11aa87593131", // nail-7
  "https://www.figma.com/api/mcp/asset/6c39c2db-fcb4-41bc-965b-35cad9ee6d28", // nail-8
  "https://www.figma.com/api/mcp/asset/a2ea5392-5456-4e6d-9e9b-217ae08b3255", // nail-9
  "https://www.figma.com/api/mcp/asset/0795af4e-72b9-4f3c-a018-fba0438c0b7c", // nail-10
  "https://www.figma.com/api/mcp/asset/a3d33376-3170-4906-8e39-3e8bda7fc540", // nail-11
  "https://www.figma.com/api/mcp/asset/485753ca-2ac3-402c-a957-a0c4f48f4e52", // nail-12
  "https://www.figma.com/api/mcp/asset/153d00db-6300-422b-a2f9-9cc176974a88", // nail-13
  "https://www.figma.com/api/mcp/asset/24a7fb1f-f257-4854-9f91-3647f5afa314", // nail-14
  "https://www.figma.com/api/mcp/asset/6cf3aa62-cd1c-48cf-9818-67f68631c368", // nail-15
  "https://www.figma.com/api/mcp/asset/b732f4df-7e8f-4987-9551-729ec3e4ae64", // nail-16
];

/** 4×4 grid of nail images, arranged in 4 columns of 4 rows */
const COLS = 4;
const ROWS = 4;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1f001c]">
      {/* ── Header ── */}
      <header className="flex items-center justify-center w-full">
        <div className="flex flex-1 items-center justify-between max-w-[1280px] px-4 py-4">
          {/* Logo */}
          <div className="flex flex-1 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgLogo} alt="Nails Fashion logo" className="h-8 w-auto" />
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-12">
            <span className="bg-[#ffc8f9] text-[#1f001c] font-medium text-base px-5 py-2.5 rounded-full whitespace-nowrap">
              Accueil
            </span>
            <span className="text-[#ffc8f9] font-medium text-base whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
              Service
            </span>
            <span className="text-[#ffc8f9] font-medium text-base whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
              Tarifs
            </span>
            <span className="text-[#ffc8f9] font-medium text-base whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
              À propos
            </span>
          </nav>

          {/* CTA button */}
          <div className="flex flex-1 justify-end">
            <button className="border border-[#ffc8f9] text-[#ffc8f9] font-semibold text-base px-8 py-4 rounded-[25px] whitespace-nowrap hover:bg-[#ffc8f9] hover:text-[#1f001c] transition-colors">
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero body ── */}
      <div className="flex flex-col gap-8 items-start max-w-[1280px] w-full mx-auto">
        {/* Top row: headline + scroll indicator */}
        <div className="flex items-end justify-between w-full pt-20 px-4">
          {/* Left: text + CTA */}
          <div className="flex flex-col gap-10 items-start">
            <div className="flex flex-col gap-8 items-start">
              <p className="font-medium text-[#ffc8f9] text-base tracking-[4.16px] uppercase">
                Onglerie Bastogne
              </p>
              <h1
                className="text-[#ffc8f9] leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'John Mayer', sans-serif",
                  fontSize: "clamp(64px, 9.7vw, 149px)",
                  letterSpacing: "-0.06em",
                }}
              >
                Nails Fashion
              </h1>
              <p className="font-extralight text-[#ffc8f9] text-base leading-relaxed tracking-tight max-w-[400px]">
                Pose complète, semi-permanent et nail art personnalisé pour sublimer vos mains
              </p>
            </div>
            <button className="bg-[#e72ed5] text-[#1f001c] font-semibold text-base px-8 py-4 rounded-[25px] whitespace-nowrap hover:brightness-110 transition-all">
              Découvrir
            </button>
          </div>

          {/* Right: scroll indicator */}
          <div className="flex flex-col items-center gap-4 pb-2">
            <span
              className="text-[#ffc8f9] font-medium text-[11px] tracking-[3px] uppercase"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              SCROLL
            </span>
            <div className="w-px h-[51px] bg-[#ffc8f9]" />
          </div>
        </div>

        {/* Bottom: image mosaic */}
        <div className="w-full overflow-hidden px-4">
          <div
            className="grid gap-[5.8px]"
            style={{ gridTemplateColumns: `repeat(${COLS}, 150px)` }}
          >
            {Array.from({ length: ROWS }, (_, row) =>
              Array.from({ length: COLS }, (_, col) => {
                const index = row * COLS + col;
                const src = nailImages[index % nailImages.length];
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={`${row}-${col}`}
                    src={src}
                    alt={`Nail art ${index + 1}`}
                    className="w-[150px] h-[161px] object-cover block"
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
