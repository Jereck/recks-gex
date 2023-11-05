import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <div className="hero h-[50vh] flex items-center justify-center bg-hero-bg bg-cover bg-opacity-0 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold drop-shadow-lg">Welcome to Reck's Gex</h1>
        <p className="text-lg drop-shadow-lg">Discover the world of crested geckos</p>
        <Button className="btn-primary">Shop Now</Button>
      </div>
    </div>
  )
}

export default Hero;