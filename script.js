
document.addEventListener('DOMContentLoaded', () => {

    document.fonts.ready.then(() => {
    let split = SplitText.create(".logo, .nav-list, .hero-text", { type: "words, chars" });
    let mainHeader = SplitText.create(".main-header", { type: "words, chars" })
   
    gsap.set(".logo, .nav-list", { opacity: 1 });

    SplitText.create(".logo, .nav-list, .main-header, .hero-text", {
        type: "words,lines",
        mask: "lines", // <-- this can be "lines" or "words" or "chars"
    });

    gsap.from(split.words, {
        duration: 1.8, 
        y: 32,         
        stagger: 0.10,
        ease: "elastic.inOut"
    });

    gsap.from(mainHeader.chars, {
        duration: 0.8, 
        delay: 1,
        y: 50,         
        stagger: 0.02,
        ease: "back.inOut"
    })
    
});


})


