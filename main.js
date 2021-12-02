const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")
const e = document.getElementById("e")
const f = document.getElementById("f")
const g = document.getElementById("g")
const h = document.getElementById("h")
const i = document.getElementById("i")


const squares = [a,b,c,d,e,f,g,h,i];
const newitems = [2,4]
function droppingNew() {
    zeros = [];
    squares.forEach(function(element) {
        if (element.innerHTML == 0) {
            zeros.push(element)
        }
    });
    console.log(zeros);
    if (zeros.length > 0) {
        rand = Math.floor(Math.random()*zeros.length)
        zeros[rand].innerHTML = newitems[Math.floor(Math.random()*newitems.length)]
    }
}

droppingNew()
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        if (c.innerHTML == 0) {
            if (b.innerHTML == 0) {
                c.innerHTML = a.innerHTML
                a.innerHTML = 0
            } else {
                if (b.innerHTML == a.innerHTML) {
                    c.innerHTML = parseInt(a.innerHTML) + parseInt(b.innerHTML)
                    a.innerHTML = 0
                    b.innerHTML = 0
                } else {
                    c.innerHTML = b.innerHTML
                    b.innerHTML = a.innerHTML
                    a.innerHTML = 0
                }
            }
        } else if (b.innerHTML == 0) {
            if (c.innerHTML == a.innerHTML) {
                c.innerHTML = parseInt(c.innerHTML) + parseInt(a.innerHTML)
                a.innerHTML = 0 
            } else {
                b.innerHTML = a.innerHTML
                a.innerHTML = 0
            }
        } else {
            if (c.innerHTML == b.innerHTML) {
                c.innerHTML = parseInt(c.innerHTML) + parseInt(b.innerHTML)
                b.innerHTML = a.innerHTML
                a.innerHTML =0 
            } else if (b.innerHTML == a.innerHTML) {
                b.innerHTML = parseInt(b.innerHTML) + parseInt(a.innerHTML)
                a.innerHTML = 0 
            }
        }
        if (f.innerHTML == 0) {
            console.log("1")
            if (e.innerHTML == 0) {
            console.log("2")
                f.innerHTML = d.innerHTML
                d.innerHTML = 0
            } else {
            console.log("3")
            console.log(f.innerHTML)
                if (e.innerHTML == d.innerHTML) {
            console.log("4")
                    f.innerHTML = parseInt(d.innerHTML) + parseInt(e.innerHTML)
                    d.innerHTML = 0
                    e.innerHTML = 0
                } else {
            console.log("5")
            console.log(f.innerHTML)
                    f.innerHTML = e.innerHTML
                    e.innerHTML = d.innerHTML
                    d.innerHTML = 0
                }
            }
        } else if (e.innerHTML == 0) {
            console.log("6")
            if (f.innerHTML == d.innerHTML) {
            console.log("7")
                f.innerHTML = parseInt(f.innerHTML) + parseInt(d.innerHTML)
                d.innerHTML = 0 
            } else {
            console.log("8")
                e.innerHTML = d.innerHTML
                d.innerHTML = 0
            }
        } else {
            console.log("9")
            if (f.innerHTML == e.innerHTML) {
            console.log("10")
                f.innerHTML = parseInt(f.innerHTML) + parseInt(e.innerHTML)
                e.innerHTML = d.innerHTML
                d.innerHTML =0 
            } else if (e.innerHTML == d.innerHTML) {
            console.log("11")
                e.innerHTML = parseInt(e.innerHTML) + parseInt(d.innerHTML)
                d.innerHTML = 0 
            }
        }
        if (i.innerHTML == 0) {
            if (h.innerHTML == 0) {
                i.innerHTML = g.innerHTML
                g.innerHTML = 0
            } else {
                if (h.innerHTML == g.innerHTML) {
                    i.innerHTML = parseInt(g.innerHTML) + parseInt(h.innerHTML)
                    g.innerHTML = 0
                    h.innerHTML = 0
                } else {
                    i.innerHTML = h.innerHTML
                    h.innerHTML = g.innerHTML
                    g.innerHTML = 0
                }
            }
        } else if (h.innerHTML == 0) {
            if (i.innerHTML == g.innerHTML) {
                i.innerHTML = parseInt(i.innerHTML) + parseInt(g.innerHTML)
                g.innerHTML = 0 
            } else {
                h.innerHTML = g.innerHTML
                g.innerHTML = 0
            }
        } else {
            if (i.innerHTML == h.innerHTML) {
                i.innerHTML = parseInt(i.innerHTML) + parseInt(h.innerHTML)
                h.innerHTML = g.innerHTML
                g.innerHTML =0 
            } else if (h.innerHTML == g.innerHTML) {
                h.innerHTML = parseInt(h.innerHTML) + parseInt(g.innerHTML)
                g.innerHTML = 0 
            }
        }
        droppingNew();

    } else if (event.key === "ArrowLeft") {
        if (a.innerHTML == 0) {
            if (b.innerHTML == 0) {
                a.innerHTML = c.innerHTML
                c.innerHTML = 0
            } else {
                if (b.innerHTML == c.innerHTML) {
                    a.innerHTML = parseInt(c.innerHTML) + parseInt(b.innerHTML)
                    c.innerHTML = 0
                    b.innerHTML = 0
                } else {
                    a.innerHTML = b.innerHTML
                    b.innerHTML = c.innerHTML
                    c.innerHTML = 0
                }
            }
        } else if (b.innerHTML == 0) {
            if (a.innerHTML == c.innerHTML) {
                a.innerHTML = parseInt(a.innerHTML) + parseInt(c.innerHTML)
                c.innerHTML = 0 
            } else {
                b.innerHTML = c.innerHTML
                c.innerHTML = 0
            }
        } else {
            if (a.innerHTML == b.innerHTML) {
                a.innerHTML = parseInt(a.innerHTML) + parseInt(b.innerHTML)
                b.innerHTML = c.innerHTML
                c.innerHTML =0 
            } else if (b.innerHTML == c.innerHTML) {
                b.innerHTML = parseInt(b.innerHTML) + parseInt(c.innerHTML)
                c.innerHTML = 0 
            }
        }
        if (d.innerHTML == 0) {
            if (e.innerHTML == 0) {
                d.innerHTML = f.innerHTML
                f.innerHTML = 0
            } else {
                if (e.innerHTML == f.innerHTML) {
                    d.innerHTML = parseInt(f.innerHTML) + parseInt(e.innerHTML)
                    f.innerHTML = 0
                    e.innerHTML = 0
                } else {
                    d.innerHTML = e.innerHTML
                    e.innerHTML = f.innerHTML
                    f.innerHTML = 0
                }
            }
        } else if (e.innerHTML == 0) {
            if (d.innerHTML == f.innerHTML) {
                d.innerHTML = parseInt(d.innerHTML) + parseInt(f.innerHTML)
                f.innerHTML = 0 
            } else {
                e.innerHTML = f.innerHTML
                f.innerHTML = 0
            }
        } else {
            if (d.innerHTML == e.innerHTML) {
                d.innerHTML = parseInt(d.innerHTML) + parseInt(e.innerHTML)
                e.innerHTML = f.innerHTML
                f.innerHTML =0 
            } else if (e.innerHTML == f.innerHTML) {
                e.innerHTML = parseInt(e.innerHTML) + parseInt(f.innerHTML)
                f.innerHTML = 0 
            }
        }
        if (g.innerHTML == 0) {
            if (h.innerHTML == 0) {
                g.innerHTML = i.innerHTML
                i.innerHTML = 0
            } else {
                if (h.innerHTML == i.innerHTML) {
                    g.innerHTML = parseInt(i.innerHTML) + parseInt(h.innerHTML)
                    i.innerHTML = 0
                    h.innerHTML = 0
                } else {
                    g.innerHTML = h.innerHTML
                    h.innerHTML = i.innerHTML
                    i.innerHTML = 0
                }
            }
        } else if (h.innerHTML == 0) {
            if (g.innerHTML == i.innerHTML) {
                g.innerHTML = parseInt(g.innerHTML) + parseInt(i.innerHTML)
                i.innerHTML = 0 
            } else {
                h.innerHTML = i.innerHTML
                i.innerHTML = 0
            }
        } else {
            if (g.innerHTML == h.innerHTML) {
                g.innerHTML = parseInt(g.innerHTML) + parseInt(h.innerHTML)
                h.innerHTML = i.innerHTML
                i.innerHTML =0 
            } else if (h.innerHTML == i.innerHTML) {
                h.innerHTML = parseInt(h.innerHTML) + parseInt(i.innerHTML)
                i.innerHTML = 0 
            }
        }
        droppingNew();

    } else if (event.key === "ArrowUp") {
        if (a.innerHTML == 0) {
            if (d.innerHTML == 0) {
                a.innerHTML = g.innerHTML
                g.innerHTML = 0
            } else {
                if (d.innerHTML == g.innerHTML) {
                    a.innerHTML = parseInt(g.innerHTML) + parseInt(d.innerHTML)
                    g.innerHTML = 0
                    d.innerHTML = 0
                } else {
                    a.innerHTML = d.innerHTML
                    d.innerHTML = g.innerHTML
                    g.innerHTML = 0
                }
            }
        } else if (d.innerHTML == 0) {
            if (a.innerHTML == g.innerHTML) {
                a.innerHTML = parseInt(a.innerHTML) + parseInt(g.innerHTML)
                g.innerHTML = 0 
            } else {
                d.innerHTML = g.innerHTML
                g.innerHTML = 0
            }
        } else {
            if (a.innerHTML == d.innerHTML) {
                a.innerHTML = parseInt(a.innerHTML) + parseInt(d.innerHTML)
                d.innerHTML = g.innerHTML
                g.innerHTML =0 
            } else if (d.innerHTML == g.innerHTML) {
                d.innerHTML = parseInt(d.innerHTML) + parseInt(g.innerHTML)
                g.innerHTML = 0 
            }
        }
        if (b.innerHTML == 0) {
            console.log("1")
            if (e.innerHTML == 0) {
            console.log("2")
                b.innerHTML = h.innerHTML
                h.innerHTML = 0
            } else {
            console.log("3")
            console.log(b.innerHTML)
                if (e.innerHTML == h.innerHTML) {
            console.log("4")
                    b.innerHTML = parseInt(h.innerHTML) + parseInt(e.innerHTML)
                    h.innerHTML = 0
                    e.innerHTML = 0
                } else {
            console.log("5")
            console.log(b.innerHTML)
                    b.innerHTML = e.innerHTML
                    e.innerHTML = h.innerHTML
                    h.innerHTML = 0
                }
            }
        } else if (e.innerHTML == 0) {
            console.log("6")
            if (b.innerHTML == h.innerHTML) {
            console.log("7")
                b.innerHTML = parseInt(b.innerHTML) + parseInt(h.innerHTML)
                h.innerHTML = 0 
            } else {
            console.log("8")
                e.innerHTML = h.innerHTML
                h.innerHTML = 0
            }
        } else {
            console.log("9")
            if (b.innerHTML == e.innerHTML) {
            console.log("10")
                b.innerHTML = parseInt(b.innerHTML) + parseInt(e.innerHTML)
                e.innerHTML = h.innerHTML
                h.innerHTML =0 
            } else if (e.innerHTML == h.innerHTML) {
            console.log("11")
                e.innerHTML = parseInt(e.innerHTML) + parseInt(h.innerHTML)
                h.innerHTML = 0 
            }
        }
        if (c.innerHTML == 0) {
            if (f.innerHTML == 0) {
                c.innerHTML = i.innerHTML
                i.innerHTML = 0
            } else {
                if (f.innerHTML == i.innerHTML) {
                    c.innerHTML = parseInt(i.innerHTML) + parseInt(f.innerHTML)
                    i.innerHTML = 0
                    f.innerHTML = 0
                } else {
                    c.innerHTML = f.innerHTML
                    f.innerHTML = i.innerHTML
                    i.innerHTML = 0
                }
            }
        } else if (f.innerHTML == 0) {
            if (c.innerHTML == i.innerHTML) {
                c.innerHTML = parseInt(c.innerHTML) + parseInt(i.innerHTML)
                i.innerHTML = 0 
            } else {
                f.innerHTML = i.innerHTML
                i.innerHTML = 0
            }
        } else {
            if (c.innerHTML == f.innerHTML) {
                c.innerHTML = parseInt(c.innerHTML) + parseInt(f.innerHTML)
                f.innerHTML = i.innerHTML
                i.innerHTML =0 
            } else if (f.innerHTML == i.innerHTML) {
                f.innerHTML = parseInt(f.innerHTML) + parseInt(i.innerHTML)
                i.innerHTML = 0 
            }
        }
        droppingNew();


    } else if (event.key === "ArrowDown") {
        if (g.innerHTML == 0) {
            if (d.innerHTML == 0) {
                g.innerHTML = a.innerHTML
                a.innerHTML = 0
            } else {
                if (d.innerHTML == a.innerHTML) {
                    g.innerHTML = parseInt(a.innerHTML) + parseInt(d.innerHTML)
                    a.innerHTML = 0
                    d.innerHTML = 0
                } else {
                    g.innerHTML = d.innerHTML
                    d.innerHTML = a.innerHTML
                    a.innerHTML = 0
                }
            }
        } else if (d.innerHTML == 0) {
            if (g.innerHTML == a.innerHTML) {
                g.innerHTML = parseInt(g.innerHTML) + parseInt(a.innerHTML)
                a.innerHTML = 0 
            } else {
                d.innerHTML = a.innerHTML
                a.innerHTML = 0
            }
        } else {
            if (g.innerHTML == d.innerHTML) {
                g.innerHTML = parseInt(g.innerHTML) + parseInt(d.innerHTML)
                d.innerHTML = a.innerHTML
                a.innerHTML =0 
            } else if (d.innerHTML == a.innerHTML) {
                d.innerHTML = parseInt(d.innerHTML) + parseInt(a.innerHTML)
                a.innerHTML = 0 
            }
        }
        if (h.innerHTML == 0) {
            console.log("1")
            if (e.innerHTML == 0) {
            console.log("2")
                h.innerHTML = b.innerHTML
                b.innerHTML = 0
            } else {
            console.log("3")
            console.log(h.innerHTML)
                if (e.innerHTML == b.innerHTML) {
            console.log("4")
                    h.innerHTML = parseInt(b.innerHTML) + parseInt(e.innerHTML)
                    b.innerHTML = 0
                    e.innerHTML = 0
                } else {
            console.log("5")
            console.log(h.innerHTML)
                    h.innerHTML = e.innerHTML
                    e.innerHTML = b.innerHTML
                    b.innerHTML = 0
                }
            }
        } else if (e.innerHTML == 0) {
            console.log("6")
            if (h.innerHTML == b.innerHTML) {
            console.log("7")
                h.innerHTML = parseInt(h.innerHTML) + parseInt(b.innerHTML)
                b.innerHTML = 0 
            } else {
            console.log("8")
                e.innerHTML = b.innerHTML
                b.innerHTML = 0
            }
        } else {
            console.log("9")
            if (h.innerHTML == e.innerHTML) {
            console.log("10")
                h.innerHTML = parseInt(h.innerHTML) + parseInt(e.innerHTML)
                e.innerHTML = b.innerHTML
                b.innerHTML =0 
            } else if (e.innerHTML == b.innerHTML) {
            console.log("11")
                e.innerHTML = parseInt(e.innerHTML) + parseInt(b.innerHTML)
                b.innerHTML = 0 
            }
        }
        if (i.innerHTML == 0) {
            if (f.innerHTML == 0) {
                i.innerHTML = c.innerHTML
                c.innerHTML = 0
            } else {
                if (f.innerHTML == c.innerHTML) {
                    i.innerHTML = parseInt(c.innerHTML) + parseInt(f.innerHTML)
                    c.innerHTML = 0
                    f.innerHTML = 0
                } else {
                    i.innerHTML = f.innerHTML
                    f.innerHTML = c.innerHTML
                    c.innerHTML = 0
                }
            }
        } else if (f.innerHTML == 0) {
            if (i.innerHTML == c.innerHTML) {
                i.innerHTML = parseInt(i.innerHTML) + parseInt(c.innerHTML)
                c.innerHTML = 0 
            } else {
                f.innerHTML = c.innerHTML
                c.innerHTML = 0
            }
        } else {
            if (i.innerHTML == f.innerHTML) {
                i.innerHTML = parseInt(i.innerHTML) + parseInt(f.innerHTML)
                f.innerHTML = c.innerHTML
                c.innerHTML =0 
            } else if (f.innerHTML == c.innerHTML) {
                f.innerHTML = parseInt(f.innerHTML) + parseInt(c.innerHTML)
                c.innerHTML = 0 
            }
        }
        droppingNew();


    }
});
