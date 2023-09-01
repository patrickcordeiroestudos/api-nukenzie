import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Banco de dados conectado");
    })
    .catch((err) => {
      console.error("Erro durante a inicialização do DataSource", err);
    });

  app.listen(3000, () => {
    console.log("Servidor executando", 3000);
  });
})();
