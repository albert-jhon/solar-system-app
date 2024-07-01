import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { PlanetsServiceService } from '../planets-service.service';
import { Planet } from '../interfaces/Planet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-system-solar',
  templateUrl: './system-solar.component.html',
  styleUrls: ['./system-solar.component.css'],
})
export class SystemSolarComponent implements OnInit {
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private clock!: THREE.Clock;
  private canvasSizes = {
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
  };
  private ambientLight!: THREE.AmbientLight;
  private pointLight!: THREE.AmbientLight;
  private planet!: THREE.Mesh;
  private sun!: THREE.Mesh;

  private planetSelected!: Planet;
  constructor(
    private _planetsServiceService: PlanetsServiceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    this.loadPlanetIfo();
    this.initializeScene();
    this.addLights();
    this.createObjects();
    this.createRenderer();
    this.addControls();
    this.animateGeometry();
  }

  private initializeScene(): void {
    this.scene = new THREE.Scene();

    const texture = new THREE.TextureLoader().load(
      this.planetSelected.imageUrl
    );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    const suntexture = new THREE.TextureLoader().load('assets/sun.png');

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sunmaterial = new THREE.MeshBasicMaterial({ map: suntexture });

    const Sphere = new THREE.SphereGeometry(2, 64, 64);
    const sunSphere = new THREE.SphereGeometry(3, 32, 100);

    this.planet = new THREE.Mesh(Sphere, material);
    this.planet.position.set(10, 0, 0);
    this.sun = new THREE.Mesh(sunSphere, sunmaterial);

    this.scene.add(this.sun, this.planet);

    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvasSizes.width / this.canvasSizes.height,
      0.001,
      1000
    );
    this.camera.position.z = 30;
    this.scene.add(this.camera);

    this.clock = new THREE.Clock();
  }

  private addLights(): void {
    this.ambientLight = new THREE.AmbientLight(0xfffffff, 0.5);
    this.scene.add(this.ambientLight);

    this.pointLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.pointLight.position.set(2, 2, 2);
    this.scene.add(this.pointLight);
  }

  private createObjects(): void {
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 'white' });
    const ring = new THREE.RingGeometry(15, 15.1233, 100);
    const orbit = new THREE.Mesh(ring, ringMaterial);
    orbit.position.set(0, 0, -13);
    this.scene.add(orbit);
  }

  private createRenderer(): void {
    this.canvas = document.getElementById('canvas-box') as HTMLCanvasElement;

    if (!this.canvas) return;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: this.canvas,
    });

    // this.renderer.setClearColor(0xe232222, 1);
    this.renderer.setSize(this.canvasSizes.width, this.canvasSizes.height);
  }

  private addControls(): void {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onWindowResize(): void {
    this.canvasSizes.width = window.innerWidth - 20;
    this.canvasSizes.height = window.innerHeight;

    this.camera.aspect = this.canvasSizes.width / this.canvasSizes.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.canvasSizes.width, this.canvasSizes.height);
    this.renderer.render(this.scene, this.camera);
  }
  private loadPlanetIfo(): void {
    this.route.queryParamMap.subscribe((params) => {
      let name: string = params.get('name') ?? '';
      this.planetSelected = this._planetsServiceService.getPlanetByName(name);
    });
  }
  private createStarParticles(scene: THREE.Scene): void {
    const particleCount = 1000;
    const particles = new THREE.PointLight();
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    for (let p = 0; p < particleCount; p++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      const particle = new THREE.Vector3(x, y, z);
      //particles.vertices.push(particle);
    }

    // const particleSystem = new THREE.Points(particles, particleMaterial);
    //scene.add(particleSystem);
  }

  private animateGeometry(): void {
    const animate = () => {
      const elapsedTime = this.clock.getElapsedTime();

      // Update animation objects
      this.planet.rotation.y = elapsedTime * 0.3;
      this.sun.rotation.y = elapsedTime * 0.3;

      this.controls.update();
      // Render
      this.renderer.render(this.scene, this.camera);

      // Call animateGeometry again on the next frame
      window.requestAnimationFrame(animate);
    };

    animate();
  }
}
