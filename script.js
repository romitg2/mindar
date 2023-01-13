
// THREE.js library
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
    // Instantiating MindarThree Object

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.body,
        imageTargetSrc: './targets.mind'
    })

    const {renderer, scene, camera} = mindarThree;

    // creating three.js objects
    const scale = 3;
    
    const geometryOne = new THREE.PlaneGeometry(0.1 * scale, 0.1 * scale);
    const geometryTwo = new THREE.PlaneGeometry(0.1 * scale, 0.1 * scale);
    const geometryThree = new THREE.PlaneGeometry(0.1 * scale, 0.1 * scale);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00, transprent: true, opacity: 0.1});
    const meshOne = new THREE.Mesh(geometryOne, material);
    const meshTwo = new THREE.Mesh(geometryTwo, material);
    const meshThree = new THREE.Mesh(geometryThree, material);

    meshOne.position.set(1, -0.5, 0);
    meshTwo.position.set(1, 0, 0);
    meshThree.position.set(1, 0.5, 0);
    
    const meshGroup = new THREE.Group();
    meshGroup.add(meshOne, meshTwo, meshThree);

    // creating anchor element

    const anchor = mindarThree.addAnchor(0);
    console.log(anchor);
    console.log(anchor.group);
    anchor.group.add(meshGroup);
    console.log(anchor.group);

    // starting the mindar engine

    mindarThree.start();

    // rendering the loop

    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
        
    });
})



