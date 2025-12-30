import { SpawnPoint } from '@xrift/world-components'
import { DoubleSide } from 'three'

export interface SpawnPointHelperProps {
  position?: [number, number, number]
  yaw?: number
}

export const SpawnPointHelper: React.FC<SpawnPointHelperProps> = ({
  position = [0, 0, 0],
  yaw = 0,
}) => {
  const yawRad = (yaw * Math.PI) / 180

  return (
    <group position={position}>
      {/* SpawnPoint本体 */}
      <SpawnPoint yaw={yaw} />

      {/* 地面の円（スポーン位置を示す） */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[0.4, 0.5, 32]} />
        <meshBasicMaterial color="#00ff88" side={DoubleSide} />
      </mesh>

      {/* 矢印（向きを示す） - yawに合わせて回転 */}
      <group rotation={[0, -yawRad, 0]}>
        {/* 矢印の軸 */}
        <mesh position={[0, 0.02, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        {/* 矢印の先端 */}
        <mesh position={[0, 0.02, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.08, 0.15, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  )
}
