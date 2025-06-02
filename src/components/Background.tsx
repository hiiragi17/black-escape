export const Background = ({ src }: { src: string }) => (
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
    style={{ 
      backgroundImage: `url(${src})`,
      minHeight: '100vh',
      minWidth: '100vw'
    }}
  />
);