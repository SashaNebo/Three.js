const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: '#7fdbff' })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const sizes = {
  width: 600,
  heigth: 600,
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth)
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1

scene.add(camera)
const canvas = document.querySelector('.canvas')

const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(sizes.width, sizes.heigth)

renderer.render(scene, camera)
