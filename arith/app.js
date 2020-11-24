
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const msg = document.getElementById("errorMessage")
const n1 = document.getElementById("step1")
const n2 = document.getElementById("step2")
const n3 = document.getElementById("step3")
const n4 = document.getElementById("step4")
const nature = document.getElementById("nature")
const field = document.getElementById("field")
const solution = document.getElementById("solution")



function solve(){
  if(a.value.length == 0 || b.value.length ==0 || c.value.length == 0){
    msg.innerHTML = "All fields are Required!"
    msg.style.display = "block"
    msg.style.color = "red"
  }else{
    msg.innerHTML = ""
    msg.style.display = "none"
    field.style.display = "none"
    solution.style.display = "block"
    
    let s1 = Number(a.value) * Number(c.value)
    let s2 = -4 *s1
    let s3 = Number(b.value) * Number(b.value)
    let s4
    
    n1.innerHTML = "D="+b.value + "<sup>2</sup>-4(" + a.value  + ")(" + c.value +")"
    n2.innerHTML = "D="+b.value+ "<sup>2</sup>-4(" + s1 +")"
    if(s2 < 0){
      console.log(`Status: Negative, Value: ${s2}`)
       n3.innerHTML = `D=${s3}${s2}`
       s4 = s3 - Math.abs(s2)
    }else{
      console.log(`Status: Positive, Value: ${s2}`)
      n3.innerHTML = `D=${s3}+${s2}`
      s4 = s3 + s2

    }
    n4.innerHTML = `D=${s4}`
    if(s4 == 0){
      nature.innerHTML = "Since the value D=0, Therefore the Quadratic Equation are real numbers and are Equal."
    }else{
      if(s4>0){
        let numSquareRoot = Math.sqrt(s4)
        if(s4-s4*s4 == 0){
          nature.innerHTML = "Since the value D>0 and Perfect Square, Therefore the roots of the Quadratic Equation are rational numbers and not equal."
        }else{
          nature.innerHTML = "Since the value D>0 but not a Perfect Square, Therefore the roots of the Quadratic Equation are irrational numbers and not equal."
        }
      }else{
        nature.innerHTML = "Since the D<0, Therefore the Quadratic Equation has no Real Roots."
      }
    }
    
  }
}

function tryAgain()
{
  console.log("Try Again\nThis Tool is made by JL Romero Juanitas")
  field.style.display = "block"
  solution.style.display = "none"
  a.value = ""
  b.value = ""
  c.value = ""
  
}
