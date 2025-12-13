import{ useRef } from 'react'
import { useGLTF} from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tv_man__animation.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name="585d88572dc241f9803a765d9f5514e8fbx_1"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}>
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="Armature_4">
                        <group name="Object_5_5">
                          <group name="GLTF_created_0">
                            <primitive object={nodes.GLTF_created_0_rootJoint} />
                            <skinnedMesh
                              name="Object_99"
                              geometry={nodes.Object_99.geometry}
                              material={materials.Clothing}
                              skeleton={nodes.Object_99.skeleton}
                            />
                            <skinnedMesh
                              name="Object_102"
                              geometry={nodes.Object_102.geometry}
                              material={materials.Clothing}
                              skeleton={nodes.Object_102.skeleton}
                            />
                            <skinnedMesh
                              name="Object_105"
                              geometry={nodes.Object_105.geometry}
                              material={materials.Clothing}
                              skeleton={nodes.Object_105.skeleton}
                            />
                            <skinnedMesh
                              name="Object_108"
                              geometry={nodes.Object_108.geometry}
                              material={materials.Clothing}
                              skeleton={nodes.Object_108.skeleton}
                            />
                            <group name="Object_90_90_correction">
                              <group name="Object_90_90" />
                            </group>
                            <group name="Object_92_92_correction">
                              <group name="Object_92_92" />
                            </group>
                            <group name="Object_94_94_correction">
                              <group name="Object_94_94" />
                            </group>
                            <group name="Object_96_96_correction">
                              <group name="Object_96_96" />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tv_man__animation.glb')