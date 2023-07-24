import { Expose, Type, Transform } from "class-transformer";
import mysql from 'mysql2';
import {
  IsDefined,
  IsNumber,
  IsEmail,
  IsString,
  isNumber,
} from "class-validator";
export class StorageLibros {
  @Expose({ name: "id-libro" })
  @IsNumber(
    {},
    {
      message: () => {
        throw { status: 422, message: `El id no cumple con el formato` };
      },
    }
  )
  @IsDefined({
    message: () => {
      throw { status: 422, message: "El parametro es obligatorio -> id-libro" };
    },
  })
  id_libro: number;
  @Expose({ name: "id-autor" })
  @IsNumber(
    {},
    {
      message: () => {
        throw { status: 422, message: `El id no cumple con el formato` };
      },
    }
  )
  @IsDefined({
    message: () => {
      throw { status: 422, message: "El parametro es obligatorio -> id-autor" };
    },
  })
  id_autor: number;
  @Expose({ name: "id-categoria" })
  @IsNumber(
    {},
    {
      message: () => {
        throw { status: 422, message: `El id no cumple con el formato` };
      },
    }
  )
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: "El parametro es obligatorio ->id-categoria",
      };
    },
  })
  id_categoria: number;
  @Expose({ name: "id-editorial" })
  @IsNumber(
    {},
    {
      message: () => {
        throw { status: 422, message: `El id no cumple con el formato` };
      },
    }
  )
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: "El parametro es obligatorio -> id-editorial",
      };
    },
  })
  id_editorial: number;
  @Expose({ name: "titulo" })
  @Transform(
    ({ value }) => {
      if (/^[a-z A-Z]+$/.test(value)) return (value) ? value : "Libro";
      else
        throw {
          status: 406,
          message: `El datos titulos no cunple con los parametros acordados`,
        };
    },
    { toClassOnly: true }
  )
  titulo: string;
  @Expose({ name: "anio-publicacion" })
  @Transform(
    ({ value }) => {
      if (/^[0-9]|undefined+$/.test(value)) return (value) ? value : 2022;
      else
        throw {
          status: 406,
          message: `El datos titulos no cunple con los parametros acordados`,
        };
    },
    { toClassOnly: true }
  )
  anio_publicacion: number;
  @Expose({ name: "isbn" })
  @Transform(
    ({ value }) => {
      if (/^[0-9]|undefined|-+$/.test(value)) return value;
      else
        throw {
          status: 406,
          message: `El datos de isbn no cunple con los parametros acordados`,
        };
    },
    { toClassOnly: true }
  )
  isbn: string;
  @Expose({ name: "num-paginas" })
  @Transform(
    ({ value }) => {
      if (/^[0-9]|undefined+$/.test(value)) return (value) ? value : 0;
      else
        throw {
          status: 406,
          message: `El datos num-paginas no cunple con los parametros acordados`,
        };
    },
    { toClassOnly: true }
  )
  num_paginas: number;
  @Expose({ name: "id-estado" })
  @IsNumber(
    {},
    {
      message: () => {
        throw { status: 422, message: `El id-estado no cumple con el formato` };
      },
    }
  )
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: "El parametro es obligatorio -> id-estado",
      };
    },
  })
  id_estado: number;

  constructor(
    id_libro: number,
    id_autor: number,
    id_categoria: number,
    id_editorial: number,
    titulo: string = "libro",
    id_estado: number,
    num_paginas: number,
    isbn: string,
    anio_publicacion: number = 2005
  ) {
    this.id_libro = id_libro;
    this.id_autor = id_autor;
    this.id_categoria = id_categoria;
    this.id_editorial = id_editorial;
    this.titulo = titulo;
    this.anio_publicacion = anio_publicacion;
    this.isbn = isbn;
    this.num_paginas = num_paginas;
    this.id_estado = id_estado;
  }

  get guardar() {
    return
  }
}
