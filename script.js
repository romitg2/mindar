
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
    
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00, transprent: true, opacity: 0.1});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.position.set(0, 0, 0);

    // creating anchor element

    const anchor = mindarThree.addAnchor(0);
    console.log(anchor);
    console.log(anchor.group);
    anchor.group.add(mesh);
    console.log(anchor.group);

    // starting the mindar engine

    mindarThree.start();

    // rendering the loop

    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
        
    });
})



