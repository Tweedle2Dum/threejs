import * as THREE from 'three';
import './styles.css';

console.log(THREE)

//scene is like the container for all the stuff...all the objects like lighting, shapes etc
const scene = new THREE.Scene()

//creating axes helper
const axesHelper= new THREE.AxesHelper()
scene.add(axesHelper)

//red cube 
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'#ff0000'})
//geometry + material = shape or mesh of that shape ??
const mesh = new THREE.Mesh(geometry,material)
mesh.position.x = 1;
mesh.position.y = 0;

//also position.sest(x,y,z)----mesh.position.set(x,y,z)
//adding stuff to scene
scene.add(mesh)


//using scale to change size later on
mesh.scale.set(1,1.5,2)

//rotation---this is in radians---3.14 ie pie is 1 radian---180 degree
mesh.rotation.reorder("YXZ")//fps and stuff preferable so we dont get stuck in a gimble lock
mesh.rotation.x=1

//adding a camera to view stuff / multiple camera possible but view only from once at a time
const fov = 75 //only angle that is in degrees?
const aspectRatio = 800/600
const camera = new THREE.PerspectiveCamera(fov,aspectRatio)
camera.position.z = 3;
scene.add(camera)

//camera.lookAt(vector3) points the camera at the vector3 coordinate, works with every object3D object


//renderer
const canvas = document.querySelector("#webgl")
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

//takes a vector3 object as param-- camera.position returns vector3
console.log(mesh.position.distanceTo(camera.position))

renderer.setSize(800,600)
renderer.render(scene,camera)


//mesh.position.normalize()-----reduces the length of vector to 1 ??
//works on any object that inherits from Object3D class

