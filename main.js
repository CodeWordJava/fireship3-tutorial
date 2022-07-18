import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


 // setting up

 const scene = new THREE.Scene();
// //this is the perspective camera it takes 3 arguements

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// //this is the renderer it tells three which element to manipulate
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  });

renderer.setPixelRatio(window.devicePixelRatio);

// //this make the render full screen
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);
camera.position.setX(-3);


renderer.render(scene, camera);

// // the above code sets up the project but renders nothing but a blanks scrren until you add the below
// // this sets the shape
const geometry = new THREE.TorusGeometry(5, 3, 16, 100);
// //this makes is visable as the shape needs a skin
const material = new THREE.MeshStandardMaterial({ color:0xff6347 });
 
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set (20,20,20)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight,ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50)
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);


function addStar(){
const geometry = new THREE.SphereGeometry(0.25,24,24);
const material = new THREE.MeshStandardMaterial({ color:0xffffff })
const star = new THREE.Mesh( geometry,material);

// this gives the distribution of stars
const [x, y, z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));
star.position.set(x, y, z);
scene.add(star)
}
//this sets the number of stars
Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.png')
scene.background =spaceTexture;


function animate() {
requestAnimationFrame(animate);
 torus.rotation.x +=0.01;
 torus.rotation.y +=0.005;
 torus.rotation.z +=0.01;
  



 controls.update();
 renderer.render(scene, camera);
}

animate();


