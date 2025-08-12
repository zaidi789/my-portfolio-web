declare module "@react-three/fiber" {
  import * as THREE from "three";
  import * as React from "react";

  export interface ThreeElements {
    mesh: JSX.IntrinsicElements["mesh"];
    group: JSX.IntrinsicElements["group"];
    geometry: JSX.IntrinsicElements["geometry"];
    material: JSX.IntrinsicElements["material"];
    texture: JSX.IntrinsicElements["texture"];
    ambientLight: JSX.IntrinsicElements["ambientLight"];
    directionalLight: JSX.IntrinsicElements["directionalLight"];
    pointLight: JSX.IntrinsicElements["pointLight"];
    spotLight: JSX.IntrinsicElements["spotLight"];
    hemisphereLight: JSX.IntrinsicElements["hemisphereLight"];
    rectAreaLight: JSX.IntrinsicElements["rectAreaLight"];
    fog: JSX.IntrinsicElements["fog"];
    fogExp2: JSX.IntrinsicElements["fogExp2"];
    scene: JSX.IntrinsicElements["scene"];
    perspectiveCamera: JSX.IntrinsicElements["perspectiveCamera"];
    orthographicCamera: JSX.IntrinsicElements["orthographicCamera"];
    cubeCamera: JSX.IntrinsicElements["cubeCamera"];
    arrayCamera: JSX.IntrinsicElements["arrayCamera"];
    ringGeometry: JSX.IntrinsicElements["ringGeometry"];
    sphereGeometry: JSX.IntrinsicElements["sphereGeometry"];
    boxGeometry: JSX.IntrinsicElements["boxGeometry"];
    planeGeometry: JSX.IntrinsicElements["planeGeometry"];
    cylinderGeometry: JSX.IntrinsicElements["cylinderGeometry"];
    coneGeometry: JSX.IntrinsicElements["coneGeometry"];
    torusGeometry: JSX.IntrinsicElements["torusGeometry"];
    meshStandardMaterial: JSX.IntrinsicElements["meshStandardMaterial"];
    meshBasicMaterial: JSX.IntrinsicElements["meshBasicMaterial"];
    meshPhongMaterial: JSX.IntrinsicElements["meshPhongMaterial"];
    meshLambertMaterial: JSX.IntrinsicElements["meshLambertMaterial"];
    meshPhysicalMaterial: JSX.IntrinsicElements["meshPhysicalMaterial"];
    meshToonMaterial: JSX.IntrinsicElements["meshToonMaterial"];
    meshNormalMaterial: JSX.IntrinsicElements["meshNormalMaterial"];
    meshMatcapMaterial: JSX.IntrinsicElements["meshMatcapMaterial"];
    meshDepthMaterial: JSX.IntrinsicElements["meshDepthMaterial"];
    meshDistanceMaterial: JSX.IntrinsicElements["meshDistanceMaterial"];
    lineBasicMaterial: JSX.IntrinsicElements["lineBasicMaterial"];
    lineDashedMaterial: JSX.IntrinsicElements["lineDashedMaterial"];
    pointsMaterial: JSX.IntrinsicElements["pointsMaterial"];
    shaderMaterial: JSX.IntrinsicElements["shaderMaterial"];
    rawShaderMaterial: JSX.IntrinsicElements["rawShaderMaterial"];
    shadowMaterial: JSX.IntrinsicElements["shadowMaterial"];
    spriteMaterial: JSX.IntrinsicElements["spriteMaterial"];
    points: JSX.IntrinsicElements["points"];
    line: JSX.IntrinsicElements["line"];
    lineLoop: JSX.IntrinsicElements["lineLoop"];
    lineSegments: JSX.IntrinsicElements["lineSegments"];
    sprite: JSX.IntrinsicElements["sprite"];
  }

  export interface CanvasProps {
    children?: React.ReactNode;
    dpr?: number | [number, number];
    gl?: any;
    camera?: any;
    shadows?: boolean | any;
    raycaster?: any;
    frameloop?: "always" | "demand" | "never";
    resize?: any;
    orthographic?: boolean;
    linear?: boolean;
    flat?: boolean;
    legacy?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onCreated?: (state: RootState) => void;
    onPointerMissed?: (event: MouseEvent) => void;
  }

  export interface RootState {
    gl: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    raycaster: THREE.Raycaster;
    mouse: THREE.Vector2;
    clock: THREE.Clock;
    linear: boolean;
    flat: boolean;
    legacy: boolean;
    frameloop: "always" | "demand" | "never";
    performance: {
      current: number;
      min: number;
      max: number;
      debounce: number;
      regress: () => void;
    };
    size: {
      width: number;
      height: number;
      updateStyle?: boolean;
    };
    viewport: {
      initialDpr: number;
      dpr: number;
      width: number;
      height: number;
      top: number;
      left: number;
      aspect: number;
      distance: number;
      factor: number;
      getCurrentViewport: (
        camera?: THREE.Camera,
        target?: THREE.Vector3,
        size?: { width: number; height: number }
      ) => {
        width: number;
        height: number;
        top: number;
        left: number;
        aspect: number;
        distance: number;
        factor: number;
      };
    };
    set: (fn: (state: RootState) => void) => void;
    get: () => RootState;
    invalidate: (frames?: number) => void;
    advance: (timestamp: number, runGlobalEffects?: boolean) => void;
    setSize: (
      width: number,
      height: number,
      updateStyle?: boolean,
      top?: number,
      left?: number
    ) => void;
    setDpr: (dpr: number) => void;
    setFrameloop: (frameloop?: "always" | "demand" | "never") => void;
    setEvents: (events: any) => void;
    onPointerMissed?: (event: MouseEvent) => void;
    events: {
      connected: any;
      handlers: any;
      connect: (target: any) => void;
      disconnect: () => void;
    };
  }

  export function Canvas(props: CanvasProps): JSX.Element;
  export function useFrame(
    callback: (state: RootState, delta: number) => void,
    renderPriority?: number
  ): void;
  export function useThree(): RootState;
  export function useLoader<T>(
    loader: new () => T,
    url: string | string[],
    extensions?: (loader: T) => void
  ): any;
  export function useUpdate<T>(
    callback: (obj: T) => void,
    dependencies: any[]
  ): React.MutableRefObject<T>;
  export function useResource<T = THREE.Object3D>(): [
    React.MutableRefObject<T>,
    T
  ];
  export function createPortal(
    children: React.ReactNode,
    container: THREE.Object3D,
    state?: RootState
  ): React.ReactPortal;
  export const extend: (objects: any) => void;
  export const addEffect: (callback: (timeStamp: number) => void) => () => void;
  export const addAfterEffect: (
    callback: (timeStamp: number) => void
  ) => () => void;
  export const addTail: (callback: (timeStamp: number) => void) => () => void;
  export const flushGlobalEffects: () => void;
  export const act: (callback: () => void) => void;
}

declare module "@react-three/drei" {
  import * as THREE from "three";
  import * as React from "react";

  export interface SphereProps {
    args?: [
      radius?: number,
      widthSegments?: number,
      heightSegments?: number,
      phiStart?: number,
      phiLength?: number,
      thetaStart?: number,
      thetaLength?: number
    ];
    position?: [number, number, number] | THREE.Vector3;
    rotation?: [number, number, number] | THREE.Euler;
    scale?: [number, number, number] | THREE.Vector3 | number;
    children?: React.ReactNode;
  }

  export interface LineProps {
    points: Array<[number, number, number]> | Array<THREE.Vector3>;
    color?: string | THREE.Color;
    lineWidth?: number;
    transparent?: boolean;
    opacity?: number;
    dashed?: boolean;
    dashScale?: number;
    dashSize?: number;
    gapSize?: number;
    children?: React.ReactNode;
  }

  export interface PointsProps {
    positions?: Float32Array | Array<number>;
    colors?: Float32Array | Array<number>;
    children?: React.ReactNode;
    ref?: React.RefObject<any>;
  }

  export interface PointMaterialProps {
    size?: number;
    sizeAttenuation?: boolean;
    transparent?: boolean;
    opacity?: number;
    vertexColors?: boolean;
    blending?: THREE.Blending;
    color?: string | THREE.Color;
  }

  export interface PerspectiveCameraProps {
    makeDefault?: boolean;
    position?: [number, number, number] | THREE.Vector3;
    fov?: number;
    near?: number;
    far?: number;
    aspect?: number;
    zoom?: number;
    children?: React.ReactNode;
  }

  export interface OrbitControlsProps {
    enabled?: boolean;
    enableZoom?: boolean;
    enablePan?: boolean;
    enableRotate?: boolean;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    minDistance?: number;
    maxDistance?: number;
    minPolarAngle?: number;
    maxPolarAngle?: number;
    minAzimuthAngle?: number;
    maxAzimuthAngle?: number;
    dampingFactor?: number;
    enableDamping?: boolean;
    rotateSpeed?: number;
    zoomSpeed?: number;
    panSpeed?: number;
    target?: [number, number, number] | THREE.Vector3;
  }

  export interface EnvironmentProps {
    preset?: string;
    background?: boolean;
    blur?: number;
    files?: string | string[];
    path?: string;
    scene?: THREE.Scene;
    resolution?: number;
    near?: number;
    far?: number;
  }

  export interface LoaderProps {
    containerStyles?: React.CSSProperties;
    innerStyles?: React.CSSProperties;
    barStyles?: React.CSSProperties;
    dataStyles?: React.CSSProperties;
    dataInterpolation?: (p: number) => string;
    initialState?: (active: boolean) => boolean;
  }

  export function Sphere(props: SphereProps): JSX.Element;
  export function Line(props: LineProps): JSX.Element;
  export function Points(props: PointsProps): JSX.Element;
  export function PointMaterial(props: PointMaterialProps): JSX.Element;
  export function PerspectiveCamera(props: PerspectiveCameraProps): JSX.Element;
  export function OrbitControls(props: OrbitControlsProps): JSX.Element;
  export function Environment(props: EnvironmentProps): JSX.Element;
  export function Loader(props: LoaderProps): JSX.Element;
}

// Global JSX namespace extension for Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      geometry: any;
      material: any;
      texture: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      spotLight: any;
      hemisphereLight: any;
      rectAreaLight: any;
      fog: any;
      fogExp2: any;
      scene: any;
      perspectiveCamera: any;
      orthographicCamera: any;
      cubeCamera: any;
      arrayCamera: any;
      ringGeometry: any;
      sphereGeometry: any;
      boxGeometry: any;
      planeGeometry: any;
      cylinderGeometry: any;
      coneGeometry: any;
      torusGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      meshPhongMaterial: any;
      meshLambertMaterial: any;
      meshPhysicalMaterial: any;
      meshToonMaterial: any;
      meshNormalMaterial: any;
      meshMatcapMaterial: any;
      meshDepthMaterial: any;
      meshDistanceMaterial: any;
      lineBasicMaterial: any;
      lineDashedMaterial: any;
      pointsMaterial: any;
      shaderMaterial: any;
      rawShaderMaterial: any;
      shadowMaterial: any;
      spriteMaterial: any;
      points: any;
      line: any;
      lineLoop: any;
      lineSegments: any;
      sprite: any;
    }
  }
}
