import * as THREE from 'three'
import './style.css'

// Виды преобразований объектов
// - position (для перемещения)
// - scale (для изменения размера)
// - rotation (для вращения)
// - quaternion (для вращения, более сложная)
// ---
// Направления
// Длина вектора - mesh.position.length()
// Расстояние до другого вектора - mesh.postion.distance(camera.position)
// Нормализованно значение - mesh.postion.normalize()
// Быстрое изменение координат x, y, z - mesh.postion.set(1, 1, 1)

const scene = new THREE.Scene()

const axecHelper = new THREE.AxesHelper(3)

// scene.add(axecHelper)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: '#7fdbff', wireframe: true })

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width: 600,
  heigth: 600,
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth)

camera.position.z = 3

scene.add(camera, axecHelper)
// camera.lookAt(new THREE.Vector3(0, -1, 0))
const canvas = document.querySelector('.canvas')

const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(sizes.width, sizes.heigth)

renderer.render(scene, camera)

// let time = Date.now()

const clock = new THREE.Clock()

const tick = () => {
  // const currentTime = Date.now()
  // const delta = currentTime - time
  // time = currentTime

  const elepsedTime = clock.getElapsedTime()

  mesh.rotation.y = elepsedTime
  mesh.rotation.x = elepsedTime
  // mesh.rotation.x += 0.001
  // mesh.rotation.z += 0.001

  // mesh.position.x = Math.cos(elepsedTime)
  // mesh.position.y = Math.sin(elepsedTime)

  camera.position.x = Math.cos(elepsedTime)
  camera.position.y = Math.sin(elepsedTime)
  // camera.lookAt(mesh.position)

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
