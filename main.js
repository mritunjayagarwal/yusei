gsap.registerPlugin(ScrollTrigger);

function goToSection(i, anim) {
  gsap.set("body", {overflow: "hidden"});
  
  gsap.to("body", {
    scrollTo: {y: i*innerHeight, autoKill: false},
    duration: 1.4,
    overwrite: true,
    onComplete: () => gsap.set("body", {overflow: "auto"})
  });
}

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => goToSection(i)
  });
  
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i)
  });
});
