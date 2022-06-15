var global = "Hola!"

function a(){
    console.log(global);
    global = "Hello!"
}

function b(){
    var global = "Chao!"
    console.log(global)
}

// El log devuelve 'Hola!' ya que la reasignación se hace luego
a();

// El log devuelve 'Chao!' ya que está accediendo a la variable global declarada dentro de la funcion
b();

// El log devuelve 'Hello!' ya que accede a la variable global del scope global, que fue reasignada en la funcion a()
console.log(global)