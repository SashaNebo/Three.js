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

const geometry = new THREE.BoxGeometry(1, 1, 1, 100, 10, 1)
const material = new THREE.MeshBasicMaterial({ color: '#7fdbff', wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = -1
// mesh.position.y = -1
// mesh.position.z = 0.5

mesh.scale.set(3, 2, 2)
mesh.rotation.y = 0.7
mesh.rotation.x = 0.4

scene.add(mesh)

const sizes = {
  width: 600,
  heigth: 600,
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth)

camera.position.z = 4

scene.add(camera, axecHelper)
const canvas = document.querySelector('.canvas')

const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(sizes.width, sizes.heigth)

renderer.render(scene, camera)
