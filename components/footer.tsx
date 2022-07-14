import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-hero-color bg-opacity-70 border-t border-neutral-200">
      <Container>
        <div className="py-14 flex flex-col items-center font-barlow">
        © 2022 Karmen Dykstra
        </div>
      </Container>
    </footer>
  )
}

export default Footer
