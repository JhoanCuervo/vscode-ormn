# ORMN Snippets para VS Code

Extensión de VS Code que agrega **IntelliSense** y **snippets** para trabajar con [ORMN](https://github.com/JhoanCuervo/ORMN), el ORM ligero para Google Apps Script que convierte Google Sheets en una base de datos.

## Características

- **Autocompletado**: al escribir `.` después de cualquier objeto, sugiere los ~30 métodos de ORMN con firma y documentación
- **20 snippets**: prefijos `ormn-*` que expanden código listo para usar
- **Dos idiomas**: documentación, tooltips y snippets en español e inglés, se adapta al idioma de VS Code

## Uso

### Snippets

Escribí el prefijo en un archivo `.js` y presioná `Tab` o `Enter`:

| Prefijo | Descripción |
|---------|-------------|
| `ormn-open` | Abrir base de datos + obtener tablas |
| `ormn-openOpts` | Abrir con las 7 opciones de configuración |
| `ormn-all` | Obtener todos los registros + iterar |
| `ormn-find` | Buscar registro por ID |
| `ormn-firstBy` | Primera coincidencia por columna y valor |
| `ormn-firstByCI` | Primera coincidencia (case-insensitive) |
| `ormn-findManyBy` | Varias coincidencias por columna |
| `ormn-findManyByCI` | Varias coincidencias (case-insensitive) |
| `ormn-firstByQuery` | Primera coincidencia con expresión JS |
| `ormn-findManyByQuery` | Varias coincidencias con expresión JS |
| `ormn-exist` | Verificar existencia + bloque `if` |
| `ormn-count` | Contar registros |
| `ormn-lastRow` | Última fila registrada |
| `ormn-create` | Insertar un registro |
| `ormn-createMany` | Insertar varios registros a la vez |
| `ormn-save` | Buscar, modificar y guardar cambios |
| `ormn-delete` | Buscar y eliminar una fila |
| `ormn-deleteMany` | Eliminar por búsqueda masiva |
| `ormn-deleteAll` | Eliminar todos los registros (¡cuidado!) |

### Autocompletado

Al escribir `.` en un archivo JavaScript, VS Code muestra todos los métodos disponibles agrupados por tipo de ícono:

**🔧 Métodos** — funciones que ejecutan acciones:

| Nivel | Métodos |
|-------|---------|
| `ORMN` | `openDb` |
| `db` | `_getTables` |
| `tabla` | `_count`, `_lastRow`, `_all`, `_find`, `_firstBy`, `_findManyBy`, `_firstByQuery`, `_findManyByQuery`, `_exist`, `_create`, `_createMany`, `_deleteAll` |
| `fila` | `_save`, `_delete` |
| `resultado` | `_delete` |

**📦 Propiedades** — datos accesibles directamente:

| Nivel | Propiedades |
|-------|-------------|
| `db` | `_name`, `_id`, `_url` |
| `tabla` | `_headers`, `_name`, `_index`, `_sheetId` |
| `fila` | `_rowIndex` |
| `resultado` | `data` |

Cada método muestra su firma y documentación en el tooltip. VS Code filtra automáticamente según lo que escribas: al escribir `_` después del punto solo aparecen los métodos con ese prefijo.

### Ejemplo de flujo

```js
// Escribí ormn-open → Tab
const db = ORMN.openDb('spreadsheetId')
const { Tabla } = db._getTables()

// Escribí Tabla. → autocompletado muestra todos los métodos
// Escribí Tabla._ → autocompletado filtra métodos con _
const { data } = Tabla._all()
data.forEach(fila => console.log(fila))

// Escribí ormn-find → Tab
const fila = Tabla._find('id')

// Escribí ormn-save → Tab
const fila = Tabla._find('id')
fila.campo = 'nuevo valor'
fila._save()
```

## Requisitos

- VS Code 1.118 o superior
- Usar la extensión en archivos JavaScript

## Notas de versión

### 0.0.1

- Versión inicial
- Autocompletado de ~30 métodos y propiedades ORMN
- 20 snippets con prefijo `ormn-`
- Soporte español/inglés (i18n)
