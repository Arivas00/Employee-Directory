import axios from "axios";

export default {
    employeeList: function() {
        return axios.get("https://randomuser.me/api/?results=50")
    }
};