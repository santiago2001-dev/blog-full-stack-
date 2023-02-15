export class post {
    id : number
    titulo :string 
    contenido : string 
    autor :string 
    imagen : string
    constructor(  
        id : number,
        titulo :string ,
        contenido : string ,
        autor :string ,
        imagen : string){
            this.id = id
            this.titulo = titulo
            this.contenido = contenido
            this.imagen = imagen
            this.autor = autor

    }
}

export class postadd {
    
    titulo :string 
    contenido : string 
    autor :string 
    imagen : string
    constructor(  
        
        titulo :string ,
        contenido : string ,
        autor :string ,
        imagen : string){
            this.titulo = titulo
            this.contenido = contenido
            this.imagen = imagen
            this.autor = autor

    }
}