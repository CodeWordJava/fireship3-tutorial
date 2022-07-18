// import './style.css'
// import * as THREE from 'three';


//  // setting up

//  const scene = new THREE.Scene();
// // //this is the perspective camera it takes 3 arguements

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// // //this is the renderer it tells three which element to manipulate
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#bg'),
// });

// renderer.setPixelRatio(window.devicePixelRatio);

// // //this make the render full screen
// renderer.setSize(window.innerWidth, window.innerHeight);

// camera.position.setZ(30);
// camera.position.setX(-3);


// renderer.render(scene, camera);

// // // the above code sets up the project but renders nothing but a blanks scrren until you add the below
// // // this sets the shape
// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// // //this makes is visable as the shape needs a skin
// const material = new THREE.MeshStandardMaterial({ color:0xff6347 });
 
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus)



// function animate() {
// requestAnimationFrame(animate);

// // //   torus.rotation.x += 0.01;
// // //   torus.rotation.y += 0.005;
// // //   torus.rotation.z += 0.01;

// // //   moon.rotation.x += 0.005;

// //   // controls.update();
//  renderer.render(scene, camera);
// }

// animate();