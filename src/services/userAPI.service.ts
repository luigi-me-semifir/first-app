import http from "../http-common";
import User from "../models/user";

class DataService {
  /**
   * request to receive all my data.
   */
  find() {
    return http.get<User[]>(`/`);
  }

  /**
   *Request to receive the data of a user according to the id.
   */
  findByid(id: number) {
    return http.get<User>(`/${id}`);
  }
}

export default new DataService();
