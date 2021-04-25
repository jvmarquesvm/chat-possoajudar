import { http  } from "./http";
import "./websocket/admin";
import "./websocket/client";

//app.listen(3333, () => console.log("Server is runing port 3333"));
http.listen(3333, () => console.log("Server is runing port 3333"));
