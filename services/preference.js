const Preference = require("../models/preference");

class PreferenceService {
  async CreatePreference(preference) {
    try {
      const exists_preference = await Preference.query().where({
        user_id: preference.user_id,
      });
      if (exists_preference.length > 0) {
        const result = await Preference.query()
          .where({ user_id: preference.user_id })
          .update(preference);
        return {
          status: true,
          message: "preference updated successfully",
          data: result,
        };
      }
      const result = await Preference.query().insert(preference);
      return {
        status: true,
        message: "preference created successfully",
        data: result,
      };
    } catch (error) {
      return { status: false, message: error.message };
    }
  }
}

module.exports = PreferenceService;
