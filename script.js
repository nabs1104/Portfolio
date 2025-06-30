let split = SplitText.create(".logo, .nav-list, .main.header", { type: "words, chars" });
let mainHeader = SplitText.create(".main-header", { type: "words, chars" })

document.fonts.ready.then(() => {
    gsap.set(".logo, .nav-list", { opacity: 1 });

    SplitText.create(".logo, .nav-list, .main-header", {
        type: "words,lines",
        mask: "lines", // <-- this can be "lines" or "words" or "chars"
    });

    gsap.from(split.words, {
        duration: 2.0, 
        y: 20,         
        stagger: 0.10,
        ease: "elastic.inOut"
    });

    gsap.from(mainHeader.chars, {
        duration: 1, 
        delay: 1,
        y: 50,         
        stagger: 0.02,
        ease: "back.inOut"
    })
    
});
