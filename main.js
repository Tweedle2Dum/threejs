import * as THREE from 'three';


console.log(THREE)

//scene is like the container for all the stuff...all the objects like lighting, shapes etc
const scene = new THREE.Scene()

//red cube 
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'#ff0000'})
//geometry + material = shape or mesh of that shape ??
const mesh = new THREE.Mesh(geometry,material)

//adding stuff to scene
scene.add(mesh)

//adding a camera to view stuff / multiple camera possible but view only from once at a time
const fov = 75 
const aspectRatio = 800/600
const camera = new THREE.PerspectiveCamera(fov,aspectRatio)
camera.position.z = 3;
scene.add(camera)

//renderer
const canvas = document.querySelector("#webgl")
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(800,600)
renderer.render(scene,camera)
