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

const group = new THREE.Group()
group.scale.y = 2
group.rotation.x = Math.PI * 0.15

const cube1 = new THREE.Mesh(geometry, material)
cube1.position.x = -1.5

const cube2 = new THREE.Mesh(geometry, material)
cube2.position.x = 0

const cube3 = new THREE.Mesh(geometry, material)
cube3.position.x = 1.5

group.add(cube1)
group.add(cube2)
group.add(cube3)

scene.add(group)

// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = -1
// mesh.position.y = -1
// mesh.position.z = 0.5

// mesh.scale.set(1, 1, 1)
// mesh.rotation.y = 0.7

// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.reorder('XYZ')

// scene.add(mesh)

const sizes = {
  width: 600,
  heigth: 600,
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth)

camera.position.z = 5
camera.position.y = 1.5

scene.add(camera, axecHelper)
// camera.lookAt(new THREE.Vector3(0, -1, 0))
const canvas = document.querySelector('.canvas')

const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(sizes.width, sizes.heigth)

renderer.render(scene, camera)
