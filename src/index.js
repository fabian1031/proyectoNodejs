import servidor from "./servidor.js";

servidor.listen(3000, () => {
    console.log("El servidor está escuchando en el enlace http://localhost:3000");
});
