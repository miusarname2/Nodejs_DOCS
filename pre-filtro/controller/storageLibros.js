var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
import { IsDefined, IsNumber, } from "class-validator";
export class StorageLibros {
    constructor(id_libro, id_autor, id_categoria, id_editorial, titulo = "libro", id_estado, num_paginas, isbn, anio_publicacion = 2005) {
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
        return;
    }
}
__decorate([
    Expose({ name: "id-libro" }),
    IsNumber({}, {
        message: () => {
            throw { status: 422, message: `El id no cumple con el formato` };
        },
    }),
    IsDefined({
        message: () => {
            throw { status: 422, message: "El parametro es obligatorio -> id-libro" };
        },
    }),
    __metadata("design:type", Number)
], StorageLibros.prototype, "id_libro", void 0);
__decorate([
    Expose({ name: "id-autor" }),
    IsNumber({}, {
        message: () => {
            throw { status: 422, message: `El id no cumple con el formato` };
        },
    }),
    IsDefined({
        message: () => {
            throw { status: 422, message: "El parametro es obligatorio -> id-autor" };
        },
    }),
    __metadata("design:type", Number)
], StorageLibros.prototype, "id_autor", void 0);
__decorate([
    Expose({ name: "id-categoria" }),
    IsNumber({}, {
        message: () => {
            throw { status: 422, message: `El id no cumple con el formato` };
        },
    }),
    IsDefined({
        message: () => {
            throw {
                status: 422,
                message: "El parametro es obligatorio ->id-categoria",
            };
        },
    }),
    __metadata("design:type", Number)
], StorageLibros.prototype, "id_categoria", void 0);
__decorate([
    Expose({ name: "id-editorial" }),
    IsNumber({}, {
        message: () => {
            throw { status: 422, message: `El id no cumple con el formato` };
        },
    }),
    IsDefined({
        message: () => {
            throw {
                status: 422,
                message: "El parametro es obligatorio -> id-editorial",
            };
        },
    }),
    __metadata("design:type", Number)
], StorageLibros.prototype, "id_editorial", void 0);
__decorate([
    Expose({ name: "titulo" }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return (value) ? value : "Libro";
        else
            throw {
                status: 406,
                message: `El datos titulos no cunple con los parametros acordados`,
            };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], StorageLibros.prototype, "titulo", void 0);
__decorate([
    Expose({ name: "anio-publicacion" }),
    Transform(({ value }) => {
        if (/^[0-9]|undefined+$/.test(value))
            return (value) ? value : 2022;
        else
            throw {
                status: 406,
                message: `El datos titulos no cunple con los parametros acordados`,
            };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], StorageLibros.prototype, "anio_publicacion", void 0);
__decorate([
    Expose({ name: "isbn" }),
    Transform(({ value }) => {
        if (/^[0-9]|undefined|-+$/.test(value))
            return value;
        else
            throw {
                status: 406,
                message: `El datos de isbn no cunple con los parametros acordados`,
            };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], StorageLibros.prototype, "isbn", void 0);
__decorate([
    Expose({ name: "num-paginas" }),
    Transform(({ value }) => {
        if (/^[0-9]|undefined+$/.test(value))
            return (value) ? value : 0;
        else
            throw {
                status: 406,
                message: `El datos num-paginas no cunple con los parametros acordados`,
            };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], StorageLibros.prototype, "num_paginas", void 0);
__decorate([
    Expose({ name: "id-estado" }),
    IsNumber({}, {
        message: () => {
            throw { status: 422, message: `El id-estado no cumple con el formato` };
        },
    }),
    IsDefined({
        message: () => {
            throw {
                status: 422,
                message: "El parametro es obligatorio -> id-estado",
            };
        },
    }),
    __metadata("design:type", Number)
], StorageLibros.prototype, "id_estado", void 0);
