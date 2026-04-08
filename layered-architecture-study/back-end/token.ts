import jwt from "jsonwebtoken";

const SECRET_KEY = "chaveSuperSecreta123456";

export const gerarToken = (usuario: any) => {
  const payload = {
    id: usuario.id,
    email: usuario.email,
    role: usuario.role,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

const token = jwt.sign(
    {
        id: 1,
        email: "usuario@exemplo.com",
        role: "admin"
    },
    SECRET_KEY,
    {
        expiresIn: "1h",
    }
);

setTimeout(() => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log("Decodificado:", decoded);
    } catch (error) {
        console.error("Token invalido:", error.message);
    }
}, 5500)

console.log("JWT:", token);