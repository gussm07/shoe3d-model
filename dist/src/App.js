import "./index.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";
import { PlaneGeometry } from "three";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.setStripes}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.soul}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.soul}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.soul}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.stripes}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.soul}
      />
    </group>
  );
}

function App() {
  /* VARIABLES DE ESTADO  */
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [soul, setSoul] = useState("#ffffff");
  const ref = useRef();

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas castshadow="true" shadowmap="true">
              <ambientLight intensity={0.7} castShadow={true} />
              <spotLight
                intensity={1}
                angle={5}
                penumbra={1}
                position={[1, 1, 1]}
                castShadow
              />
              <Suspense fallback={null}>
                {/* <mesh ref={ref}>
                  <planeBufferGeometry
                    attach="geometry"
                    args={[10, 10, 10, 10]}
                  />
                  <meshPhongMaterial attach="material" color="#272727" />
                </mesh> */}
                <Model
                  /* HACER EL CAMBIO DE COLOR DEL OBJETO CON EL SETCOLOR */
                  customColors={{ mesh: mesh, stripes: stripes, soul: soul }}
                />
                <ContactShadows
                  position={[0, -0.8, 0]}
                  opacity={0.25}
                  scale={10}
                  blur={1.5}
                  far={0.8}
                />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="colors">
            <h2 className="title">Color chooser</h2>
            <div className="input__fields">
              <div>
                <input
                  type="color"
                  id="mesh"
                  name="mesh"
                  /* ASIGNA LA VARIABLE DE ESTADO mesh */
                  value={mesh}
                  /* ASIGNA EL VALOR DE COLOR EN MESH */
                  onChange={(e) => setMesh(e.target.value)}
                />
                <label for="mesh">Main</label>
              </div>

              <div>
                <input
                  type="color"
                  id="stripes"
                  name="stripes"
                  value={stripes}
                  onChange={(e) => setStripes(e.target.value)}
                />
                <label for="stripes">Stripes</label>
              </div>
              <div>
                <input
                  type="color"
                  id="soul"
                  name="soul"
                  value={soul}
                  onChange={(e) => setSoul(e.target.value)}
                />
                <label for="soul">Soul</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
