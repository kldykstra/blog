type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto bg-hero-font min-h-screen">{children}</div>
}

export default Container
