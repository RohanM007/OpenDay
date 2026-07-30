import './ParticleBackground.css'

const particles = [
  ['8%', '18%', '5px', '0s'],
  ['18%', '72%', '7px', '1s'],
  ['31%', '35%', '4px', '2s'],
  ['46%', '82%', '6px', '0.5s'],
  ['58%', '14%', '5px', '2.5s'],
  ['72%', '60%', '7px', '1.5s'],
  ['84%', '28%', '4px', '3s'],
  ['93%', '78%', '6px', '0.8s']
]

const ParticleBackground = () => (
  <div className="ambient-particles" aria-hidden="true">
    {particles.map(([left, top, size, delay], index) => (
      <span
        key={index}
        style={{ left, top, width: size, height: size, animationDelay: delay }}
      />
    ))}
  </div>
)

export default ParticleBackground
