import React from 'react'

type CurveProps = {
  id: string
  path: string
  position: string
  color?: string
}

const Curve: React.FC<CurveProps> = ({ id, path, position, color = 'bg-amber-200' }) => (
  <div className={`absolute ${position} h-10 w-10`}>
    <svg className="absolute w-0 h-0">
      <defs>
        <clipPath id={id} clipPathUnits="objectBoundingBox">
          <path d={path} />
        </clipPath>
      </defs>
    </svg>
    <div className={`absolute inset-0 ${color}`} style={{ clipPath: `url(#${id})` }} />
  </div>
)

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full grid grid-cols-3 z-50">
      {/* Left curved section */}
      <div className="relative h-10">
        <div className="h-1.5 bg-amber-200" />
        <Curve
          id="leftCurve"
          position="bottom-0 right-0"
          path="M 0,0.15 C0.55,0.15 0.45,1 1,1 L1,0 L0,0 Z"
        />
      </div>

      {/* Middle flat section */}
      <div className="h-10 bg-amber-200" />

      {/* Right curved section */}
      <div className="relative h-10">
        <div className="h-1.5 bg-amber-200" />
        <Curve
          id="rightCurve"
          position="bottom-0 left-0"
          path="M 0,1 C0.45,1 0.55,0.15 1,0.15 L1,0 L0,0 Z"
        />
      </div>
    </nav>
  )
}

export default Navbar
