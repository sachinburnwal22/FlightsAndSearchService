const { City } = require("../models/index");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destry({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async updateCity(cityId, { data }) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async getCity(cityID) {
    try {
      const city = await City.findByPk(cityID);
      return city;
    } catch (error) {
      console.log("Something went wrong");
    }
  }
}

module.exports = CityRepository;
