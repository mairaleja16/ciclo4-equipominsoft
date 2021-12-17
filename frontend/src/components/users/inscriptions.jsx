import React, { Component } from 'react'

export default function Registro() {

    return(
            <div>
                <main class="container user">
                    <h1>Gestión de Usuarios</h1>
                    <form class="form-group" name="selector">
                        <label for="rol">Usuario</label>
                        <input class="form-control" />
                        <label for="rol">Seleccionar el rol</label>
                        <select class="form-control" name="rol" id="rol">
                            <option>Administrador</option>
                            <option>Vendedor</option>
                        </select>
                        <label for="rol">Estado del usuario</label>
    
                        <select class="form-control" name="estado" id="estado">
                            <option>Pendiente</option>
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select>
                        <input type="button" id="btn" value="Update" onclick="update()" />
                    </form>
                </main>
            </div>
        )
    
    }
    
