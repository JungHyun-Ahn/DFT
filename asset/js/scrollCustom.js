// Text Animation Variable
let beforeWh = 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 0%, transparent 0%)';
let afterWh = 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%, transparent 100%)';
let beforeBlue = 'linear-gradient(90deg, rgb(16, 33, 139) 0%, rgb(16, 33, 139) 0%, transparent 0%)';
let afterBlue = 'linear-gradient(90deg, rgb(16, 33, 139) 0%, rgb(16, 33, 139) 100%, transparent 100%)';

// sect1

const initSect01Animations = () => {
    let isPlaying = false;
    let video = document.getElementById("bgVideo");

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
            ScrollTrigger.create({
                trigger: ".sect1",
                start: "top+=0.5 top",
                end: "+=700%",
                pin: true,
                pintype: "fixed",
                pinSpacing: true,
                fastScrollEnd: true,
                preventOverlaps: true,
            });
        
            const sect1TL = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sect1",
                    start: "top top",
                    end: "+=650%",
                    scrub: 2,
                    onUpdate: (self) => {
                        const inRange = self.progress >= 0 && self.progress < 0.2;
                        // console.log(inRange);

                        if (inRange && !isPlaying) {
                        video.play();
                        isPlaying = true;
                        }

                        if (!inRange && isPlaying) {
                        video.pause();
                        isPlaying = false;
                        }
                    }
                }
            });
            sect1TL
            .to({}, {duration: 1})
            .to(".sect1 .cont1", {opacity: 0})
            .to(".sect1 .cont2", {opacity: 1})
            .to(".sect1 .cont2 .txt", {y: '-7vh', duration: 0.3})
            .set('.sect1 .cont2 .bt', { display: 'flex' })
            .to(".sect1 .cont2 .bt", {y: '-10px', opacity: 1, duration: 0.3})
            .to(".sect1 .bg2", {opacity: 1, delay: 1, duration: 0.3})
            .to(".sect1 .cont2 .bt", {opacity: 0}, "<")
            .to(".sect1 .cont2 .text-bg .bg", {opacity: 1}, "<")
            .set('.sect1 .cont2 .bt', { display: 'none' })
            .to(".sect1 .cont2 .txt .disappear", 
                {opacity: 0, delay: 1}
            )
            .to(".sect1 .cont2 .txt .blue.last", 
                {x: '20%'}
            )
            .fromTo(".sect1 .line1", 
                {opacity: 0, y: '50%'},
                {opacity: 1, y: 0, duration: 0.3}
            )
            .to(".sect1 .cont2 .text-bg .bg", {opacity: 0}, "<")
            .to({}, {duration: 0.5})
            .fromTo(".sect1 .line2", 
                {opacity: 0, x: '-50%'},
                {opacity: 1, x: 0, duration: 0.3}
            )
            .to(".sect1 .cont2 .txt .blue", {color: '#fff'}, "<")
            .fromTo(".sect1 .cont2 p.blue .desc", 
                {opacity: 0, y: '20px'},
                {opacity: 1, y: 0, duration: 0.5}
            )
            .to({}, {duration: 2})
            .to(".sect1 .line1", 
                {height: '120px', background: 'linear-gradient(to top, #317DE9 0%, #317DE9 20%, #31C7E9 80%, #31C7E9 100%)'}
            )
            .fromTo(".sect1 .line2", 
                {width: '100%'},
                {width: '120px', background: 'linear-gradient(to right, #317DE9 0%, #317DE9 20%, #31C7E9 80%, #31C7E9 100%)'}, "<"
            )
            .to({}, {duration: 1})
            .to(".sect1 .cont2", {opacity: 0})
            .to(".sect1 .cont3",  {opacity: 1})
            .fromTo(".sect1 .cont3 .txt1", 
                {background: beforeWh},
                {background: afterWh},
            )
            .fromTo(".sect1 .cont3 .txt2", 
                {background: beforeBlue, color: 'rgba(255, 255, 255, 0.20)'},
                {background: afterBlue, color: 'rgba(255, 255, 255, 1)'},
            )
            .fromTo(".sect1 .cont3 .txt3", 
                {background: beforeWh},
                {background: afterWh},
            )
            .fromTo(".sect1 .cont3 .txt4", 
                {background: beforeBlue, color: 'rgba(255, 255, 255, 0.20)'},
                {background: afterBlue, color: 'rgba(255, 255, 255, 1)'},
            )
            .fromTo(".sect1 .cont3 .txt5", 
                {background: beforeWh},
                {background: afterWh},
            )
            .fromTo(".sect1 .cont3 .txt6", 
                {background: beforeBlue, color: 'rgba(255, 255, 255, 0.20)'},
                {background: afterBlue, color: 'rgba(255, 255, 255, 1)'},
            )
            .fromTo(".sect1 .cont3 .txt7", 
                {background: beforeWh},
                {background: afterWh},
            )
            .to(".sect1 .cont3", {opacity: 0})
            .to(".sect1 .cont4",  {opacity: 1})
            .to({}, {duration: 2})
            .fromTo(".sect1 .cont4 .bx-wrap .bx1", 
                { opacity: 1},
                { opacity: 0, duration: 2}
            )
            .fromTo(".sect1 .cont4 .bx-wrap .bx2", 
                { opacity: 0, y: '100%'},
                { opacity: 1, y: '0%', duration: 2},
                "<"
            )
            .to({}, {duration: 2})
            .fromTo(".sect1 .cont4 .bx-wrap .bx2", 
                { opacity: 1},
                { opacity: 0, duration: 2}
            )
            .fromTo(".sect1 .cont4 .bx-wrap .bx3", 
                { opacity: 0, y: '100%'},
                { opacity: 1, y: '0%'},
                "<"
            )
            .to({}, {duration: 2})
            .to(".sect1 .cont4", {opacity: 0})
            .to(".sect1 .cont5",  {opacity: 1})
            .to({}, {duration: 2});
        },
        "(max-width: 767px)": function() {
            ScrollTrigger.create({
                trigger: ".sect1",
                start: "top+=0.5 top",
                end: "+=900%",
                pin: true,
                pintype: "fixed",
                pinSpacing: true,
                fastScrollEnd: true,
                preventOverlaps: true,
            });
        
            const sect1TL = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sect1",
                    start: "top top",
                    end: "+=850%",
                    scrub: 1,
                }
            });
            sect1TL
            .to({}, {duration: 1})
            .to(".sect1 .cont1", {opacity: 0})
            .to(".sect1 .cont2", {opacity: 1})
            .to(".sect1 .cont2 .txt", {y: '-7vh', duration: 0.3})
            .set('.sect1 .cont2 .bt', { display: 'flex' })
            .to(".sect1 .cont2 .bt", {y: '-10px', opacity: 1, duration: 0.3})
            .to(".sect1 .bg2", {opacity: 1, delay: 1, duration: 0.3})
            .to(".sect1 .cont2 .bt", {opacity: 0}, "<")
            .to(".sect1 .cont2 .text-bg .bg", {opacity: 1}, "<")
            .set('.sect1 .cont2 .bt', { display: 'none' })
            .to(".sect1 .cont2 .txt .disappear", {opacity: 0, delay: 1})
            .fromTo(".sect1 .line2", 
                {opacity: 0, x: '-50%'},
                {opacity: 1, x: 0, duration: 0.3}
            )
            .to(".sect1 .cont2 .txt .blue", {color: '#fff'}, "<")
            .to({}, {duration: 0.5})
            .fromTo(".sect1 .line1", 
                {opacity: 0, height: 0},
                {opacity: 1, height: 64, duration: 1}
            )
            .to(".sect1 .cont2 .text-bg .bg", {opacity: 0}, "<")
            .to(".sect1 .line2", 
                {width: '64px', background: 'linear-gradient(to right, #317DE9 0%, #317DE9 20%, #31C7E9 80%, #31C7E9 100%)'}, "<"
            )
            .to(".sect1 .cont2 .txt .blue.first", 
                {y: '-7.5vh'}
            )
            .to(".sect1 .cont2 .txt .blue.last", 
                {y: '1.5vh'}, "<"
            )
            .to({}, {duration: 0.5})
            .fromTo(".sect1 .cont2 p.blue .desc", 
                {opacity: 0, y: '20px'},
                {opacity: 1, y: 0, duration: 0.5}
            )
            .to({}, {duration: 1})
            .to(".sect1 .cont2", {opacity: 0})
            .to(".sect1 .cont3",  {opacity: 1})
            .fromTo(".sect1 .cont3 .txt1", 
                {background: beforeWh},
                {background: afterWh},
            )
            .fromTo(".sect1 .cont3 .txt2", 
                {background: beforeBlue, color: 'rgba(255, 255, 255, 0.20)'},
                {background: afterBlue, color: 'rgba(255, 255, 255, 1)'},
            )
            .fromTo(".sect1 .cont3 .txt3", 
                {background: beforeWh},
                {background: afterWh},
            )
            .fromTo(".sect1 .cont3 .txt4", 
                {background: beforeBlue, color: 'rgba(255, 255, 255, 0.20)'},
                {background: afterBlue, color: 'rgba(255, 255, 255, 1)'},
            )
            .fromTo(".sect1 .cont3 .txt5", 
                {background: beforeWh},
                {background: afterWh},
            )
            .fromTo(".sect1 .cont3 .txt6", 
                {background: beforeBlue, color: 'rgba(255, 255, 255, 0.20)'},
                {background: afterBlue, color: 'rgba(255, 255, 255, 1)'},
            )
            .fromTo(".sect1 .cont3 .txt7", 
                {background: beforeWh},
                {background: afterWh},
            )
            .to(".sect1 .cont3", {opacity: 0})
            .to(".sect1 .cont4",  {opacity: 1})
            .to({}, {duration: 2})
            .fromTo(".sect1 .cont4 .bx-wrap .bx1", 
                { opacity: 1},
                { opacity: 0, duration: 2}
            )
            .fromTo(".sect1 .cont4 .bx-wrap .bx2", 
                { opacity: 0, y: '100%'},
                { opacity: 1, y: '0%', duration: 2},
                "<"
            )
            .to({}, {duration: 2})
            .to(".sect1 .cont4 .bx-wrap .bx2", 
                { opacity: 0, duration: 2}
            )
            .fromTo(".sect1 .cont4 .bx-wrap .bx3", 
                { opacity: 0, y: '100%'},
                { opacity: 1, y: '0%'},
                "<"
            )
            .to({}, {duration: 2})
            .to(".sect1 .cont4", {opacity: 0})
            .to(".sect1 .cont5",  {opacity: 1})
            .to({}, {duration: 2});
        },
    });
    
}

// sect2
const initSect02Animations = () => {
    const sect2Cont1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sect2 .cont1",
            start: "top center",
            end: "+=30%",
            scrub: 1,
        }
    });
    sect2Cont1
    .fromTo(".sect2 .cont1 .txt1", 
        {background: beforeWh},
        {background: afterWh},
    )
    .fromTo(".sect2 .cont1 .txt2", 
        {background: beforeWh},
        {background: afterWh},
    )
    .fromTo(".sect2 .cont1 .tree", 
        {y: 50, scale: 0.9},
        {y: 1, scale: 1},
    );

    gsap.fromTo(
        ".sect2 .cont2 .detail-wrap:nth-of-type(1)",
        {
            y: '8%',
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: ".sect2 .cont2 .detail-wrap:nth-of-type(1)",
            start: "top top+=85%",
            end: "+=20%",
            scrub: 1
            }
        }
    );
    gsap.fromTo(
        ".sect2 .cont2 .detail-wrap:nth-of-type(2)",
        {
            y: '8%',
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: ".sect2 .cont2 .detail-wrap:nth-of-type(2)",
            start: "top top+=85%",
            end: "+=20%",
            scrub: 1
            }
        }
    );
    gsap.fromTo(
        ".sect2 .cont3",
        {
            y: '8%',
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: ".sect2 .cont3",
            start: "top top+=85%",
            end: "+=20%",
            scrub: 1
            }
        }
    );
}

// sect3
const initSect03Animations = () => {
    const sect3Cont1TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".sect3",
            start: "top center",
            end: "+=60%",
            scrub: 1,
        }
    });
    sect3Cont1TL
    .fromTo(".sect3 .cont1 .txt1", 
        {background: beforeWh},
        {background: afterWh, duration: 0.8},
    )
    .fromTo(".sect3 .cont1 .txt2", 
        {background: beforeWh},
        {background: afterWh, duration: 0.8},
    );

    const sect3Cont2TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".sect3 .cont2",
            start: "top center+=20%",
            end: "+=60%",
            scrub: 1,
        }
    });
    sect3Cont2TL
    .fromTo(".sect3 .cont2 .txt1", 
        {background: beforeWh},
        {background: afterWh, duration: 0.8},
    )
    .fromTo(".sect3 .cont2 .txt2", 
        {background: beforeWh},
        {background: afterWh, duration: 0.8},
    );

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
            gsap.to(".sect3 .tit-wrap", {
                scrollTrigger: {
                    trigger: ".sect3",
                    pin: ".sect3 .tit-wrap",
                    start: "top top",
                    end: "bottom bottom+=80%",
                    scrub: 1,
                }
            });
            gsap.to(".sect3 .tree", {
                scrollTrigger: {
                    trigger: ".sect3 .cont1",
                    start: "top top",
                    end: "bottom bottom+=50%",
                    scrub: 1,
                    onEnter: () => $(".sect3 .tree").removeClass('hide'),
                    onLeave: () => $(".sect3 .tree").addClass('hide'),
                    onLeaveBack: () => $(".sect3 .tree").addClass('hide'),
                    onEnterBack: () => $(".sect3 .tree").removeClass('hide'),
                }
            });
            gsap.to(".sect3 .tree", {
                scrollTrigger: {
                    trigger: ".sect3 .cont1",
                    pin: ".sect3 .tree",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });
        },
    });
}

// sect4
const initSect04Animations = () => {

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
            const sect4Cont1TL = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sect4",
                    start: "top center+=20%",
                    end: "+=60%",
                    scrub: 1,
                }
            });
            sect4Cont1TL
            .fromTo(".sect4 .txt1 b", 
                {background: beforeBlue},
                {background: afterBlue, duration: 0.8},
            )
            .to(".sect4 .txt1 span", {opacity:0})
            .fromTo(".sect4 .txt2 b", 
                {background: beforeBlue},
                {background: afterBlue, duration: 0.8},
            )
            .to(".sect4 .txt2 span", {opacity:0});
        },
        "(max-width: 767px)": function() {
            const sect4Cont1TL = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sect4",
                    start: "top center+=20%",
                    end: "+=60%",
                    scrub: 1,
                }
            });
            sect4Cont1TL
            .fromTo(".sect4 .txt1 b", 
                {background: beforeBlue},
                {background: afterBlue, duration: 0.8},
            )
            .to(".sect4 .txt1 span", {opacity:0})
            .fromTo(".sect4 .txt2 b", 
                {background: beforeBlue},
                {background: afterBlue, duration: 0.8},
            )
            .to(".sect4 .txt2 span", {opacity:0})
            .fromTo(".sect4 .txt3 b", 
                {background: beforeBlue},
                {background: afterBlue, duration: 0.8},
            )
            .to(".sect4 .txt3 span", {opacity:0});
            
        },
    });

    
}


// 페이지 초기 상태 설정 함수
const initializePageState = () => {
    window.scrollTo(0, 0);
};

const initGSAP = () => {
    gsap.registerPlugin(ScrollTrigger);

    initSect01Animations();
    initSect02Animations();
    initSect03Animations();
    initSect04Animations();
};

$(function(){
    initializePageState();
    setTimeout(() => {
        initGSAP();
    }, 100);
});
