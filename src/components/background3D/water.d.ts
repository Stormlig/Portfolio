declare namespace JSX {
  interface IntrinsicElements {
    water: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & { args: [THREE.PlaneGeometry, { textureWidth: number; textureHeight: number; waterNormals: THREE.Texture; sunDirection: THREE.Vector3; sunColor: number; waterColor: number; distortionScale: number; fog: boolean; wave: boolean; debugger: boolean; lengthScale: number }]; };
  }
}

